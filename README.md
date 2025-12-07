# Next.js API Application

A well-structured Next.js application with API endpoints and Docker support.

## Features

- ✅ Two API endpoints:
  - `/api/users` - Returns dummy user data
  - `/api/health` - Health check endpoint (returns 200 OK)
- ✅ Dockerized application

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### 1. Get Users
- **Endpoint:** `GET /api/users`
- **Description:** Returns a list of dummy users
- **Response:** JSON array of user objects

### 2. Health Check
- **Endpoint:** `GET /api/health`
- **Description:** Returns the health status of the API
- **Response:** `{ status: "OK", timestamp: "..." }`

## Docker

### Build the Docker image:
```bash
docker build -t nextjs-api-app .
```

### Run the container:
```bash
docker run -p 3000:3000 nextjs-api-app
```

### Using Docker Compose:
```bash
docker-compose up
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
.
├── app/
│   ├── api/
│   │   ├── users/
│   │   │   └── route.ts      # Users API endpoint
│   │   └── health/
│   │       └── route.ts       # Health check endpoint
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Docker Compose configuration
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Docker

