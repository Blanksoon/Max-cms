import Cookies from 'universal-cookie'
import Router from 'next/router'

export const loadAllCookies = ({ req, isServer }) => {
  let cookies
  if (isServer) {
    cookies = new Cookies(req.headers.cookie)
  } else {
    cookies = new Cookies()
  }
  return cookies.getAll()
}

export const universalLoadAllCookies = ({ req, isServer }) => {
  let cookies
  if (isServer) {
    cookies = new Cookies(req.headers.cookie)
  } else {
    cookies = new Cookies()
  }
  return cookies.getAll()
}

export const redirect = (url, options = { res: {}, isServer: false }) => {
  const { res, isServer } = options
  if (isServer) {
    res.writeHead(302, {
      Location: url,
    })
    res.end()
    res.finished = true
  } else {
    Router.replace(url)
  }
  return {}
}
