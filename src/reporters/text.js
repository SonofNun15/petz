import Pet from '../models/pet'
import io from '../io'

export function report(pet, day) {
  console.log(`***** DAY ${day} *****`)
  console.log(`${pet.name} wakes up`)
}

export async function selectAction(actions) {
  let actionList = actions.map((a, index) => ` ${index + 1}: ${a.description}`)
  actionList.push(' > ')
  const actionText = actionList.join('\n')
  const answer = await io.question(actionText)
  const index = parseInt(answer) - 1
  return actions[index]
}
