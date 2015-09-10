import { createMiddleware, createRouter, history } from 'redux-routing'
import { ROUTE_LOGIN, ROUTE_PREFERENCE, ROUTE_PROFILE } from './routes'

export const router = createRouter(history)
export const middleware = createMiddleware(router)

router.route(ROUTE_LOGIN, () => console.log('login'))
router.route(ROUTE_PREFERENCE, () => console.log('preference'))
router.route(ROUTE_PROFILE, () => console.log('profile'))

router.subscribe(handler => {
  console.log('router subscribe');
})
