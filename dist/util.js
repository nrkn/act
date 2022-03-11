"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeq = exports.chunk = void 0;
const chunk = (arr, size) => {
    const chunkCount = arr.length / size;
    const chunks = [];
    for (let i = 0, j = 0; i < chunkCount; i++, j += size) {
        chunks[i] = arr.slice(j, j + size);
    }
    return chunks;
};
exports.chunk = chunk;
const createSeq = (length, cb) => Array.from({ length }, (_v, k) => cb(k));
exports.createSeq = createSeq;
//# sourceMappingURL=util.js.map