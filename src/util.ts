export const chunk = <T>(arr: T[], size: number) => {
  const chunkCount = arr.length / size
  const chunks: T[][] = []

  for (let i = 0, j = 0; i < chunkCount; i++, j += size) {
    chunks[i] = arr.slice(j, j + size)
  }

  return chunks
}

export const createSeq = <T>(length: number, cb: (i: number) => T) =>
  Array.from({ length }, (_v, k) => cb(k))
