# Werewatch

> Search for a movie you want to watch and find out where it is available to stream!

[![Build Status](https://travis-ci.com/llastflowers/werewatch.svg?branch=master)](https://travis-ci.com/llastflowers/werewatch)

## Tech
* React.js
* REST APIs
* Jest
* Travis CI

## Credits
* The Movie Database API
* Utelly API
* Flaticon - Smashicons

## License
MIT © Brittany L. Houtz

## Process

### MVP
* A web application that incorporates The Movie Database and Utelly APIs and uses React w/ custom hooks
* A user can search for a movie by title and get matches
* Desired movie can be selected and movie details are shown, including where to watch

### Structure

* Parent component App contains header and footer
* App renders MovieSearch, MovieDetail, and Providers components. Latter two are rendered together on one page
* MovieSearch has search form and search results in a grid, with each result having a movie poster, title, and release year
* MovieDetail has a movie poster, release year, runtime, and a short plot overview
* Providers has a list of streaming platform icons which are links to the given movie's page on each platform

### Approach

* Use react components and hooks to fetch data from APIs and shape/render data to components
* Use TMDb API query for search function
* Use TMDb API movie_id with match params to link to detail page and show data of only one movie by id
* Use Utelly API with match params to get providers for streaming a movie by TMDb movie_id

### Additional Features/Changes

* Utelly API urls for hbo max and vudu icons are broken; want to set up replacement logos for these services (currently using one placeholder image for both of these)
* Want to display a "no results" message on search page, where applicable
* Want to display a "not currently available" message in place of provider icons when a movie is not available to stream
* Some kind of movie recommendation feature?