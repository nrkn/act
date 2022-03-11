const assert = require( 'assert' )

const { createSeq } = require( '../dist/util' )
const { fromAct, toAct } = require( '../dist/index' )
const { writeFileSync } = require('fs')

const pal256 = {
  palette: createSeq( 256, i => [ i, i, i ] )
}

const pal256Trans = {
  palette: createSeq( 256, i => [ i, i, i ] ),
  transparent: 255
}

const pal16 = {
  palette: createSeq( 16, i => [ i * 17, i * 17, i * 17 ] )
}

const pal16Trans = {
  palette: createSeq( 16, i => [ i * 17, i * 17, i * 17 ] ),
  transparent: 15
}

const pals = { pal256, pal256Trans, pal16, pal16Trans }

describe( 'ACT', () => {
  for( const key in pals ){
    const pal = pals[ key ]

    it( `round trips ${ key }`, () => {
      const act = toAct( pal )

      writeFileSync( 'out.act', act )
      
      const round = fromAct( act )

      assert.deepStrictEqual( pal, round )
    })
  }  
})