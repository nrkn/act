import { Palette } from './types'
import { createSeq } from './util'

const actSize = 772

export const toAct = ( pal: Palette ) => {  
  const { palette, transparent } = pal
  const entryCount = palette.length
  const isTrans = transparent !== undefined

  if( entryCount > 256 ) throw Error( 'Expected 256 or less palette entries' )

  if( !isTrans && palette.length === 256 ){
    return new Uint8ClampedArray( palette.flat() )
  }

  if( isTrans && transparent >= entryCount ){
    throw Error( `toAct: expected transparent index to be in range of entries ([0-${ entryCount }]), saw "${ transparent }"` )
  }

  const SIZE = entryCount === 256 ? [ 1, 0 ] : [ 0, entryCount ]
  const TRANS = isTrans ? [ 0, transparent ] : [ 0xff, 0xff ]
  
  const header = palette.flat()
  const footer = [ ...SIZE, ...TRANS ]
  const padSize = actSize - header.length - footer.length
  const pad = createSeq( padSize, () => 0 )
  const bytes = [ ...header, ...pad, ...footer ]

  return new Uint8ClampedArray( bytes )
}
