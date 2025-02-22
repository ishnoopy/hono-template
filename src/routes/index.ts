import UserRoutes from './user.routes.js'
import AuthRoutes from './auth.routes.js'

const groupRoutes = [UserRoutes, AuthRoutes] as const

export default groupRoutes