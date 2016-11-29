const fs = require('fs')
const dummyjson = require('dummy-json')
const template = `{
  "users": [
    {{#repeat 10}}
    {
      "id": {{@index}},
      "name": "{{firstName}} {{lastName}}"
      "address": {
        "street": "{{int 1 100}} {{street}}",
        "city": "{{city}}",
        "country": "{{country}}"
      }
    }
    {{/repeat}}
  ]
}`


const result = dummyjson.parse(template)
const generateData = (name) => {
  let dir = './data/'
  let format = '.json'
  let fileName = name
  let data = dir + fileName + format
  fs.writeFileSync(data, result, (err) => {
    if (err) throw err
    console.log('dummy json file written: ', data)
  })
}

module.exports = generateData
