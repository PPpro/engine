
import { Material } from '../../3d/assets/material';
import RecyclePool from '../../3d/memop/recycle-pool';
import { Color } from '../../core/value-types';

export class IRenderData {
    public x: number = 0;
    public y: number = 0;
    public z: number = 0;
    public u: number = 0;
    public v: number = 0;
    public color: Color = Color.WHITE;
}

class BaseRenderData {
    public material: Material | null = null;
    public vertexCount: number = 0;
    public indiceCount: number = 0;
}

export class RenderData extends BaseRenderData {

    get dataLength () {
        return this._datas.length;
    }

    set dataLength (length: number) {
        const data: IRenderData[] = this._datas;
        if (data.length !== length) {
            // // Free extra data
            const value = data.length;
            let i = 0;
            for (i = value; i < length; i++) {
                data[i] = _dataPool.add();
            }
            for (i = value; i > length; i--) {
                _dataPool.removeAt(i);
                data.splice(i, 1);
            }
        }
    }

    get datas () {
        return this._datas;
    }

    public static add () {
        const data = _pool.add();
        return {
            pooID: _pool.length - 1,
            data,
        };
    }

    public static remove (idx: number) {
        _pool.data[idx].clear();
        _pool.removeAt(idx);
    }

    public uvDirty: boolean = true;
    public vertDirty: boolean = true;
    private _datas: IRenderData[] = [];
    private _indices: number[] = [];
    private _pivotX: number = 0;
    private _pivotY: number = 0;
    private _width: number = 0;
    private _height: number = 0;

    public updateSizeNPivot (width: number, height: number, pivotX: number, pivotY: number) {
        if (width !== this._width ||
            height !== this._height ||
            pivotX !== this._pivotX ||
            pivotY !== this._pivotY) {
            this._width = width;
            this._height = height;
            this._pivotX = pivotX;
            this._pivotY = pivotY;
            this.vertDirty = true;
        }
    }

    public clear () {
        this._datas.length = 0;
        this._indices.length = 0;
        this._pivotX = 0;
        this._pivotY = 0;
        this._width = 0;
        this._height = 0;
        this.uvDirty = true;
        this.vertDirty = true;
        this.material = null;
        this.vertexCount = 0;
        this.indiceCount = 0;
    }
}

const _dataPool = new RecyclePool(() => {
    return new IRenderData();
}, 128);

const _pool = new RecyclePool( () => {
    return new RenderData();
}, 32);