const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllUsers = async (req, res) => {
    const users = await User.find({ createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ users, count: users.length })
}
const getUser = async (req, res) => {
    const {
        user: { userId },
        params: { id: UserId },
    } = req

    const user = await User.findOne({
        _id: UserId,
        createdBy: userId,
    })
    if (!user) {
        throw new NotFoundError(`No User with id ${user._id}`)
    }
    res.status(StatusCodes.OK).json({ user })
}

const createUser = async (req, res) => {
    req.body.createdBy = req.user.userId
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({ user })
}

const updateUser = async (req, res) => {
    const {
        user: { userId },
        params: { id: UserId },
    } = req

    const user = await User.findOneAndUpdate(
        {
            _id: UserId,
        },
        req.body,
        { new: true }
    )
    if (!user) {
        throw new NotFoundError(`No User with id ${UserId}`)
    }
    res.status(StatusCodes.OK).json({ user })
}

const deleteUser = async (req, res) => {
    const {
        user: { userId },
        params: { id: UserId },
    } = req

    const User = await User.findByIdAndRemove({
        _id: UserId,
    })
    if (!User) {
        throw new NotFoundError(`No User with id ${UserId}`)
    }
    res.status(StatusCodes.OK).send()
}

const healthcheck = async (req, res) => {
    res.status(StatusCodes.OK).json({ status: 'OK' })
}

module.exports = {
    createUser,
    deleteUser,
    getAllUsers,
    updateUser,
    getUser,
    healthcheck,
}
