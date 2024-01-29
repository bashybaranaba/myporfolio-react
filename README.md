## Baranaba's React Portfolio Website

### Description

This portfolio website showcases my skills, projects, and experience as a Software Developer built using React

### Libraries Used

- React
- Material UI v5
- react-typing-animaton

### API used

- official-joke-api

# Questions and Answers

1. **What is NPM?**  
   **Answer:** NPM stands for Node Package Manager. It is a package manager for JavaScript and is the default tool for managing packages in Node.js, allowing users to install, update, and manage libraries and dependencies for their JavaScript projects.

2. **What is SPA?**  
   **Answer:** SPA stands for Single Page Application. It's a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This approach results in a more seamless user experience, similar to a desktop application.

3. **What is the event loop?**  
   **Answer:** The event loop is a fundamental aspect of Node.js and JavaScript environments, handling asynchronous operations. It continuously checks the call stack and, if it's empty, pulls functions from the event queue to be executed. This mechanism allows JavaScript to perform non-blocking operations, despite being single-threaded.

4. **What is the difference between export x and export default x? How do you import them differently?**  
   **Answer:** `export x` is a named export, allowing multiple exports per module. `export default x` is a default export, allowing only one per module. To import a named export, use `import { x } from 'module'`; for a default export, use `import x from 'module'`.

5. **Why do you use className as a property in React and not class?**  
   **Answer:** In React, `className` is used instead of `class` due to the latter being a reserved keyword in JavaScript. JSX is a syntax extension for JavaScript, and using `className` avoids conflicts with the `class` keyword used in JavaScript classes.

6. **Why should you not write the following? What will happen?**  
   `<button onClick={setCounter(counter + 1)}> +1 </button>`  
   **Answer:** This code incorrectly updates the state directly inside the render method, causing `setCounter` to be called every time the component renders, leading to an infinite loop. Instead, use `onClick={() => setCounter(counter + 1)}`.

7. **What is object deconstruction and how is it connected to React components (example)?**  
   **Answer:** Object deconstruction is a JavaScript feature that allows unpacking properties from objects into distinct variables. In React, it's often used in components to extract props or state. For example:

   ```
   const MyComponent = ({ title, content }) => (
     <div>
       <h1>{title}</h1>
       <p>{content}</p>
     </div>
   );
   ```

8. ** How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?**
