import './src/styles/global.css';
import './src/styles/markdown.css';

import { wrapRootElementComponent } from './src/gatsby/wrapRootElement'
import { wrapPageElementComponent } from './src/gatsby/wrapPageElement'

export const wrapRootElement = wrapRootElementComponent
export const wrapPageElement = wrapPageElementComponent
