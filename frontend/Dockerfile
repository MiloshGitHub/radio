FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build once during image build
RUN npm run build

# Container does nothing on start (build already done)
CMD ["sh", "-c", "echo 'Frontend build complete.'"]
