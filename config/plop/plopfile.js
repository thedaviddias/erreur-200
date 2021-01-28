// eslint-disable
const componentPlop = require('./component.plopfile')
const hookPlop = require('./hook.plopfile')
const contextPlop = require('./context.plopfile')
const testPlop = require('./test.plopfile')
const episodePlop = require('./episode.plopfile')

const plopFile = plop => {
  componentPlop(plop),
  hookPlop(plop),
  contextPlop(plop),
  testPlop(plop),
  episodePlop(plop)
}

module.exports = plopFile
