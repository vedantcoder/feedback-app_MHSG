# Feedback App

A simple full-stack feedback application built with React (Vite) for the frontend and Node.js for the backend.

## Features
- Submit feedback via a form
- View a list of submitted feedback
- Responsive and modern UI

## Project Structure
```
feedback-app/
├── client/        # React frontend (Vite)
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── ...
├── server/        # Node.js backend
│   ├── server.js
│   └── feedback.json
└── package.json   # Root package.json
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Install Dependencies

#### Client
```
cd client
npm install
```

#### Server
```
cd ../server
npm install
```

### Run the App

#### Start the Backend
```
node server.js
```

#### Start the Frontend
```
cd ../client
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints
- `GET /feedbacks` - Fetch all feedback
- `POST /feedbacks` - Submit new feedback

## License
MIT
