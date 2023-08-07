// eslint-disable
const testPlop = require('./test.plopfile')
const episodePlop = require('./episode.plopfile')

const plopFile = plop => {
  testPlop(plop),
  episodePlop(plop)
}

module.exports = plopFile
