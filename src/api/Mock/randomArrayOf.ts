import faker from 'faker'

type randomArrayOf = <T>(
  constructor: (...params: any[]) => T,
  min?: number,
  max?: number,
  additionalParam?: boolean
) => T[]

export const randomArrayOf: randomArrayOf = (
  constructor,
  min = 1,
  max = 5,
  additionalParam?: boolean
) =>
  Array.from({ length: faker.datatype.number({ min, max }) }, () =>
    constructor(true)
  )
