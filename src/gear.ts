export default class Gear {
  readonly chainRing: number
  readonly cog: number
  readonly rim: number
  readonly tire: number

  constructor (chainRing: number, cog: number, rim: number, tire: number) {
    this.chainRing = chainRing
    this.cog = cog
    this.rim = rim
    this.tire = tire
  }

  // ギア比
  ratio = (): number => {
    return this.chainRing / this.cog
  }

  // 車輪の直径
  diameter = (): number => {
    return this.rim + (this.tire * 2)
  }

  // ギアインチ
  gearInches = (): number => {
    return this.ratio() * this.diameter()
  }
}
