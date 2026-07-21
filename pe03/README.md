# Input

The app accepts user input through a `TextInput` in `Input.js`, updating `inputValue` in `App.js` state on every keystroke via `inputChange`. Tapping **Submit** triggers `addTodo`. Tapping **Done** or **Delete** on a todo passes that item's `todoIndex` as input to `completeTodo` or `removeTodo`. Tapping a filter tab (**All**, **Active**, **Complete**) passes the selected type to `changeType`.

# Process

`App.js` centralizes state (`inputValue`, `todos`, `type`). `addTodo` appends a new `{title, todoIndex, complete}` object and clears the input. `completeTodo` toggles a todo's `complete` flag by matching `todoIndex`; `removeTodo` filters it out. `changeType` updates the active filter. `TodoList.js` re-filters `todos` based on `type` before rendering, keeping the UI in sync with state.

# Output

The screen renders the "todos" heading, a merged input/todo-list box, a Submit button, and a filter tab bar. Each todo shows its title with Done/Delete actions, updating dynamically as items are completed, removed, or filtered. Input values and full state are also logged to the terminal for verification.
