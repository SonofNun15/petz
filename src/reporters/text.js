import Pet from '../models/pet'
import io from '../io'

export function report(pet, day) {
  console.log(`***** DAY ${day} *****`)

  const state = pet.state

  if (!pet.alive) {
    console.log(`${pet.name} has died. :'(`)
    console.log(`${pet.name} reached level ${state.level}`)
    return
  }

  console.log(`${pet.name} wakes up`)
  console.log(`${pet.name} is at level ${state.level}`)

  reportHappiness(pet.name, state.happiness)
  reportFood(pet.name, state.food)
  reportEnergy(pet.name, state.energy)
  reportHealth(pet.name, state.health)
}

function reportHappiness(name, happiness) {
  if (happiness > 10) {
    console.log(`${name} is very happy! :D`)
  } else if (happiness < 5) {
    console.log(`${name} is unhappy... :(`)
  }
}

function reportFood(name, food) {
  if (food > 10) {
    console.log(`${name} is full.`)
  } else if (food < 5) {
    console.log(`${name} is hungry!`)
  }
}

function reportEnergy(name, energy) {
  if (energy > 10) {
    console.log(`${name} is well rested.`)
  } else if (energy < 5) {
    console.log(`${name} is exhausted...`)
  }
}

function reportHealth(name, health) {
  if (health < 5) {
    console.log(`${name} is sick! 8-O`)
  }
}

export async function selectAction(actions) {
  let actionList = actions.map((a, index) => ` ${index + 1}: ${a.description}`)
  actionList.push(" 'q' or other to quit")
  actionList.push(' > ')
  const actionText = actionList.join('\n')
  const answer = await io.question(actionText)
  const index = parseInt(answer) - 1
  return actions[index]
}
