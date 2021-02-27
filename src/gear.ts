export class Gear {
  readonly chainRing: number
  readonly cog: number
  readonly Wheel: Wheel | null

  constructor (chainRing: number, cog: number, Wheel: Wheel | null = null) {
    this.chainRing = chainRing
    this.cog = cog
    this.Wheel = Wheel
  }

  // ギア比
  ratio (): number {
    return this.chainRing / this.cog
  }

  // ギアインチ
  gearInches (): number {
    if (this.Wheel === null) {
      throw new Error('Wheelを入力してください')
    }

    return this.ratio() * this.Wheel.diameter()
  }
}

export class Wheel {
  readonly rim: number
  readonly tire: number

  constructor (rim: number, tire: number) {
    this.rim = rim
    this.tire = tire
  }

  // 車輪の直径
  diameter (): number {
    return this.rim + (this.tire * 2)
  }

  // 車輪の演習
  circumference (): number {
    return this.diameter() * Math.PI
  }
}
