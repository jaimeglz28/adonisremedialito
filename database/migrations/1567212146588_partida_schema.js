'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PartidaSchema extends Schema {
  up () {
    this.create('partidas', (table) => {
      table.increments('partida_id').unique().primary()
      table.string('nombre_partida').notNullable()
      table.string('activa').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('partidas')
  }
}

module.exports = PartidaSchema
