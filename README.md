# backstage-kubevela

For the demonstration of the KubeVela add-on for Backstage we are taking as a starting point and first commit the repository provided by the community. 

The modifications made to present the actual integration of Backstage with KubeVela, as well as the examples and other parts of the code initially belong to the repositories listed below and referenced elsewhere in the document.

- [https://github.com/kubevela-contrib/backstage-plugin-kubevela/tree/main](https://github.com/kubevela-contrib/backstage-plugin-kubevela/tree/main)
- [https://github.com/wonderflow/vela-backstage-demo](https://github.com/wonderflow/vela-backstage-demo)

## Module installation


Once the initial repository provided by KubeVela for testing has been downloaded, the following steps are necessary for the preparation of the container image.

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

You will need to have the necessary secrets configured to be able to access your private repository image. Visit the [requirements section](https://github.com/activa-prefapp/documentation/tree/main/requirements) of the organization's general documentation for more info.

## Enable Backstage plugin

Before deploying the Backstage application, it is necessary to activate the KubeVela plugin for integration.

```
vela addon registry add experimental --type=helm --endpoint=https://addons.kubevela.net/experimental
vela addon enable backstage pluginOnly=true
```

## Deploy Backstage application on KubeVela

To deploy a custom instance of Backstage, such as the one in this repository, deploy the OAM plugin provided:

```
cd infraestructure
vela up -f backstage.yaml
```

You can check status with the command:

```
vela status backstage -n vela-system
```

You can display your Backstage using port-forward:

```
vela port-forward backstage -n vela-system

    local | backstage-plugin-vela | backstage-plugin-vela:8080
>   local | backstage | backstage:7007                                               
```

Additionally you can check the status of the application with the [VelaUX](https://kubevela.io/docs/installation/standalone#3-install-velaux) dashboard if you have previously installed the addon.

You can always keep your infrastructure deployment up to date using [GitOps with FluxCD in KubeVela]().

## Uninstall

You can undo the changes and remove the application deployment with the following command:

```
vela delete backstage -n vela-system  
```

# Integration

The Backstage plugin for KubeVela will connect to the Kubernetes API and request OAM applications to be served in Backstage. 

Following the [plugin documentation](https://github.com/kubevela-contrib/backstage-plugin-kubevela/blob/main/README.md#system-model-integration):

- A OAM application will become a backstage system.
- Resources created by the candle component will become backstage components.
- Resources can be marked with annotations to represent more information behind the scenes as described in the Known Annotations section.

## Known Annotations

KubeVela will sync with the backstage Well-known Annotations, besides that, KubeVela adds some more annotations that can help sync data from vela application to backstage spec.

| Annotations                           |               Usage        |
| :------------------------------------: | :---------------------------------------:|
|    `backstage.oam.dev/owner`        |  Owner of the app synced to backstage |
|    `backstage.oam.dev/domain`        | Domain of the app synced to backstage  |
|    `backstage.oam.dev/system`        | System of the app synced to backstage, by default its the name of application  |
|    `backstage.oam.dev/description`        |    Description of the app synced to backstage | 
|    `backstage.oam.dev/title`        |   Title of the app synced to backstage |
|    `backstage.oam.dev/tags`        |   Tags of the app synced to backstage, split by `,`  |


Don't forget to checkout the examples directory, which contains all kinds of usage examples. Common ones are:

- the annotations and labels of vela application will be automatically injected on syncing, while vela component need a backstage trait for this, check the [app.yaml](./examples-integration/app.yaml) for details.
- You can configure as the trait, then it will sync the backstage entity from the location targets. Check out [app-location.yaml](./examples-integration/app-location.yaml) for details.backstage-location
- You can also specify the backstage system if you want different vela apps in the same backstage system. Check out [app-with-system.yaml](./examples-integration/app-with-system.yaml) for details.


## Result of the integration tests

Currently the integration is in early development phase. From this Backstage plug-in you should expect only the functionalities described in the previous section.

- You will not yet be able to create OAM components from the component creation section of your Backstage interface.

Integration problems encountered:

- The VelaUX tab configured in the side menu shows integration errors. It is not possible to display the VelaUX content embedded in the Backstage interface.

You can check the evolution of the integration level in the official maintained repositories. As well as news, updates and future goals.

 - [https://github.com/kubevela-contrib/backstage-plugin-kubevela/tree/main](https://github.com/kubevela-contrib/backstage-plugin-kubevela/tree/main)




