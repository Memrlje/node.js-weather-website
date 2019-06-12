const request = require('request')



const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/1347bae486c88f31c891435672213337/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

request({url, json: true}, (error, {body})=>{
    if(error){
        callback('Unable to connect to wearther service!', undefined)
    }else if(body.error){
        callback('Unable to find location.', undefined)
    }else{
        const currentTemperature = body.currently.temperature
        const chanceOfRain = body.currently.precipProbability
        callback(undefined, body.daily.data[0].summary + ' Its currently ' + currentTemperature + ' degrees out. There is ' + chanceOfRain + ' % chance of rain.' )
    }


})

}


module.exports = forecast




