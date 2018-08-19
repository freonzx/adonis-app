'use strict'

const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.string('body')
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
