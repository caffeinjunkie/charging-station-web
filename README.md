# 🚀 Starting Charging Station Web


### `prerequisites`
Install required packages before starting the project.

```
npm install
# or
yarn install

```

**If you encounter any of these problems when installing:**
1. ENOTFOUND on some libraries. Remove package-lock.json and do:
```
npm install
# or
npm install --legacy-peer-deps
```
2. Trouble installing recompose. Remove @types/recompose and recompose.
```
npm uninstall @types/recompose recompose
and npm uninstall @types/recompose recompose --legacy-peer-deps
```

After installing all the required packages, you can:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If the backend doesn't run on its default port, change the URL on ```src/config/index.ts``` with the correct port.

**If you encounter this problem when starting:**
```
Module not found: Error: Can't resolve 'graphql/language/parser:
```
```
Module not found: Error: Can't resolve 'graphql/language/printer'
```
or any problems regarding graphql-request. Remove graphql-request and reinstall it.
```
npm uninstall graphql-request
# then
npm install graphql-request
```

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run test:coverage`

Launches the test runner with test coverage.

### `npm run lint`

Launches lint checkers with prettier plugin.
