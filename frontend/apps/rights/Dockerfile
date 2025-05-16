# Step 1: Base image
FROM node:20-bullseye-slim AS base


# Step 2: Builder image
FROM base AS builder
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./
# Install dependencies
# This layer is cached, so npm install only re-runs if package-lock.json or package.json change
RUN npm ci --force
# Copy the rest of your app's source code - need to find a way to only copy the particular app for the specific container
# Remember this will copy from the ROOT of the project, means all of the monorepo
COPY . .
# Set the environment argument to retrieve the environment from build command
ARG environment
# Set the environment variables
ENV NEXT_TELEMETRY_DISABLED 0
# Build the app
RUN apt-get update && apt-get install -y ca-certificates
RUN npm run build:rights:${environment}


# Step 3: Runtime image
FROM base
# Set the working directory in the container - same as previous one
WORKDIR /app
# Set the environment argument to retrieve the environment from build command
# ARG NEXTAUTH_URL
# Set env variables
ENV NEXT_TELEMETRY_DISABLED 0
ENV NODE_ENV production
# ENV NEXTAUTH_URL ${NEXTAUTH_URL}
# Set the user and group to run the app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
# Copy only the built artifacts from the builder stage - anything else that we need?
COPY --from=builder /app/dist/apps/rights/public ./public
COPY --from=builder /app/dist/apps/rights/next.config.js ./
# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/dist/apps/rights/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/dist/apps/rights/.next/static ./dist/apps/rights/.next/static
COPY --from=builder /app/dist/apps/rights/.env ./apps/rights/.env
# Switch to monorepo folder
WORKDIR /app/apps/rights/
# Set the user to run the app
USER nextjs
# Expose the port the app runs on
ENV HOSTNAME "0.0.0.0"
ENV PORT 4205
EXPOSE 4205
# Run the app in production mode from built code
CMD ["node", "server.js"]
