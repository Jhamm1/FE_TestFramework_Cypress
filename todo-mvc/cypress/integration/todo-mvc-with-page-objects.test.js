import HomePage from '../pages/HomePage'

describe('Tests with page objects', () => {
  it('will add a todo item', () => {
    const hp = new HomePage()
    hp.assertNumberOfToDoItems(0)
    hp.addToDoItem('Buy ham and cheese')
    hp.assertNumberOfToDoItems(1)
  })

  it('will mark added todo item as completed', () => {
    const hp = new HomePage()
    hp.addToDoItem('Buy ham and cheese')
    hp.markToDoCompleted(0)
  })

  it('will remove added todo item', () => {
    const hp = new HomePage()
    hp.addToDoItem('Buy ham and cheese')
    hp.removeToDoItem(0)
    hp.assertNumberOfToDoItems(0)
  })

  it('will list only active todos', () => {
    const hp = new HomePage()
    hp.addToDoItem('Buy ham and cheese')
    hp.addToDoItem('Buy bread')
    hp.markToDoCompleted(0)
    hp.listOnlyActiveToDoItems()
    hp.assertNumberOfToDoItems(1)
    hp.assertToDoTitle(0, 'bread')
  })

  it('will list only completed todos', () => {
    const hp = new HomePage()
    hp.addToDoItem('Buy ham and cheese')
    hp.addToDoItem('Buy bread')
    hp.markToDoCompleted(0)
    hp.listOnlyCompletedToDoItems()
    hp.assertNumberOfToDoItems(1)
    hp.assertToDoTitle(0, 'ham and cheese')
  })

  it('will clear completed todos', () => {
    const hp = new HomePage()
    hp.addToDoItem('Buy ham and cheese')
    hp.addToDoItem('Buy bread')
    hp.markToDoCompleted(0)
    hp.clearCompletedToDoItems()
    hp.assertNumberOfToDoItems(1)
    hp.assertToDoTitle(0, 'bread')
  })
})
