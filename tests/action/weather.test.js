import * as actions from '../../src/actions'

describe('remove pinned city action', () => {
  it('should return remove object', () => {
    const index = 1
    const expected = {
      type: 'REMOVE_CITY',
      index,
    }

    expect(actions.removeCity(index)).toEqual(expected)
  })
})
