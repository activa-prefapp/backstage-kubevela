# backstage-kubevela

module installation

````
yarn add --cwd packages/app @oamdev/plugin-kubevela-backend
yarn add --cwd packages/app @oamdev/backstage-plugin-velaux
````

````
yarn install --frozen-lockfile

yarn tsc

yarn build:backend --config app-config.yaml
````