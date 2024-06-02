# SIL 2.0

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Trello Board](#trello-board)
- [License](#license)

# `Introduction`

This documentation provides a comprehensive guide on how to set up and run the Next.js application. Next.js is a React framework that enables functionality such as server-side rendering and static site generation.

# `Prerequisites`

Before you begin, ensure you have met the following requirements:

- Node.js version 20
- npm or yarn (Node package managers)
- Git (version control system)

# `Setup Instructions`

### Step 1: Clone the repository

First, clone the repository to your local machine using Git.

        git clone git@github.com:Iank-code/SIL-2.0.git
        cd SIL-2.0

### Step 2: Install dependencies

Install the project dependencies using npm

        npm install

### Step 3: Create Environment Variables

Create a `.env.local` file in the root directory and add your environment variables.

        NEXT_PUBLIC_SERVER_URL="https://jsonplaceholder.typicode.com"
        GOOGLE_CLIENT_ID="<YOUR GOOGLE CLIENT ID>"
        GOOGLE_API_SECRET="<YOUR GOOGLE API SECRET>"

### Step 4: Run the application

Start the development server.

        npm run dev

# `Running the Application`

After setting up, you can access the application at `http://localhost:3000`

# `Trello Board`

For project management and task tracking, please refer to my Trello board: [Project Trello Board](https://trello.com/b/GgF8qU5t/savannah-informatics-frontend-developer)

# `License`

This project is licensed under the MIT License. See the LICENSE file for more information.
