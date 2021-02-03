const wrapRootElementComponent = require('./src/gatsby/wrapRootElement').wrapRootElementComponent
const wrapPageElementComponent = require('./src/gatsby/wrapPageElement').wrapPageElementComponent
const onRenderBodyComponent = require('./src/gatsby/onRenderBody').onRenderBodyComponent

exports.wrapRootElement = wrapRootElementComponent
exports.wrapPageElement = wrapPageElementComponent
exports.onRenderBody = onRenderBodyComponent
