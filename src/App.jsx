export default function App() {
  return (
    <main>
      <h1>Todo List</h1>

      <div>
        <input type="text" placeholder="Enter a new todo" />
        <button type="button">Add Task </button>
      </div>

      <ul>

        <input type="checkbox" />
        <span>Create Mockup</span>
        <button type="button">Edit </button>
        <button type="button">Delete </button>

        <br></br>

        <input type="checkbox" />
        <span>Create Static Layout </span>
        <button type="button">Edit </button>
        <button type="button">Delete </button>
        <br></br>
        <input type="checkbox" />
        <input type="text" placeholder="Add Interactive" />
        <button type="button">Add Interactive</button>

      </ul>
    </main>
  );
}