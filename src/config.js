const base = 'http://192.158.1.10:3000'

class Endpoint {
  url = base + '/api'

  constructor(endpoint) {
    this.url += endpoint
  }
}

const config = {
  api: {
    oauth: new Endpoint('/oauth')
  }
}