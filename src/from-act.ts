import { Bytes, Palette, RGB } from './types'
import { chunk } from './util'

export const fromAct = (act: Bytes): Palette => {
  if (act.length === 768) return {
    palette: chunk(Array.from(act), 3) as RGB[]
  }

  const bytes = Array.from(act)
  const footer = bytes.slice(-4)

  const SIZE = footer.slice(0, 2)
  const TRANS = footer.slice(-2)

  const is256 = SIZE[0] === 1 && SIZE[1] === 0
  const entryCount = is256 ? 256 : SIZE[1]
  const entries = bytes.slice(0, 3 * entryCount)

  const palette = chunk(entries, 3) as RGB[]
  
  const transparent = TRANS[0] === 0 ? TRANS[1] : undefined
  const isTrans = transparent !== undefined

  if( isTrans && transparent >= entryCount ){
    throw Error( `fromAct: expected transparent index to be in range of entries ([0-${ entryCount }]), saw "${ transparent }"` )
  }

  return isTrans ? { palette, transparent } : { palette }
}
