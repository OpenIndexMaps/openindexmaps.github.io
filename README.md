# openindexmaps.github.io

This is the website for OpenIndexMaps.org

## Installation
Requires both Ruby (to run Jekyll) and JavaScript / NPM to compile JavaScript

### Building JavaScript
Install JavaScript dependencies
```sh
$ npm install
```

Building JavaScript
```sh
$ npx webpack
```

Continously watch and build
```sh
$ npx webpack --watch
```

### Building Jekyll site
Install Jekyll and Ruby dependencies
```sh
$ bundle install
```

Running Jekyll
```sh
$ bundle exec jekyll serve
```


## Build process on Netlify
```sh
npm i; npx webpack; jekyll build
```
