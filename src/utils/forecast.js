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
      //Add precipitation change to callback later
      //const precipitation = body.currently.precipProbability * 100
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.')
    }
  })
}

module.exports = forecast
