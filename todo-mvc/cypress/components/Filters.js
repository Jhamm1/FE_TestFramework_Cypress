import Component from './Component'

export default class Filters extends Component {
  constructor (selector = '') {
    super(`${selector} .filters`)
  }

  listOnlyActiveToDoItems () {
    this.root.find('li a').eq(1).click()
    return this
  }

  listOnlyCompletedToDoItems () {
    this.root.find('li a').eq(2).click()
    return this
  }
}
