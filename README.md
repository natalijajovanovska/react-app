<div>
  <h1>The Quadrant Event</h1>
  <p>React.js application used for visually arranging guests in 4 different areas. Guests lists fetched at: https://jsonplaceholder.typicode.com/users .</p>
  <p>Application contains a section for adding custom guests and a 404 Error Page.</p>
  <p><strong>Used dependencies:</strong></p>
  <p>react-bootstrap</p>
  <p>react-router-dom</p>
  <h1>Deploying a React App* to GitHub Pages</h1>
  <p>* created using <code>create-react-app</code></p>
  <h1>Introduction</h1>
  <p>In this tutorial, I'll show you how to deployed a React app which I created using <code>create-react-app</code> to
    GitHub Pages and how the project should be started</p>
  <p>You can visit the deployed app, at <a href="https://natalijajovanovska.github.io/react-app/#/" rel="nofollow">https://natalijajovanovska.github.io/react-app/#/</a>.</p>
  <p>This repository contains the files related to the app. The <code>master</code> branch contains the app's source
    code (the code the app's developers edit), and the <code>gh-pages</code> branch contains a <em>built</em> version of
    the app (i.e. the code that GitHub Pages serves to the app's visitors).</p>
  <p>The remainder of this document contains a tutorial on creating a React app, starting it (using
    <code>create-react-app</code>) and deploying that app to GitHub Pages.</p>
  <h1>Tutorial</h1>
  <h2>Prerequisites</h2>
  <ol>
    <li>
      <p>An adequate version of <a href="https://nodejs.org/" rel="nofollow"><code>Node.js</code></a> is installed.
        Here's the adequate version I use:</p>
      <div class="highlight highlight-source-shell">
        <pre>$ node --version
v12.2.0</pre>
      </div>
    </li>
    <li>
      <p>An adequate version of <a href="https://nodejs.org/" rel="nofollow"><code>npm</code></a> is installed. Here's
        the adequate version I use:</p>
      <div class="highlight highlight-source-shell">
        <pre>$ npm --version
6.9.0</pre>
      </div>
    </li>
    <li>
      <p>An adequate version of <a
          href="https://github.com/facebookincubator/create-react-app"><code>create-react-app</code></a> is installed.
        Here's the adequate version I use:</p>
      <div class="highlight highlight-source-shell">
        <pre>$ create-react-app --version
3.0.1</pre>
      </div>
      <p>In the case of <code>create-react-app</code>, you can either install it globally (i.e.
        <code>$ npm install -g create-react-app</code>) or install it locally (i.e.
        <code>$ npm install create-react-app</code>). If you choose the latter, you will have to specify its path
        whenever you invoke it (e.g. <code>path/to/node_modules/.bin/create-react-app</code>).</p>
    </li>
    <li>
      <p>A <a href="https://www.github.com">GitHub</a> account.</p>
    </li>
    <li>
      <p>A command-line Git client <a href="https://help.github.com/articles/set-up-git/">setup according to GitHub</a>.
      </p>
    </li>
  </ol>
  <h2>Procedure</h2>
  <ol>
    <li>
      <p><strong>Create an <em>empty</em> repository on GitHub.</strong></p>
      <ul>
        <li>For this tutorial, I'll create a repository named <code>react-app</code>.</li>
        <li>By <em>empty</em>, I mean <em>without</em> a <code>README.md</code> file, a <code>.gitignore</code> file, a
          <code>LICENSE</code> file, or any other files.</li>
      </ul>
    </li>
    <li>
      <p><strong>Create a new React app on your computer.</strong></p>
      <div>
        <pre>$ create-react-app react-app</pre>
      </div>
    </li>
    <li>
      <p><strong>Install the <code>gh-pages</code> package as a "dev-dependency" of the app.</strong></p>
      <pre><code>$ cd react-app
$ npm install gh-pages --save-dev
</code></pre>
      <ul>
        <li>The commands shown in the following steps can all be issued from within the app's folder.</li>
      </ul>
    </li>
    <li>
      <p><strong>Add some properties to the app's <code>package.json</code> file.</strong></p>
      <ul>
        <li>At the top level, add a <code>homepage</code> property. Define its value to be the string
          <code>http://{username}.github.io/{repo-name}</code>, where <code>{username}</code> is your GitHub username,
          and <code>{repo-name}</code> is the name of the GitHub repository you created in step 1. Since my GitHub
          username is <code>natalijajovanovska</code> and the name of my GitHub repository is <code>react-app</code>, I
          added the following property:</li>
      </ul>
      <div>
        <pre><span><span>//</span>...</span>
<span><span>"</span>homepage<span>"</span></span><span>:</span> <span><span>"</span>https://natalijajovanovska.github.io/react-app<span>"</span></span></pre>
      </div>
      <ul>
        <li>In the existing <code>scripts</code> property, add a <code>predeploy</code> property and a
          <code>deploy</code> property, each having the values shown below:</li>
      </ul>
      <div>
        <pre><span><span>"</span>scripts<span>"</span></span><span>:</span> {
  <span><span>//</span>...</span>
  <span><span>"</span>predeploy<span>"</span></span><span>:</span> <span ><span >"</span>npm run build<span >"</span></span>,
  <span ><span >"</span>deploy<span >"</span></span><span >:</span> <span ><span >"</span>gh-pages -d build<span >"</span></span>
}</pre>
      </div>
      <ul>
      </ul>
    </li>
    <li>
      <p><strong>Create a git repository in the app's folder.</strong></p>
      <pre><code>$ git init
Initialized empty Git repository in C:/path/to/react-app/.git/
</code></pre>
    </li>
    <li>
      <p><strong>Add the GitHub repository as a "remote" in your local git repository.</strong></p>
      <pre><code>$ git remote add origin https://natalijajovanovska.com/gitname/react-app.git
</code></pre>
      <ul>
        <li>This will make it so the <code>gh-pages</code> package knows where you want it to deploy your app.</li>
        <li>It will also make it so git knows where you want it to push your source code (i.e. the commits on your
          <code>master</code> branch).</li>
      </ul>
    </li>
    <li>
      <p><strong>Generate a <em>production build</em> of your app, and deploy it to GitHub Pages.</strong></p>
      <pre><code>$ npm run deploy
</code></pre>
      <ul>
        <li>That's it! Your app is now accessible at the URL you specified.</li>
        <li>In my case, my app is now accessible at: <a href="https://natalijajovanovska.github.io/react-app/#/"
            rel="nofollow">https://natalijajovanovska.github.io/react-app/#/</a></li>
      </ul>
    </li>
    <li>
      <p><strong>Optionally, commit your source code to the "master" branch and push your commit to GitHub.</strong></p>
      <pre><code>$ git add .
$ git commit -m "First commit"
$ git push origin master
</code></pre>
    </li>
  </ol>
  <h1>References</h1>
  <ol>
    <li><a href="https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom"
        rel="nofollow">Facebook's tutorial on deploying a React app to GitHub Pages</a></li>
  </ol>
  <h1>Starting the application</h1>
  <p>Clone the application from https://github.com/natalijajovanovska/react-app.git</p>
  <pre><code>$ git clone https://github.com/natalijajovanovska/react-app.git
    </code></pre>
  <p><strong>Install the npm packages used in this project.</strong></p>
  <pre><code>$ npm install
      </code></pre>
  <p><strong>Run the project in your browser (localhost:3000).</strong></p>
  <pre><code>$ npm start
    </code></pre>
  </article>
</div>
</div>
