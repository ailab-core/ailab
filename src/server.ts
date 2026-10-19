import handler from '@tanstack/react-start/server-entry'
import { paraglideMiddleware } from './paraglide/server'

// The router rewrite de-localizes URLs itself, so the original request is passed on.
export default {
  fetch(req: Request): Promise<Response> {
    return paraglideMiddleware(req, () => handler.fetch(req))
  },
}
