import HomePage from '../pages/HomePage-with-component'

describe('Tests with page objects and components', () => {
  it('will list only active todos', () => {
    const hp = new HomePage()
    hp.addToDoItem('Buy ham and cheese')
    hp.addToDoItem('Buy bread')
    hp.markToDoCompleted(0)
    hp.filters.listOnlyActiveToDoItems()
    hp.assertNumberOfToDoItems(1)
    hp.assertToDoTitle(0, 'bread')
  })

  it('will list only completed todos', () => {
    const hp = new HomePage()
    hp.addToDoItem('Buy ham and cheese')
    hp.addToDoItem('Buy bread')
    hp.markToDoCompleted(0)
    hp.filters.listOnlyCompletedToDoItems()
    hp.assertNumberOfToDoItems(1)
    hp.assertToDoTitle(0, 'ham and cheese')
  })
})
