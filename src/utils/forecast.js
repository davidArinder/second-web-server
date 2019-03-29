const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/90e843684bc6864964be658d29c7a359/' + latitude + ',' + longitude

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services', undefined)
    } else if (body.error) {
      console.log(body.error)
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
  })
}

module.exports = forecast
