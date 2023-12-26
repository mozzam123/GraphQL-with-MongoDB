# Reviews API

This is a GraphQL Node.js project that implements a simple API for managing reviews of listings. It allows you to perform CRUD (Create, Read, Update, Delete) operations on reviews.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Example Queries](#example-queries)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (Make sure MongoDB is running locally or update the connection string in `index.js`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mozzam123/BreadcrumbsReviews-API-with-GraphQL-and-MongoDB.git
   cd your-repo-name

## Usage
You can interact with the GraphQL API using a tool like Apollo Client, Postman, or by making HTTP requests directly.

### Example Queries
Here are some example GraphQL queries you can run:

-Fetch all reviews:
```
{
  reviews {
    _id
    name
    summary
  }
}

```

-Fetch a specific review by ID:
```
{
  review(id: "your-review-id") {
    _id
    name
    summary
  }
}

```

-Delete a review:
```
mutation {
  deleteReview(id: "your-review-id") {
    _id
    name
    summary
  }
}

```

### Project Structure

The project structure is organized as follows:

- **index.js**: The entry point of the server.
- **schema.js**: The GraphQL schema definition.
- **model/reviewModel.js**: Mongoose model for the Review schema.
- **package.json**: Node.js dependencies and scripts.
- **node_modules/**: Directory containing project dependencies.
- **README.md**: Documentation for the project (this file).

### Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork** the project on GitHub.
2. Create a new branch with a **descriptive name**.
3. Make your changes and **commit** them.
4. **Push** your branch to your fork.
5. Submit a **pull request** to the main repository.

Please ensure your code follows **best practices** and is **well-documented**.

