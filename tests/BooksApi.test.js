import { getListHardCoverFictionBestSellers } from '../api/BooksApi';

beforeEach(() => {
  fetch.resetMocks()
})

test('returns an non-empty object with status Ok if success', () => {
  fetch.mockResponseOnce(JSON.stringify({ status: 'OK' }))
  const onResponse = jest.fn()
  const onError = jest.fn()

  return getListHardCoverFictionBestSellers()
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled() // expect to have been called
      expect(onError).not.toHaveBeenCalled() // expect to not have been called
      expect(onResponse.mock.calls.length).toBe(1) // expect to have been called only one time
      expect(onResponse.mock.calls[0][0]).toEqual({ status: 'OK' }); // expect to be equal to mock response
    })
})
