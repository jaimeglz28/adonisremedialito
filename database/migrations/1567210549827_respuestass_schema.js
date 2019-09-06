'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RespuestassSchema extends Schema {
  up () {
    this.create('respuestasses', (table) => {
      table.increments()
      table.string('Respuestas', 200).notNullable().unique()
      table.string('categoria').references('categoria').inTable('preguntas')
      table.string('valor', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('respuestasses')
  }
}

module.exports = RespuestassSchema
