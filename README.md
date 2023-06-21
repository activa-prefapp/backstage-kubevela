# backstage-kubevela

For the demonstration of the KubeVela add-on for Backstage we are taking as a starting point and first commit the repository provided by the community: [https://github.com/wonderflow/vela-backstage-demo](https://github.com/wonderflow/vela-backstage-demo).

## Module installation


Once the initial repository provided by KubeVela has been downloaded for testing, it is necessary to follow the following steps for the preparation of the container image.

````
yarn add --cwd packages/app @oamdev/plugin-kubevela-backend

yarn add --cwd packages/app @oamdev/backstage-plugin-velaux
````

With the modules installed, we must follow the steps indicated in the backstage documentation.

````
yarn install --frozen-lockfile

yarn tsc

yarn build:backend --config app-config.yaml
````

## Container image build

You can generate the image with the following command:

````
docker image build --tag backstage -t kuvebela-backstage .
````

You should note that the configuration requires deployment on kubernetes with the deployed KubeVela plugin for Backstage. You will not be able to replicate it locally.

# Install Backstage instance


## Infrastructure requirements

- KubeVela

## Deployment Backstage application on KubeVela

To deploy a custom instance of Backstage, such as the one in this repository, deploy the OAM plugin provided:

```
cd infraestructure
vela up -f backstage.yaml
```

You can check status with the command:

```
vela status backstage -n vela-system
```

Additionally you can check the status of the application with the [VelaUX](https://kubevela.io/docs/installation/standalone#3-install-velaux) dashboard if you have previously installed the addon.

You can always keep your infrastructure deployment up to date using GitOps with FluxCD in KubeVela.



## Uninstall

You can undo the changes and remove the application deployment with the following command:

```
vela delete backstage -n vela-system  
```