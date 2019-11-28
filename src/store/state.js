const req = require.context('@/models', true, /\.json$/)

// require all json from @/models
const models = req.keys().reduce((acc, cur) => {
  acc = Object.assign(acc, req(cur))
  return acc
}, [])

export default () => ({
  paths: models
})
