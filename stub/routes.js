import { getDemo } from './model'

const loadDemo = {
  method: 'GET',
  path: '/projects',
  handler: getDemo,
}

export default [
  loadDemo,
]
