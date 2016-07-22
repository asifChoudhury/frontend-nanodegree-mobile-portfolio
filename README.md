
# Website Optimization

As web applications become increasingly interactive and accessed on a variety of devices there are a variety of opportunities in which performance issues can hinder the user experience. This project presents a number of those performance issues and provides an opportunity to showcase skills in identifying and optimizing web applications.

This project is part of Udacity's front-end nanodegree program. The objective of this project is to optimize the given portfolio and achieve a pagespeed score of 90 (or more) and make it run in 60fps (frames per second).

---
Gulp was used to automate the following tasks

* minify js files
* minify css files
* inline linked css in html
* minify html files

##### How to use gulp
* Install gulp globally ```$ npm install --global gulp-cli```
* Initialize the project directory ```$ npm init```
*  Navigate to src folder and install gulp in your project devDependencies ```$ npm install --save-dev gulp```
* Install the following plugins
    * minify js ```$ npm install --save-dev gulp-uglify```
    * minify css ```$ npm install gulp-clean-css --save-dev```
    * inline css in html ```$ npm install --save-dev gulp-inline-css```
    * minify html ```$ npm i gulp-htmlmin --save-dev```

* Run gulp ```$ gulp```

##### Image Optimizations
Images were optimized one by one using [resizeimage's tool.](http://www.resizeimage.net)
This tool allowed for higher optimization level and reduced the byte size by as low as 95%.
The gulp plugins were able to reduce byte sizes by a mere 20%, so it was not used for image optimizations.

##### main.js optimizations
* reuestAnimationFrame when scroll event occurs. Runs updatePositions on scroll but after each frame has been completed.
* Moved DOM queries out of loops.
* Optimized for loops by caching values.
* Switched animation from operating on left to more performant translateX property.
* Replaced querySelector & querySelectorAll with more performant document.getElementById or document.getElementsByClassName