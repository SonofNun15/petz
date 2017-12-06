import Pet from '../models/pet'
import io from '../io'

export function report(pet, day) {
  console.log(`***** DAY ${day} *****`)
  console.log(`${pet.name} wakes up`)
  console.log(`pet.happiness = ${pet.happiness}`)
  console.log(`pet.food = ${pet.food}`)
  console.log(`pet.energy = ${pet.energy}`)
  console.log(`pet.health = ${pet.health}`)
  console.log(`pet.weight = ${pet.weight}`)
  console.log(`pet.experience = ${pet.experience}`)
}

export async function selectAction(actions) {
  let actionList = actions.map((a, index) => ` ${index + 1}: ${a.description}`)
  actionList.push(' > ')
  const actionText = actionList.join('\n')
  const answer = await io.question(actionText)
  const index = parseInt(answer) - 1
  return actions[index]
}
