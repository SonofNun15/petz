import io, { rl } from './io'
import Pet from './models/pet'

import { promisify } from 'util'

async function start() {
  const name = await io.question('Name your new pet! > ')
  return new Pet(name)
}

export default start
