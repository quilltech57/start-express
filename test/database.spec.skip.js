const { expect } = require('chai')
const chaiHttp = require('chai-http')

const mongoose = require('mongoose')
const { database } = require('../config')

describe('Check Database Connection', () => {
  it('should connect and disconnect to mongodb', async () => {
    mongoose.disconnect()
    mongoose.connection.on('disconnected', () => {
      expect(mongoose.connection.readyState).to.equal(0)
    })
    mongoose.connection.on('connected', () => {
      expect(mongoose.connection.readyState).to.equal(1)
    })
    mongoose.connection.on('error', () => {
      expect(mongoose.connection.readyState).to.equal(99)
    })

    await mongoose.connect(database.db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  })

  after(async () => {
    mongoose.disconnect()
    console.log('Database Connection closed.')
  })
})
