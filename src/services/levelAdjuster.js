import random from './randomizer'

export function decrease(number, min, max) {
  return Math.max(0, number - adjustment(min, max))
}

export function increase(number, ceiling, min, max) {
  return Math.min(ceiling, number + adjustment(min, max))
}

function adjustment(min, max) {
  return max
    ? random(min, max)
    : min
}
