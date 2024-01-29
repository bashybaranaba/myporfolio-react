## Baranaba's React Portfolio Website

### Description

This portfolio website showcases my skills, projects, and experience as a Software Developer built using React.
The website is deployed on github pages [here](https://bashybaranaba.github.io/myporfolio-react/)

### Libraries Used

- React
- Material UI v5
- react-typing-animaton

### API used

- official-joke-api

### Questions and Answers

#### 1. What is NPM?

**Answer:** NPM stands for Node Package Manager. It is a package manager for JavaScript and is the default tool for managing packages in Node.js, allowing users to install, update, and manage libraries and dependencies for their JavaScript projects.

#### 2. What is SPA?

**Answer:** SPA stands for Single Page Application. It's a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This approach results in a more seamless user experience, similar to a desktop application.

#### 3. What is the event loop?

**Answer:** The event loop is a fundamental aspect of Node.js and JavaScript environments, handling asynchronous operations. It continuously checks the call stack and, if it's empty, pulls functions from the event queue to be executed. This mechanism allows JavaScript to perform non-blocking operations, despite being single-threaded.

#### 4. What is the difference between `export x` and `export default x`? How do you import them differently?

**Answer:** `export x` is a named export, allowing multiple exports per module. `export default x` is a default export, allowing only one per module. To import a named export, use `import { x } from 'module'`; for a default export, use `import x from 'module'`.

#### 5. Why do you use `className` as a property in React and not `class`?

**Answer:** In React, `className` is used instead of `class` due to the latter being a reserved keyword in JavaScript. JSX is a syntax extension for JavaScript, and using `className` avoids conflicts with the `class` keyword used in JavaScript classes.

#### 6. Why should you not write the following? What will happen?

```html
<button onClick="{setCounter(counter" + 1)}>+1</button>
```

**Answer:** This code incorrectly updates the state directly inside the render method, causing `setCounter` to be called every time the component renders, leading to an infinite loop. Instead, use `onClick={() => setCounter(counter + 1)}`.

#### 7. What is object deconstruction and how is it connected to React components (example)?

**Answer:** Object deconstruction is a JavaScript feature that allows unpacking properties from objects into distinct variables. In React, it's often used in components to extract props or state. For example:

```jsx
const MyComponent = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);
```

#### 8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?

**Answer:** In React, this is achieved using JSX (JavaScript XML). JSX allows writing HTML-like syntax directly in JavaScript code. Under the hood, JSX is transformed into regular JavaScript objects and function calls by a compiler. In React, this transformation involves the use of `React.createElement()` as seen in the follwing example

**Example of Code **

JSX

```jsx
const WelcomeMessage = (props) => (
  <div className="welcome-container">
    <h1>Welcome, {props.name}!</h1>
    <p className="greeting">Join us on our exciting journey.</p>
  </div>
);
```

React.createElement`

```javascript
const WelcomeMessage = (props) =>
  React.createElement(
    "div",
    { className: "welcome-container" },
    React.createElement("h1", null, "Welcome, ", props.name, "!"),
    React.createElement(
      "p",
      { className: "greeting" },
      "Join us on our exciting journey."
    )
  );
```

#### 9. What is async/await? Bring an example.

**Answer:** `async/await` is syntactic feature in JavaScript for working with promises in a more synchronous-looking manner. `async` is used to declare an asynchronous function, and `await` is used to wait for a promise. Example:

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}
```

#### 10. What is a Promise? Bring an example.

**Answer:** A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more manageable way. Example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully");
  }, 2000);
});
myPromise.then((data) => console.log(data));
```
