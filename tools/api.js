import 'es6-promise'
import 'isomorphic-fetch'

const defaultHeaders = {
  Accept: 'application/json',
  'Content-type': 'application/json',
}
const mode = process.env.NODE_ENV === 'production' ? 'cors' : 'no-cors'
const handleError = async response => {
  let errorMessage = ''
  let json
  try {
    json = await response.json()
    // console.log('json: ', response.ok)
    errorMessage = json.message
  } catch (error) {
    // api does not return error object use default statusText
    errorMessage = `
      Cannot parse response.body as json, statusText is ${response.statusText}`
  }
  if (!response.ok) {
    const error = new Error(errorMessage)
    if (json) {
      error.code = json.code
    }
    error.code = error.code || response.status
    error.response = response
    throw error
  }
  return json
}

export const { API_SERVER } = process.env

export const postJSON = async (url, jsonBody) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: defaultHeaders,
      mode: 'cors',
      body: JSON.stringify(jsonBody),
    })
    const json = await handleError(response)
    return json
  } catch (error) {
    // error is Error object of shape
    // { code: <http code>, message: <error message>, response: <response obj> }
    throw error
  }
}

export const getJSON = async url => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: defaultHeaders,
      mode: 'cors',
    })
    const json = await handleError(response)
    return json
  } catch (error) {
    // error is Error object of shape
    // { code: <http code>, message: <error message>, response: <response obj> }
    throw error
  }
}
