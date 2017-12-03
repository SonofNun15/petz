import start from './start'
import run from './run'

async function main() {
  let pet = await start()
  await run(pet)
}

main()
