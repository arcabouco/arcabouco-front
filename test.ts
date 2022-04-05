const { writeFileSync } = require('fs')
writeFileSync(
  'test.jpg',
  Buffer.from(
    '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',
    'base64'
  )
)
