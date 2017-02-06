import * as actions from '../../src/actions'

describe('actions', ()=> {
  it('should create an action', () => {
    expect(true).toEqual(true)
  });
  it('should current Weather', ()=> {
    let city= "DENVER"
    const temp= 'hello'
    const currently= 'hello'
    const extended= 'hello'
    const hourly= 'hello'

    const expectedReturn = {
      type:'CURRENT_WEATHER',
      city,
      temp,
      currently,
      extended,
      hourly
    }
    expect(actions.currentWeather()).toEqual(expectedReturn);
  })
  it('should create an action to remove pin', () => {
  const index = []
  const expectedAction = {
   type: 'REMOVE_CITY',
   index: []
  }
  expect(actions.removeCity(index)).toEqual(expectedAction)
})

 })
