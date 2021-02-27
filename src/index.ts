import { Gear, Wheel, WheelInterface } from './gear'

const wheel = new Wheel(26, 1.5)
console.assert(wheel.circumference() === 91.106186954104)
console.assert(wheel.diameter() === 29)

const WheelDuck: WheelInterface = {
  diameter: () => 29
}

const gear = new Gear(52, 11, WheelDuck)
console.assert(gear.gearInches() === 137.0909090909091)
