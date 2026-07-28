# R-ALAB-320H_9_1 - Building a Todo List

This project is a beginner React Todo List application built with Vite. The purpose of this lab is to practice managing React state, rendering arrays, 
working with controlled forms, and using conditional rendering.

## Features

- Displays a list of todo items
- Adds new todos to the top of the list
- Marks todos as complete or incomplete
- Displays completed todos with a line through the title
- Disables the Delete button until a todo is complete
- Deletes completed todos
- Edits existing todo titles
- Replaces the todo title with a text input while editing
- Hides the Edit and Delete buttons while editing
- Displays a Save button while editing
- Prevents empty todos from being added
- Prevents empty edited titles from being saved

## Technologies Used

- React
- JavaScript
- Vite
- HTML
- CSS
- Oxlint
- Git
- GitHub

## React Concepts Practiced

- `useReducer`
- `useState`
- Reducer functions
- Controlled inputs
- Rendering arrays with `.map()`
- Conditional rendering
- Conditional styling
- Event handling
- Form submission
- Updating state without directly changing the original array

## Starter Todo Items

The application begins with three todo items:

- Create Mockup
- Create Static Layout
- Add Interactivity

Each todo contains:

- A unique ID
- A title
- A completed value

## Todo Actions

The reducer manages the following actions:

- `add` adds a new todo to the top of the list
- `toggle` changes a todo between complete and incomplete
- `delete` removes a completed todo
- `save` updates the title of an edited todo

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/SoftwareEngineeringInnovator/R-ALAB-320H_9_1-Building_a_Todo_List.git
```

### 2. Enter the project folder

```bash
cd R-ALAB-320H_9_1-Building_a_Todo_List
```

### 3. Install the project dependencies

```bash
npm install
```

### 4. Start the Vite development server

```bash
npm run dev
```

### 5. Open the application

Open the local address displayed in the terminal, such as:

```text
http://localhost:5173/
```

The port number may be different if port `5173` is already being used.

## Available Commands

Start the development server:

```bash
npm run dev
```

Check the code with Oxlint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Requirements Completed

- A heading labels the application as a Todo List
- Todo items are displayed as a list
- Each todo contains a checkbox
- Each todo contains an Edit button
- Each todo contains a Delete button
- Delete is disabled unless the todo is complete
- Edit replaces the todo title with a controlled text input
- Edit and Delete are hidden while editing
- Save appears while editing
- Save updates the todo title
- New todos can be added using a controlled form
- New todos appear at the top of the list
- Older todos remain near the bottom
- Completed todos use conditional styling

## Author

Fredy Chilito  
Software Engineering Student  
Created as part of the Per Scholas Software Engineering Program.  
Project: R-ALAB-320H_9_1 - Building a Todo List