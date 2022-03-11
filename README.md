# act

Read and write Adobe Color Table files

`npm install @nrkn/act`

```js
const { fromAct, toAct } = require( '@nrkn/act' )
```

```js
import { fromAct, toAct } from '@nrkn/act'
```

## fromAct

Reads an Adobe Color Table .ACT file from an ArrayLike<number> 
(eg `Buffer`, `Uint8Array`, `[1,2,3]`, etc ) and returns a Palette object

```ts
type Palette = {
  palette: [ number, number, number ][]
  transparent?: number
}
```

With no transparency:

```js
const act = readFileSync( 'palette.act' )

const pal = fromAct( act )

// { palette: [ [ 0, 0, 0 ], [ 255, 255, 255 ] ] } 
console.log( pal )
```

With transparency:

```js
const act = readFileSync( 'palette-with-transparency.act' )

const pal = fromAct( act )

// { palette: [ [ 0, 0, 0 ], [ 255, 255, 255 ] ], transparent: 1 } 
console.log( pal )
```

## toAct

Takes a Palette (see above) and returns an Adobe Color Table .ACT file encoded as a Uint8ClampedArray

With no transparency:

```js
const pal = { palette: [ [ 0, 0, 0 ], [ 255, 255, 255 ] ] }

const act = toAct( pal )

writeFileSync( 'palette.act', act )
```

With transparency:

```js
const pal = { 
  palette: [ [ 0, 0, 0 ], [ 255, 255, 255 ] ],
  transparent: 1
}

const act = toAct( pal )

writeFileSync( 'palette-with-transparency.act', act )
```

## license

MIT License

Copyright (c) 2022 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
