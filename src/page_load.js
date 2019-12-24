import { generateHomeContents } from './home_contents.js'
import { generateMenuContents } from './menu_contents.js'
import { generateContactContents } from './contact_contents.js'

function pageLoad() {
  generateHomeContents();
}

export { pageLoad, generateHomeContents, generateMenuContents, generateContactContents };