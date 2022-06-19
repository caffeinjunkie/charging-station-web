# 🚀 Starting Charging Station Web


### `prerequisites`
Install required packages before starting the project.

```
npm install
# or
yarn install
```

###⚠️ You might encounter these errors when installing and starting the project:

1. ENOTFOUND on some libraries.
2. Trouble installing recompose.
3. graphql-request
```
Module not found: Error: Can't resolve 'graphql/language/parser:
```
```
Module not found: Error: Can't resolve 'graphql/language/printer'
```

To speed up the process and avoid these errors from the get go:
```
1. Remove package-lock.json
2. Remove @types/recompose, recompose and graphql-request from package.json
3. npm install
4. npm install graphql-request grpahql
5. npm install @types/recompose recompose --legacy-peer-deps
```

After installing all the required packages, you can:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If the backend doesn't run on its default port, change the URL on ```src/config/index.ts``` with the correct port.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run test:coverage`

Launches the test runner with test coverage.

### `npm run lint`

Launches lint checkers with prettier plugin.
