FROM node:12-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --production --silent && mv node_modules ../

# Sentry.io

# Frontend
ENV FRONT_BASE_URL=""

# SandGrid
ENV SENDGRID_API_KEY=""
ENV SENDGRID_EMAIL=""

# Token Secret Generate Password | Token
ENV TOKEN_SECRET="SiMxR8Mf&PpM%aD3"


# Database desenvolvimento
ENV DB_USERNAME=""
ENV DB_PASSWORD=""
ENV DATABASE_NAME=""
ENV DATABASE_HOST=""
ENV DATABASE_TYPE=""

#ENV
ENV ENVIRONMENT="production"

# PORT Service
ENV PORT="3000"

# New Relic
ENV NEWRELIC_APPLICATION_NAME=""
ENV NEWRELIC_LICENSE_KEY=""

COPY . .
EXPOSE 3000
CMD node index.js