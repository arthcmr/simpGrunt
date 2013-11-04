simpGrunt
=========

**simpGrunt is a simple boilerplate for quickly coding, building and optimizing static websites.**
It already comes with cool and commonly used resources such as Bootstrap, jQuery, FontAweome and it does a bunch of automated tasks such as minifying your files, and much more.

Clone this repo or download it, and get started building your website following a simple workflow.

##Get Started

To get started with simpGrunt, follow these simple steps:

1. First of all, you'll need to install Node and NPM (Node Package Manager, which comes with Node). Just go to http://nodejs.org/ and install it. *You might already have it!*
2. If you haven't done this already, download simpGrunt or clone this repo
```
git clone https://github.com/arthurcamara1/simpGrunt.git
```
3. Browse to simpGrunt's folder ```cd simpGrunt``` and run the following command to install the dependencies.
```
npm install
```
4. simpGrunt is ready to go. Run the following command:
```
grunt
```

When you run this command, grunt keeps watching for changes, and rebuilds your entire website whenever you add, delete or change source files. If you don't want this option, run ```grunt build``` instead.

Great job! **Open ```web/index.html``` in your browser and you'll be able to see the example page.** Now you have to learn how to build your own website below.

##Understand and build your website

Okay, now that you got it all set up, let's get familiar with the project structure.

```
src/
  data/
        books.json
  img/
        example.jpg
        ...
  js/
        main.js
        ...
  layouts/
        default.hbs
  less/
        general.less
        ...
  libs/
        bootstrap/
        ...
  pages/
        index.hbs
        ...
  partials/
        footer.hbs
        ...
Gruntfile.js
package.json
    
```

Run the command ```grunt``` in the terminal and you will see another folder being created, called **web/**. The web folder contains all the generated files, minified, optimized and ready to be uploaded to your server.

You want to build your own static site, though. The first thing to do is changing the file *package.json*. Change the following fields according to your preferences. **DO NOT change the dependencies or devDependencies**
```
{
        "name": "simpGrunt Example",
        "description": "This is my static website",
        "author": "Arthur Camara <arthurcamara@gmail.com>",
        ...
}
```

The next thing to do is changing the html, css, javascript and content. Let's quickly go over each of the folders to understand where things are located:

- **src/data/**: json files that may be used to store any data you want. **This is optional**. However, it's good practice to use it, since you take full advantage of handlebars templates and content becomes easy to maintain. Upon running grunt, they will be automatically merged to the html pages.
- **src/img/**: all the website images (jpeg, gif or png). When grunt runs, they will be optimized (without losing their quality) and put under *web/img/*.
- **src/js**: all your javascript files (excluding vendor libraries). When grunt runs, they will be concatenated and a minified javascript file *web/js/scripts.js* will be created.
- **src/layouts**: layouts for your website. The default layout is called *default.hbs*. You may change this behavior in the *Gruntfile*.
- **src/less/**: your stylesheets, written in LESS. When grunt runs, they will be compiled, concatenated and a minified css file *web/css/style.css* will be created.
- **src/libs/**: vendor libraries, such as bootstrap, jquery, and so forth (see all the supported libraries below, under the section Features). When grunt runs, they will simply be copied to the folder *web/libs/* (currently, without any modification or optimization - be careful!).
- **src/pages**: page files, written in handlebars (*.hbs).
- **src/partials**: useful handlebars partials may be included here.

To start your website, start by modifying the main template ```src/layout/default.hbs``` and the pages, under ```src/pages```.

Consider reading more about handlebars at http://handlebarsjs.com/ and LESS at http://lesscss.org.

After you're done with the website, you just have to upload the contents of the *web/* folder to your server.

##Multiple sites

It is also possible to have multiple source folders, instead of having only the default ```src/```. simpGrunt actually comes with three source folders:

- ```src/```: simpGrunt example website
- ```src_clean/```: a clean source folder, so you can start your project building your own pages
- ```src_simple/```: a simple Bootstrap-only website

You can actually create your own source folder, by simply duplicating one of those or creating a new one, as long as you follow the project structure mentioned above.

By default, grunt will always process the source folder named ```src/```. To process a different source folder, run the command ```grunt --src=[FOLDER_NAME]```. Example:

```
grunt --src=src_simple
```

Of course, you can also rename the most usual folder you're using to ```src/```.


##Features

simpGrunt is a collection of well-known useful tools, shipped together and running on top of Grunt (http://gruntjs.com/). Check out all the tools and grunt tasks it currently supports:

- **Bootstrap**: Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development. - http://getbootstrap.com
- **jQuery**: Who doesn't know jQuery? Over 2.2 million websites use it! *(http://wappalyzer.com/)* - http://jquery.com
- **FontAwesome**: Awesome icons for Bootstrap - http://fontawesome.io/
- **Less**: The dynamic stylesheet language - http://lesscss.org/
- **Handlebars**: Easy-to-build semantic templates - http://handlebarsjs.com/

And, of course, it automatically builds your website, putting it all together and performing a bunch of optimizations and boring tasks you would forget to do yourself otherwise! You don't have to configure or download anything, really.
- **Assemble**: Nice and easy workflow for organizing and building static sites - http://assemble.io/
- **grunt-contrib-clean**: Cleans files and folders - https://github.com/gruntjs/grunt-contrib-clean
- **grunt-contrib-concat**: Concatenates files - https://github.com/gruntjs/grunt-contrib-concat
- **grunt-contrib-uglify**: Minify files with UglifyJS. - https://github.com/gruntjs/grunt-contrib-uglify
- **grunt-contrib-copy**: Copies files and folders to the right places - https://github.com/gruntjs/grunt-contrib-copy
- **grunt-contrib-less**: Compiles LESS files to CSS - https://github.com/gruntjs/grunt-contrib-less
- **grunt-contrib-htmlmin**: Minifies HTML files - https://github.com/gruntjs/grunt-contrib-htmlmin
- **grunt-contrib-imagemin**: Minifies PNG, JPEG and GIF images - https://github.com/gruntjs/grunt-contrib-imagemin
- **grunt-contrib-watch**: Build your website automatically again when changing, adding or deleting files - https://github.com/gruntjs/grunt-contrib-watch

##FAQ

**So, is this simply a bunch of widely available stuff placed together?**
*Yes. However, the fact that it comes with all those things, the configuration files, an easy workflow and ready to use makes things a lot simpler.*

**What if I don't like or need something?**
*You may change anything you want. And doing that is not difficult at all!*

**Do I have to upload the src/ folder to my server?**
*Nope! Just upload whatever is inside the web folder and you'll be fine.*

**I improved this boilerplate! What do I do next?**
*Please, let me know and make a pull request, thus contributing to the project =) It's something I made for fun while working at a different project, but still, whatever you do may be useful to other people as well.*
