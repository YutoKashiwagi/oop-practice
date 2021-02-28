export class Gear {
  readonly chainRing: number
  readonly cog: number
  readonly Wheel: WheelInterface

  constructor ({ chainRing, cog, Wheel }: { chainRing: number, cog: number, Wheel: WheelInterface }) {
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
    return this.ratio() * this.diameter()
  }

  // diameterをGearクラス内のメソッドにする
  diameter (): number {
    return this.Wheel.diameter()
  }
}

export interface WheelInterface {
  diameter(): number
}

export class Wheel implements WheelInterface {
  readonly rim: number
  readonly tire: number

  constructor ({ rim, tire }: { rim: number, tire: number }) {
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
