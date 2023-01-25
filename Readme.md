<div class="markdown prose w-full break-words dark:prose-invert dark"><h1>Cars Prisma</h1><p>This is a sample project that demonstrates how to refactor an existing PostgreSQL database to use Prisma. The project includes a simple REST API for managing a list of cars.</p><h2>Getting Started</h2><ol><li>Clone the repository:</li></ol><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre-wrap hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/yuridesideri/ex-cars-prisma.git
</code></div></div></pre><ol start="2"><li>Install the dependencies:</li></ol><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre-wrap hljs">npm install
</code></div></div></pre><ol start="3"><li>Run the Prisma CLI to deploy the datamodel to your local Postgres database</li></ol><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre-wrap hljs">npx prisma deploy
</code></div></div></pre><ol start="4"><li>Run the seed to populate data to your local db</li></ol><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre-wrap hljs">npx prisma seed
</code></div></div></pre><ol start="5"><li>Start the application:</li></ol><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre-wrap hljs language-sql">npm <span class="hljs-keyword">start</span>
</code></div></div></pre><ol start="6"><li>Test the API using Postman or Insomnia by hitting the following endpoints:</li></ol><ul><li><code>GET http://localhost:3000/cars</code>: Retrieve a list of all cars</li><li><code>GET http://localhost:3000/cars/:id</code>: Retrieve a specific car by ID</li><li><code>POST http://localhost:3000/cars</code>: Create a new car</li><li><code>PUT http://localhost:3000/cars/:id</code>: Update an existing car</li><li><code>DELETE http://localhost:3000/cars/:id</code>: Delete an existing car</li></ul><h2>How it works</h2><p>The project uses Prisma as an ORM to interact with the PostgreSQL database. The datamodel is defined in the <code>prisma/schema.prisma</code> file. The <code>prisma-client</code> is used to perform CRUD operations on the cars table.</p><p>The Node.js Express server handles the RESTful API routes, and the <code>prisma-client</code> is used to perform the database operations.</p><h2>Note</h2><p>The project is a refactored version of a previous postgresql exercise, so the endpoints and functionalities are similar.</p><h2>Future Work</h2><ul><li>Add authentication and authorization</li><li>Add more validation and error handling</li><li>Add more test cases</li></ul><h2>Built With</h2><ul><li><a href="https://nodejs.org/" target="_new">Node.js</a> - JavaScript runtime</li><li><a href="https://expressjs.com/" target="_new">Express</a> - Web framework for Node.js</li><li><a href="https://www.prisma.io/" target="_new">Prisma</a> - ORM for Node.js</li><li><a href="https://www.postgresql.org/" target="_new">PostgreSQL</a> - Relational database management system</li></ul>
  <h2>Author</h2>
  <ul>
    <li>
      <strong>Yuri Desideri</strong> - <a href="https://github.com/yuridesideri" target="_new">yuridesideri</a>
    </li>
    <li>
      <strong>Giovanni Padoa</strong> - <a href="https://github.com/gpadova" target="_new">gpadova</a>
  </ul><h2>License</h2><p>This project is licensed under the MIT License - see the <a href="LICENSE.md" target="_new">LICENSE.md</a> file for details.</p><h2>Acknowledgments</h2><ul><li><a href="https://www.prisma.io/" target="_new">Prisma</a> - for providing great tooling and documentation for working with databases in Node.js</li></ul><p>Feel free to use, modify and improve it.</p></div>
