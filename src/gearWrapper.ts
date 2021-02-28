import type { Gear, WheelInterface } from './gear'

// Gearクラスを提供する外部のフレームワーク
const SomeFrameWork = {
  Gear: class Gear {
    readonly chainRing: number
    readonly cog: number
    readonly Wheel: WheelInterface

    // 外部フレームワークの事情により、コンストラクターの引数が固定順になっている
    constructor (chainRing: number, cog: number, Wheel: WheelInterface) {
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
}

class GearWrapper {
  readonly chainRing: number
  readonly cog: number
  readonly Wheel: WheelInterface

  // コンストラクタの引数を順不同にする
  constructor ({ chainRing, cog, Wheel }: { chainRing: number, cog: number, Wheel: WheelInterface }) {
    this.chainRing = chainRing
    this.cog = cog
    this.Wheel = Wheel
  }

  gear (): Gear {
    return new SomeFrameWork.Gear(this.chainRing, this.cog, this.Wheel)
  }
}

const WheelDuck: WheelInterface = {
  diameter: () => 29
}

// フレームワークの事情により、引数の順番が固定されている
const SomeFrameWorkGear = new SomeFrameWork.Gear(52, 11, WheelDuck)
console.log(SomeFrameWorkGear)

// GearWrapperのおかげで、引数が順不同になった
const wrapped = (new GearWrapper({ cog: 11, chainRing: 52, Wheel: WheelDuck })).gear()
console.log(wrapped)
