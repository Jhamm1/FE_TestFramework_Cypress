import HomePage from '../pages/HomePage-fluent'

describe('Tests with page objects and fluent interface', () => {
  it('will add a todo item', () => {
    new HomePage()
      .assertNumberOfToDoItems(0)
      .addToDoItem('Buy ham and cheese')
      .assertNumberOfToDoItems(1)
  })

  it('will mark added todo item as completed', () => {
    new HomePage()
      .addToDoItem('Buy ham and cheese')
      .markToDoCompleted(0)
  })

  it('will remove added todo item', () => {
    new HomePage()
      .addToDoItem('Buy ham and cheese')
      .removeToDoItem(0)
      .assertNumberOfToDoItems(0)
  })

  it('will list only active todos', () => {
    new HomePage()
      .addToDoItem('Buy ham and cheese')
      .addToDoItem('Buy bread')
      .markToDoCompleted(0)
      .listOnlyActiveToDoItems()
      .assertNumberOfToDoItems(1)
      .assertToDoTitle(0, 'bread')
  })

  it('will list only completed todos', () => {
    new HomePage()
      .addToDoItem('Buy ham and cheese')
      .addToDoItem('Buy bread')
      .markToDoCompleted(0)
      .listOnlyCompletedToDoItems()
      .assertNumberOfToDoItems(1)
      .assertToDoTitle(0, 'ham and cheese')
  })

  it('will clear completed todos', () => {
    new HomePage()
      .addToDoItem('Buy ham and cheese')
      .addToDoItem('Buy bread')
      .markToDoCompleted(0)
      .clearCompletedToDoItems()
      .assertNumberOfToDoItems(1)
      .assertToDoTitle(0, 'bread')
  })
})
