const express = require('express')

const router = express.Router()
const {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
  getUser,
  filterUsers,
} = require('../controllers/user')

router.route('/').post(createUser).get(getAllUsers)

router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser)

router.route('/filter').get(filterUsers)

module.exports = router
