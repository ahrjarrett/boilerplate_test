const dummyjson = require('data-json')
const template = '{\
      "name": {{firstName}},\
      "age": {{int 18 65}}\
    }'
const result = dummyjson.parse(template)

export default result
