var router = require('express').Router()

const users = [
  { name: 'KangSanLee', id: 0 },
  { name: 'MinJiPark', id: 1 }
]

/* GET users. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user. */
router.get('/users/:id', function (req, res, next) {
  var id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else
    res.sendStatus(404)
  }
})

module.exports = router
