const Sentry = require('@sentry/node')
const Tracing = require('@sentry/tracing')

module.exports = (app) => {
  Sentry.init({
    dsn: process.env.SENTRY_URL,
    environment: process.env.ENVIRONMENT || 'development',
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({ app })
    ],
    tracesSampleRate: 1.0
  })
  return { ...Sentry.Handlers }
}
