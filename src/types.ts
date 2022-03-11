export type Bytes = ArrayLike<number>
export type RGB = [ number, number, number ]

export type PaletteEntries = RGB[]

export type Palette = {
  palette: PaletteEntries
  transparent?: number
}
