import bcrypt from 'bcrypt'
import { db } from '~/utils/db.server'

async function main() {
  await db.user.upsert({
    where: { email: 'thientran98qb@gmail.com' },
    update: {},
    create: {
      email: 'thientran98qb@gmail.com',
      name: 'Thien Tran',
      password: bcrypt.hashSync('Thientran98', 12)
    }
  })
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
