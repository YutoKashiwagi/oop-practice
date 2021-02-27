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

  // ギアインチ = 車輪の直径 x ギア比
  // 車輪の直径 = リムの直径 + (タイヤの厚み x 2)
  gearInches = () => {
    const diameter = this.rim + (this.tire * 2)
    return this.ratio() * diameter
  }
}
