'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

// Route.on('/').render('welcome')
Route.get('/', 'PageController.index')
Route.get('posts', 'PageController.index')
Route.get('/posts/add', 'PageController.add')
Route.get('/posts/edit/:id', 'PageController.edit')
Route.get('/posts/:id', 'PageController.show')
Route.post('posts', 'PageController.create')
Route.put('/posts/:id', 'PageController.update')
Route.delete('/posts/:id', 'PageController.destroy')
