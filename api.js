import fetch from 'isomorphic-fetch'
//http://localhost:3002
//https://api.maxmuaythai.com
//https://beta-api.maxmuaythai.com
export const { API_SERVER } = process.env
export const SERVER = API_SERVER
export const get = url => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .catch(err => Promise.reject(err))
}

export const post = (url, json) => {
  //console.log('json: ', json)
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(json),
  })
    .then(response => {
      //console.log('response: ', response)
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .catch(err => Promise.reject(err))
}
