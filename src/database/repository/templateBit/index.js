const { create, findOne, findAllPaginate, update, remove } = require('../index')

exports.createTemplateBit = (data) => create('TemplateBits', data)

exports.findTemplateBitById = (id) => findOne('TemplateBits', { where: { id }, raw: true })

exports.findTemplateBitPaginate = (page) => findAllPaginate('TemplateBits', { order: [['createdAt', 'DESC']] }, page)

exports.updateTemplateBit = (id, data) => update('TemplateBits', { where: { id } }, data)

exports.removeTemplateBitById = (id) => remove('TemplateBits', { where: { id } })
