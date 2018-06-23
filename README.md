# README

Test on js frontend light weight framework "stimulus"

Things you may want to cover:

* Ruby version
  * 2.4.1

* Reference (GoRails)
  * https://www.youtube.com/watch?v=GEJWvMYU5_8

* Reference this commit to see all the modification for stimulus
  * https://github.com/charlietag/rails52_stimulus/commit/cca7e7363f71e21a068950aa6958291786b8ee16

* Pros
  * It helps rails app to work well with turbolinks
  * It works well with asset pipeline
    * yarn add jquery
    * app/asset/javascript/application.js
      * require jquery
        * then stimulus controller can use $('#id') like function
  * Asset pipeline works because asset/javascript/application.js is usually included before pack/js
* Asset pipeline V.S. webpacker
  * Asset pipeline
    * app/asset/javascript/xxx.js
      * I have to add semi colon(;) line by line myself
  * webpacker
    * app/javascript/xxxx.js
      * I don't have to add semi colon(;) line by line myself
      * Instead, after webpack compiled, all semi colon will add to line by line automatically!

* After tested stimulus, in my opinion
  * I think stimulus, is built for something like 2-way binding "ONLY"
  * It's built to replace part of jQuery funcion actually (event binding)
  * Not to be built to replace Vue/React
  * If I need ajax , I think I will still use SJR by default

* For example
  * If I want to build a TODO list app connection with my rails app saving back to database.
  * Using stimulus as ajax post, it would be not proper.
  * Instead, stimulus change html value. And still use default submit + turbolinks to achieve 'single-page-app' purpose.

* Event references
  * https://stimulusjs.org/handbook/building-something-real
| Element           | Default event |
|-------------------|---------------|
| a                 | click         |
| button            | click         |
| form              | submit        |
| input             | change        |
| input type=submit | click         |
| select            | change        |
| textarea          | change        |
