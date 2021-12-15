'use strict'
const httpStatus = require('http-status')
const Municipio = require('../models/municipio.model')

exports.create = async (req, res, next) => {
  try {

    const body = req.body
    const municipio = new Municipio(body)
    const savedItem = await municipio.save()
    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: 'Municipio creado!'
    })
  } catch (error) {
    return next(error)
  }
}

exports.update = async (req, res, next) => {
  try {

    const body = req.body
    let municipio = await Municipio.findOne({ _id: body._id })
    Object.assign(municipio, body)
    await municipio.save()
    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: 'Municipio actualizado!'
    })
  } catch (error) {
    return next(error)
  }
}

exports.getById = async (req, res, next) => {
  const user = req.user;
  try {
    const body = req.body
    const municipio = await Municipio.findOne({ _id: body._id })

    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: '',
      data: {
        municipio
      }
    })
  } catch (error) {
    return next(error)
  }
}

exports.get = async (req, res, next) => {
  const user = req.user;
  try {

    const municipio = await Municipio.find();

    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: '',
      data: {
        municipio
      }
    })
  } catch (error) {
    return next(error)
  }
}