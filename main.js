import Router from './router'

const route = Router.route(window.location.search, window.location.pathname)
if (route != undefined) window.location = route

view Main {
  <Home />
}
