import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('streaming')
})

Route.get('/static', async ({ view }) => {
  return view.render('static')
})
