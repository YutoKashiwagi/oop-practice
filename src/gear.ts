export default class Gear {
  readonly chainRing: number
  readonly cog: number

  constructor (chainRing: number, cog: number) {
    this.chainRing = chainRing
    this.cog = cog
  }

  ratio = (): number => {
    return this.chainRing / this.cog
  }
}
