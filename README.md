# react-leaflet-webpack-boilerplate
React and Leaflet boilerplate using Webpack 4

## Main Node Modules
`react` `react-dom`: let us use React

`leaflet` `react-leaflet`: let us use Leaflet

## Webpack Plugins
### Webpack
`webapck`: module bundler and build tool

`webpack-dev-server`: it serves the bundled app in a local environment

`webpack-cli`: it configures webpack setup

### Babel
`@babel/core` `@babel/preset-env`: these transpile js code to vanilla js for all browsers

`@babel/preset-react`: it transforms React's JSX syntax to vanilla js

`babel-loader`: it makes babel work in webpack

`babel-plugin-transform-class-properties`: it enables arrow functions

### CSS
`mini-css-extract-plugin` (currently this is more friendly than `extract-text-webpack-plugin` for webpack 4): it extracts css which is in style tag of html file into a separated text file like bundle.css

`style-loader` `css-loader`: these get css code and put css code within the style tag of html file

`url-loader`: it transforms files into base 64 URIs enabling us to import Leaflet css file from node modules

### HTML
`html-webpack-plugin`: it generates an HTML including hash in the filename based on the template
