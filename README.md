# Node.js Express
Node.js Express provides you with an initial server to help you get
underway with your projects.

## What's Included?
Aside from Express support, this package also has functionality for rendering
`pug` (jade) views and compiling `sass` to CSS through the use of gulp. Bootstrap is relied upon
for quick and easy UI components and styles. jQuery is also comes along to support
the Bootstrap js components.


## Getting Started
To get started using Node.js Express, you will need to run the
following commands:

```
$ npm install -g gulp
$ git clone git@github.com:smakys/zaplabs-hackathon-boilerplate.git
$ npm install
```

Sass stylesheets located within the `sass` directory, can be compiled by running
either `gulp watch` (which will also start watching the directory) or `gulp sass`.

Once all the packages are installed, you can start the server by running `npm
start`. This will start the server listening on port `3000` unless specified
otherwise.

## File Structure
The following tree illustrates how Node.js Express Boilerplate has setup your
file structure. Not all folders have been created, but the file structure should
explain where you should place your files (unless you choose to change the
structure).

```
.
├── public
│   ├── css
│   │   └── # compiled stylesheets will be placed here
│   ├── js
│   │   └── # compiled javascripts will be placed here
├── sass
│   └── # sass files should be placed here
├── scripts
│   └── # javascript files should be placed here
├── routes
│   └── index.js
├── views
│   ├── index
│   │   └── index.pug
│   ├── shared
│   │   ├── head.pug
│   │   └── layout.pug
│   └── error.pug
└── server.js
```

### /public
Public is a directory should contain any files you want visible to the public,
such as stylesheets, JavaScript and images.

### /sass
The directory should hold all your .scss files. The server has been setup
to compile the files from this directory into `/public/css` upon running the
`gulp` command.

### /scripts
The directory should hold all your .js files. The server has been setup
to compile the files from this directory into `/public/js` upon running the
`gulp` command.

### /routes
Routes should contain all your router specific files.

### /views
Views should contain all of your pug views. The structure provided is just an
example of how your views could be laid out.

## Deploying with "now"
If you want an easy way to make a deploy to a server. The now service is quick an easy.

First step is to download the desktop client and then follow the instructions for the now-cli.

https://zeit.co/docs/getting-started/installing-now

Once you have the now-cli installed just run the follow command:

```
$ now
```

After that you can change the alias of your test deploy by

```
$ now alias https://zaplabs-hackathon-boilerplate-kcfmuyuarz.now.sh straight-outta-compliance
```

Check out below link for more information.

https://zeit.co/docs/getting-started/your-first-deployments#deploying-node


