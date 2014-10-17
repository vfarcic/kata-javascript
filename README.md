JavaScript Kata Seed
====================

This is a seed for working on JavaScript katas.

Prerequisites
-------------

Install [NodeJS with NPM](http://nodejs.org/).

Run following commands:

```bash
npm install -g grunt-cli
npm install -g bower
npm install -D gulp-jasmine
npm install
bower install
```

Source Code
-----------

Code is located in following directories:

* test: Directory with tests
* src: Directory with implementation

Tasks
-----

[Grunt](http://gruntjs.com/) is used for execution of tasks.

Running Tests
-------------

[Jasmine](http://jasmine.github.io/2.0/introduction.html) is provided for test asserts.

To run all tests:

```bash
grunt jasmine
```

To run all tests whenever there is a change in code:

```bash
grunt watch
```