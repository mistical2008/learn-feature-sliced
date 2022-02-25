import { flow } from 'fp-ts/function'
import { withRouter } from 'src/app/providers/with-router'

export const withProviders = flow(withRouter)
