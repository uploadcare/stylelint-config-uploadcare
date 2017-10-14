import fs from 'fs'
import stylelint from 'stylelint'
import config from '../'

const validCss = fs.readFileSync('./__tests__/valid.css', 'utf-8')

describe('flags no warnings with valid css', () => {
  let result

  beforeAll(async(done) => {
    result = await stylelint.lint({
      code: validCss,
      config,
    })

    done()
  })

  it('did not error', async() => expect(result.errored).toBeFalsy())

  it('flags no warnings', async() => expect(result.results[0].warnings.length).toBe(0))
})
