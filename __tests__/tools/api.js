import fetchMock from 'fetch-mock'
import { API_SERVER, postJSON } from '../../tools/api'

describe('postJSON', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  it('Extracts json and return on success response', async () => {
    fetchMock.post(`${API_SERVER}/test`, {
      key1: 'value1',
    })
    const json = await postJSON(`${API_SERVER}/test`)
    expect(json).toEqual({ key1: 'value1' })
  })
  it('Returns undefined on success response with no response.body', async () => {
    fetchMock.post(`${API_SERVER}/test`, 200)
    const json = await postJSON(`${API_SERVER}/test`)
    expect(json).toBeUndefined()
  })
  it('Throws correct code and message on error response', async () => {
    fetchMock.post(`${API_SERVER}/test`, {
      status: 400,
      body: {
        code: 400,
        message: 'Test error message',
      },
    })

    try {
      await postJSON(`${API_SERVER}/test`)
    } catch (error) {
      const { code, message } = error
      expect(code).toBe(400)
      expect(message).toMatch('Test error message')
    }
  })
  it('Throws default code and message on error response, if they are not provided in response.body', async () => {
    fetchMock.post(`${API_SERVER}/test`, 400)

    try {
      await postJSON(`${API_SERVER}/test`)
    } catch (error) {
      const { code, message } = error
      expect(code).toBe(400)
      expect(message).toMatch(
        'Cannot parse response.body as json, statusText is Bad Request'
      )
    }
  })
})
