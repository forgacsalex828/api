# Formula 1 Champions API

This project is a RESTful API for managing a database of Formula 1 champions. It allows users to retrieve information about champions, including their names, nationalities, championship titles, and the year they won their first title.

## Project Structure

```
formula1-champions-api
├── src
│   ├── app.js                # Initializes the Express application and sets up middleware
│   ├── server.js             # Starts the server and listens on the specified port
│   ├── data
│   │   └── champions.js      # In-memory data structure for Formula 1 champions
│   ├── middleware
│   │   ├── logger.js         # Middleware for logging request details
│   │   ├── idValidator.js     # Middleware for validating ID parameters
│   │   └── dataValidator.js   # Middleware for validating champion data
│   ├── routes
│   │   └── champions.js      # Defines API endpoints related to champions
│   └── utils
│       └── index.js         # Utility functions used across the application
├── .gitignore                # Specifies files and directories to ignore by Git
├── .env.example              # Template for environment variables
├── package.json              # Project metadata and dependencies
├── README.md                 # Documentation for the project
└── .eslintrc.json           # ESLint configuration settings
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/formula1-champions-api.git
   ```

2. Navigate to the project directory:

   ```
   cd formula1-champions-api
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the API

1. Start the server:

   ```
   npm start
   ```

2. The API will be running on `http://localhost:3000`.

### API Endpoints

- `GET /api/champions` - Retrieve a list of all champions.
- `GET /api/champions/:id` - Retrieve a champion by ID.
- `POST /api/champions` - Add a new champion.

### Middleware Functions

- **Logger**: Logs request details (method, URL, timestamp).
- **ID Validator**: Validates ID parameters to ensure they are positive integers.
- **Data Validator**: Validates incoming data for creating new champions.

### License

This project is licensed under the MIT License. See the LICENSE file for details.