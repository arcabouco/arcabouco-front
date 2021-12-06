import faker from 'faker'

type randomArrayOf = <T>(
  constructor: () => T,
  min?: number,
  max?: number
) => T[]

export const randomArrayOf: randomArrayOf = (constructor, min = 1, max = 5) =>
  Array.from({ length: faker.datatype.number({ min, max }) }, constructor)
