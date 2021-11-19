目前的设计是希望向用户开放 Audio2D 类，用户可以从 AudioClip 里直接创建 Audio2D 对象

```ts
// 接口设计
interface AudioOptions {
    loop: boolean;
    volume: number;
    // ...
}
declare class AudioClip {
    public createAudio(options: AudioOptions, cb: (audio2D: Audio2D) => void): Audio2D;
    // ...
}

// 创建 Audio2D 实例
audioClip.createAudio(options: AudioOptions, function (audio2D: Audio2D) {
    audio2D.play();  // 同步播放
});
// or
audio2D = audioClip.createAudio(options: AudioOptions);
audio2D.play(); // 异步播放

// OneShot 播放
audioClip.playOneShot();

// 事件监听
audio2D.on(Audio2D.EventType.ENDED, cb, target);
```

## 新旧方案的对比

2.x audioEngine:
- 用户引用一个 audio id, 其实是一种用户对 audio 对象弱引用的设计
- 好处是用户不需要关心 audio 对象的销毁时间点
- 坏处是，用户永远也不会知道，audio 什么时候会被销毁，正常的使用是，每次播放之前都要判断 audio id 是否有效
- 另一个不好的设计是，audioEngine 实现了 audio 的回收逻辑，这块其实更像是游戏的业务逻辑，希望能够交给用户自己管理，引擎不做 audio 管理工作

Audio2D:
- 直接将 Audio2D 对象暴露给用户，包括 destroy 接口
- 好处是用户拥有对 Audio2D 对象的绝对控制权，可以自己实现一个符合自己项目业务逻辑的 audioManager
- 可以通过事件接口监听 Audio2D 对象的打断事件（比如超出播放限制、退到后台、摘下耳机等）
- 坏处是：用户对 Audio2D 对象是强引用，需要时刻记得调用 destroy 接口
- 未来 Audio2D 还可以在原生上支持 playbackRate， panner 

## 是否存在 “用户对音频保持弱引用” 的需求 ？
有，比如游戏里的枪声和打击声，播放完就立即销毁，用户不希望每次都做一次加载，播放完手动 destroy，这样操作起来太繁琐了。  
针对这个需求，打算重新开放 AudioClip.playOneShot() 接口。  

## AudioSource.playOneShot(audioClip, volume) 是否仍然有意义 ？
有，AudioSource 之后会侧重于支持 3D 音频，3D 音效相关的需求仍然会存在。
所以 AudioSource.playOneShot() 接口仍然需要保留。
AudioClip.playOneShot() 只是满足 2D 音效的需求。

## Audio2D 如何知道自己被系统事件打断了 ？
```ts
audio2D = audioClip.createAudio(options: AudioOptions);
audio2D.on(Audio2D.EventType.INTERRUPTED, () => {
    // DO SOMETHING...
});
```

## AudioSource 未来的方向
- 支持 [spatialAudio](https://playground.babylonjs.com/#2AH4YH) 和 [directionalAudio](https://playground.babylonjs.com/#1BO0YS) （依赖于 AudioListener 组件）
- 开放 maxDistance， panningModel 和 distanceModel 属性（左右声道音量衰减算法，服务于 spatialAudio 和 directionalAudio）

其他可以支持的音频需求（优先级不高）：
- lip sync
- Analyzer 音图生成
- Audio2D fade in / out
- audioSprite 多音频合批，减少加载请求次数 (https://www.npmjs.com/package/audiosprite)
- AudioGroup （用户可以自己在业务逻辑里实现）
