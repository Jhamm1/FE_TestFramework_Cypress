import GoogleSearch from '../pages/GoogleSearch'

describe('Google with page objects', () => {
  it('will search for Todo MVC on Google', () => {
    new GoogleSearch('todo mvc')
      .assertSitePresentInResults('http://todomvc.com')
  })
})
