import { Gear, Wheel, WheelInterface } from './gear'

const wheel = new Wheel({ rim: 26, tire: 1.5 })
console.assert(wheel.circumference() === 91.106186954104)
console.assert(wheel.diameter() === 29)

const WheelDuck: WheelInterface = {
  diameter: () => 29
}

const gear = new Gear({ chainRing: 52, cog: 11, Wheel: WheelDuck })
console.assert(gear.gearInches() === 137.0909090909091)
