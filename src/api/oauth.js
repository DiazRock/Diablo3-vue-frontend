// oauth.js

// post method from 'axios'
import { post } from 'axios'

// 🔥 This data is private
const clientId = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

// API URL for oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  // 'FormData', [key: value]
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    // Data for OAuth: id y secret
    auth: { username: clientId, password: clientSecret }
  }
  return post(API_URL, body, config)
}

export {
  getToken
}
