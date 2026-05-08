# CatCare Tracker Backend

## Project Description

CatCare Tracker is a fullstack cat health and care tracking application. This backend provides RESTful API endpoints for managing cat profiles, health records, and cat behaviour care guides.

The system allows users to track vaccines, vet visits, medications, and view common cat behaviour problems with possible causes and suggested solutions.

## Features Implemented

- Create, read, update, and delete cat profiles
- Create, read, update, and delete health records
- Create, read, update, and delete behaviour guides
- Search health records by title
- Filter health records by type
- MongoDB persistent database storage
- Request validation
- Error handling
- Proper HTTP status codes
- Clean backend structure using routes, controllers, and models

## Tech Stack Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- Nodemon

## Setup Instructions

1. Clone or download the backend repository.

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root folder:

```env
PORT=5050
MONGO_URI=mongodb://127.0.0.1:27017/catcare-tracker
```

4. Start MongoDB locally.

5. Run the backend server:

```bash
npm run dev
```

6. The backend will run at:

```txt
http://localhost:5050
```

## How to Run the Project Locally

Make sure MongoDB is running, then run:

```bash
npm run dev
```

Open this URL in the browser:

```txt
http://localhost:5050/
```

Expected response:

```json
{
  "message": "CatCare Tracker API is running"
}
```

## Database Schema / Models

### Cat Model

Stores cat profile information.

```js
{
  name: String,
  age: Number,
  breed: String,
  weight: Number,
  notes: String
}
```

### HealthRecord Model

Stores vaccine, vet visit, and medication records.

```js
{
  catId: ObjectId,
  type: String,
  title: String,
  date: Date,
  nextDueDate: Date,
  notes: String
}
```

Allowed health record types:

```txt
vaccine
vet_visit
medication
```

### BehaviourGuide Model

Stores cat behaviour problems, possible causes, and suggested solutions.

```js
{
  problem: String,
  causes: [String],
  solutions: [String]
}
```

## API Endpoint Summary

### Cat Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/cats` | Get all cats |
| GET | `/api/cats/:id` | Get one cat by ID |
| POST | `/api/cats` | Create a cat |
| PUT | `/api/cats/:id` | Update a cat |
| DELETE | `/api/cats/:id` | Delete a cat |

### Health Record Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health-records` | Get all health records |
| GET | `/api/health-records/:id` | Get one health record by ID |
| POST | `/api/health-records` | Create a health record |
| PUT | `/api/health-records/:id` | Update a health record |
| DELETE | `/api/health-records/:id` | Delete a health record |

### Health Record Search and Filtering

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health-records?search=rabies` | Search records by title |
| GET | `/api/health-records?type=vaccine` | Filter records by type |
| GET | `/api/health-records?type=vaccine&search=rabies` | Search and filter records |

### Behaviour Guide Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/behaviour-guides` | Get all behaviour guides |
| GET | `/api/behaviour-guides/:id` | Get one behaviour guide by ID |
| POST | `/api/behaviour-guides` | Create a behaviour guide |
| PUT | `/api/behaviour-guides/:id` | Update a behaviour guide |
| DELETE | `/api/behaviour-guides/:id` | Delete a behaviour guide |


