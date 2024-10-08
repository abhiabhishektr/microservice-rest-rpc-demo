# Microservices Demo Project

This Demo project demonstrates a basic microservices architecture, showcasing the communication between different services like Posts, Comments, Event Bus, Moderation, and Query. It highlights how independent services can work together to build a larger system, focusing on modularity and scalability.

## Project Structure

The project contains the following services:

- **Posts Service**: Manages post creation.
- **Comments Service**: Handles comments for posts.
- **Event Bus Service**: Facilitates communication between services using events.
- **Moderation Service**: Reviews and moderates comments based on predefined rules.
- **Query Service**: Aggregates data from multiple services (Posts and Comments).

Each service runs independently but communicates via HTTP and event-based mechanisms.

## Prerequisites

- **Node.js**: Ensure that you have Node.js installed.
- **npm** or **yarn**: Install dependencies using npm or yarn.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/microservice-rest-rpc-demo
   ```

2. Install dependencies for each service:
   ```bash
   cd posts
   npm install
   # or yarn install

   cd ../comments
   npm install
   # or yarn install
   ```

   Repeat this for all other services (`event-bus`, `moderation`, and `query`).

3. Start each service:
   ```bash
   # For Posts Service
   cd posts
   npm start
   # or yarn start

   # For Comments Service
   cd ../comments
   npm start
   # or yarn start

   # Repeat for all other services
   ```

## Testing the APIs

There is a JSON file included in the repository to test all APIs using Postman. You can import the file into Postman to easily test all the routes across services.

The APIs exposed include:

- **POST /posts**: Create a new post.
- **POST /comments**: Add a comment to a post.
- **GET /posts**: Fetch all posts with their associated comments.

Check the Postman JSON file in the `docs/postman/` folder for all available routes and their details.

## How it Works

- **Posts Service** allows users to create new posts.
- **Comments Service** allows users to comment on posts.
- **Event Bus** broadcasts events to all other services.
- **Moderation Service** listens for comment events and flags inappropriate comments.
- **Query Service** listens for post and comment events to provide aggregated views of posts and comments.

## Running the Project

1. Start each microservice individually by navigating into their directories and running `npm start` (or `yarn start`).
2. Once all services are running, you can test the APIs using Postman or any API client.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


