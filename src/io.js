import * as readline from 'readline'
import { promisify } from 'util'

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const question = promisify(
  function (text, callback) {
    rl.question(text, callback.bind(null, null))
  }
)

const io = {
  question,
  close: rl.close.bind(rl),
}

export default io
