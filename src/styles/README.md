##SASS Compilation & theme selection instructions

This folder contains all your app's styles/themes. 

### Gulp tasks     
* `gulp sass` command is used to compile all your ***.sass** files to **css-themes/\*.css** files
* `gulp sass-watcher` watches for changes in your all ** .sass & .scss ** files
* `gulp inject` includes only one theme file (which is mentiond in config.js file) from **css-themes** folder. 

###Configuration to change theme
In the root of this project, you can find config.js file. Please assign your desired theme to `theme` variable. Currently it is set to **`theme = theme1.css`**


