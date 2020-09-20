# preparation

Create a copy of the (remote) repository
```
https://github.com/Froncast/webpack-starter-kit.git
```

Rename the build folder to the name of your project.

```
mv webpack-starter-kit project_name
```

Go to project folder
```
cd project_name
```

Once in the project folder, delete the .git folder associated with the build repository by running the following command.
```
npx rimraf .git
```

Install all dependencies.
```
npm install
```

## Development mode

Run command
```
npm start
```

Во вкладке браузера перейти по адресу http://localhost:9000

## Building

In order to create optimized files for hosting, you need to run the following command. A "dist" folder will appear in the project root with all the optimized resources.

```
npm run build
```