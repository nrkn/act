const assert = require( 'assert' )

const { createSeq } = require( '../dist/util' )
const { fromAct, toAct } = require( '../dist/index' )
const { readFileSync } = require('fs')

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
    const expectAct = readFileSync( `./test/fixtures/${ key }.act` )    

    describe( key, () => {
      it( 'fixtures match disk', () => {
        const actPal = fromAct( expectAct )

        assert.deepStrictEqual( pal, actPal )
      })
  
      it( `round trips`, () => {
        const act = toAct( pal )
        const round = fromAct( act )
  
        assert.deepStrictEqual( pal, round )
      })
  
    })
  }  
})