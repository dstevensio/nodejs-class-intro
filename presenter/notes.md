Setup
---

Install node <http://nodejs.org>

Check installed:

`node -v`

`npm -v`

git clone git@github.com:shakefon/nodejs-class-intro.git

`.gitignore` file -> why exclude `node_modules`?

app folder contains the web app we'll be building (navigate there)

touch README.md - good practice to have one!
put something in there - "Example Basic Express App"

`npm init` - creates `package.json` with initial values, explain what
package.json is

`npm install express --save` (show that package.json was updated)

Now and throughout development, open up Node API docs & Express docs:

<http://nodejs.org/api/>

<http://expressjs.com/api.html>

edit  `app.js` in favorite text editor (make clear that text editor is personal
preference, no one editor is required)

`app.listen(3000);`

App is now listening on port - explain concept that node listens for
connections on a port, and that file path is irrelevant re: connecting to
application file

Now, it's listening for connections but no routes defined, so define a route
for the root of the domain:

```js
        app.get('/', function (req, res) {
          res.send('Hello World!');
        });
```

Explain the HTTP verb correlation for get
Explain the callback
Explain what req & res are
Explain res.send and what it sugars

now see fruits of labor:

`node app.js`

<http://localhost:3000>


***Move to step1 folder to catch up if needed***
(remember to npm install)

(everyone now caught up to this stage of tutorial)

Serving static assets

`mkdir public`

edit app.js

`app.use(express.static(__dirname + '/public'));`

`mkdir -p public/img`

Drop any image in there and remember filename

<http://localhost:3000/img/helloworld.png>


***Move to step2 folder to catch up if needed***
(remember to npm install)

(everyone caught up to this step of tutorial)

-> Drop HTML5 boilerplate in to public folder

<http://html5boilerplate.com/>

Download, unzip, cp `index.html`  `css` `img` and `js` to `public` folder

<http://localhost:3000/index.html>

***Move to step3 folder to catch up if needed***
(remember to npm install)

(caught up to this step)

`rm public/index.html`

-> Templating with handlebars

`npm install hbs --save`

edit app.js

```js
app.set('views', __dirname + '/templates');
app.set('view engine', 'hbs');
```

`mkdir templates`

create new file `templates/index.hbs`

minimal html file with a paragraph showing `message` variable contents and to
show html display, `markup` variable contents in triple bars

edit app.js
(in route for /)

```js
  var content = {
    message: "Hello World!",
    markup: '<a href="#">OMG a link</a>'
  };

  res.render('index', content);
```

***Move to step4 folder to catch up if needed***
(remember to npm install)

copy HTML5 boilerplate header and footer in to `boilerplate.hbs`

edit app.js

`res.render('boilerplate', content);`

***Move to step5 folder to catch up if needed***
(remember to npm install)

-> Handling post data

edit app.js

`app.use(express.bodyParser());`

```js
app.post('/', function (req, res) {
  var content = {
    message: "Say what?",
    markup: '<a href="/">Return home</a>',
    enteredText: req.body.enteredText
  };

  res.render('boilerplate', content);
});
```

edit templates/boilerplate.hbs
\- before {{markup}}

```
        {{#if enteredText}}
        <p>
          {{enteredText}}
        </p>
        {{/if}}
```

\- after {{markup}}

```
        <form action="/" method="POST">
          <input type="text" name="enteredText">
          <button type="submit">Go!</button>
        </form>
```

***Move to step6 folder to catch up if needed***

FIN.

---

If coming to 102 class, install mysql locally AND redis. See me now or before
that class if need help doing so
