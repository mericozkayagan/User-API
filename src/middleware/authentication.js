const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const { UnauthenticatedError } = require('../errors')

const authenticate = async (req, res, next) => {

    req.headers.authorization = req.headers.authorization || req.headers.authentication

    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('Not authorized')
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userId: decoded.userId, username: decoded.username }

        next()


    } catch (error) {
        throw new UnauthenticatedError('Not authorized')
    }

}

module.exports = authenticate