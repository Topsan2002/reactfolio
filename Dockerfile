# Base image
FROM node:18.17-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY . .

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Build the React app
RUN npm run build

# Production image, copy all the files and run the app
FROM nginx:stable-alpine AS runner
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
