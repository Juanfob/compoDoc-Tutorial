# compoDoc-Tutorial
Tutorial how to doc a ionic app with CompoDoc

First of all we need to install the package. You could either install it globally for your computer or simply add it as a development dependency to the project like this:

npm install --save-dev @compodoc/compodoc

After we’ve added Compodoc we can create an additional script inside our package.json that will start the generation of our documentation:

"compodoc": "./node_modules/.bin/compodoc -p tsconfig.json -w -s"

The last two flags are optional but quite handy! To generate the documentation you now only need to run:

npm run compodoc

This will go through the folders specified inside the tsconfig and generate a new folder documentation at the root of your Ionic project. Also with our flags, the documentation is served at 127.0.0.1:8080

Source:
https://compodoc.app/
https://ionicacademy.com/ionic-code-documentation/
