import { Gear, Wheel } from './gear'

const wheel = new Wheel(26, 1.5)
console.assert(wheel.circumference() === 91.106186954104)
console.assert(wheel.diameter() === 29)

const gear = new Gear(52, 11, wheel)
console.assert(gear.gearInches() === 137.0909090909091)
