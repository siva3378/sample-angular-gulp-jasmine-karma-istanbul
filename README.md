Sample project to demo Unit testing an Angular app with Jasmine+Karma
==================================================

This file explains how to set-up environment to start work with this project template. This project uses (Gulp, Bower, Jasmine, Karma). 

In this sample project you can find 
- set of useful gulp tasks, 
- sample unit tests
- fully configured karma file which generates tests & coverage report
- jenkins integration (not implemented yet)

Developer tools required
---------------------------------
Following software needs to be installed for UI development with this project template  

- Node.js & npm (Node package manager)
- Git

Install following Node package
-------------------------------------------------
Once Node & npm is installed in your machine, you can install all node packages with node console.

1. start > search and open "Node.js command prompt"
2. Change the current directory in your console to <project directory> by using "cd" command where you can find "package.json" file
    Eg: > cd "C:\Users\UserName\Documents\Workspaces\project_name"
    
3.	Execute following commands in "Node.js command prompt" to install few node packages globally

        npm install -g bower gulp phantomjs jasmine-core
        npm install -g karma karma-chrome-launcher karma-cli karma-coverage karma-html-reporter karma-jasmine karma-phantomjs-launcher

4.	Execute following commands in "Node.js command prompt" to install few node packages locally. This command not only install project dependencies but also runs karma runner on PhantomJS for you.

        npm install

To run tests in specific browser : (say Chrome)
-----------------------------------------
First you need to install the Chrome browser. Now karma runner requires an environment variable called "CHROME_BIN" (for Chrome browser). This can be set in the user account environment variables by searching with word "env" in start 

1.	Start > search "env" > open "Edit environment variable for your account".
2.	Click on "New" button under "User Variables for ..."
3.	In Variable name enter : CHROME_BIN
4.	In Variable value enter : "path to exe file of chrome browser" Eg: C:\Users\PalaSK\AppData\Local\Google\Chrome\Application\chrome.exe (if it exists here)
5.	Restart your command prompt and enter "%CHROME_BIN%" which should open a chrome browser
6.	If the above step doesn’t open a chrome browser, please check the path you have provided in environment variables
7.  In karma.config.js at line no 66, add "Chrome" to the browsers array
8.  start karma runner to run on both PhantomJS & Chrome browser

Avaliable Gulp tasks - (yet to improve more tasks)
-------------------------------
You can execute following commands to perform development tasks

- To compile your sass to css

        gulp sass

- To watch and compile sass to css automatically

        gulp sass-watcher

- To convert all your html templates & push those into angularTemplateCache

        gulp html2js

- To watch, convert & push all your html templates & push those into angularTemplateCache

        gulp html2js-watcher

- To compress all css, js files for build & dist

        not implemented yet ;)


Running javascript unit test cases
-------------------------------------------
- Open "Node.js command prompt"
- Run gulp task 

        gulp html2js

     >This gulp task converts all your html templates to javascript templates and updates into angular template cache. Whenever you change any html file, you should execute this command or you can execute a watcher command in a separate window specified in gulp tasks section

- Start karma runner - following command starts karma runner, executes all the unit test cases, generates all reports and also watches for any change in our js files & executes all unit tests again

        karma start karma.config.js

- Run karma with few options

        karma start karma.config.js --reporters html,coverage,dots // To generate perticular reports
        karma start karma.config.js --browsers Chrome // To run only in chrome
        karma start karma.config.js --single-run // To run only once

- You need to open html report files from "tests/reports" in browser to check the generated reports

 
If you use maven to build your entire java project you need to exclude node_modules from build:
-------------------------------------------
npm installs more than 30,000 files in "node_modules" directory. When we do maven clean & build, maven tries to put all these node modules inside *.war file, which takes more than 1 hour. So In order to exclude "node_modules" folder insert following plugin in <project directory>\web\pom.xml (inside plugins tag)

     <plugins>
     <!-- other plugins -->
     <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-war-plugin</artifactId>
            <version>2.1</version>
            <configuration>
                <warSourceExcludes>node_modules/**,data/**,build/**,tests/**</warSourceExcludes>
            </configuration>
     </plugin>
     <!-- other plugins -->
     </plugins>

