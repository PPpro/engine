import { deprecateModuleExportedName } from '@cocos/core';

deprecateModuleExportedName({
    BaseNode: {
        newName: 'Node',
        since: '3.7.0',
        removed: false,
    },
});
