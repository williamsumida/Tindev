# Semana OmniStack 8.0
A semana OmniStack v 8.0 é um evento criado pela Rocketseat voltado para a 
criação de uma aplicação utilizando Nodejs, ReactJS e React Native.

A edição 8.0 tem como objetivo criar o Tindev, uma aplicação semelhante ao tinder,
 porém voltada a encontrar desenvolvedores no Github.

Este README é dedicado à anotações e instruções feitas durante o evento.
## Índice
[Gerenciador de pacotes]()
[Backend (Nodejs)]()
- [Nodejs]()
- [Yarn]()
- [Express]()
- []()
- []()


[Mobile (React Native)](https://github.com/williamsumida/Semana-OmniStack-8.0#mobile-react-native)
- [Instalação e criação projeto React Native](https://github.com/williamsumida/Semana-OmniStack-8.0#instala%C3%A7%C3%A3o-e-cria%C3%A7%C3%A3o-projeto-react-native)
- [React Navigation](https://github.com/williamsumida/Semana-OmniStack-8.0#react-navigation)
- [React Native Gesture Handler](https://github.com/williamsumida/Semana-OmniStack-8.0#react-native-gesture-handler)
- [React Native Reanimated](https://github.com/williamsumida/Semana-OmniStack-8.0#react-native-reanimated)
- [Axios](https://github.com/williamsumida/Semana-OmniStack-8.0#axios-1)
- [Async Storage](https://github.com/williamsumida/Semana-OmniStack-8.0#async-storage)

___
## Gerenciador de pacotes (Windows)
Chocolatey é um package manager para o Windows.
Instação pelo cmd.exe com permissões de administrador.

```bash
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

___

## Backend (Nodejs)
### NodeJS (Utilizando o Chocolatey)
Instalação do node:
```bash
cinst nodejs.install  --version 10.16.1
```
### yarn
O yarn é um eficiente gerenciador de dependências e pacotes.
Instalação do yarn:
```bash
choco install yarn
```
Criação e inicialização do projeto utilizando o __yarn__:
```bash
mkdir backend
cd backend
yarn init -y
```

### Express
Express é um microframework pro nodejs que auxilia a lidar com rotas (requisições e respostas para o servidor).
```
yarn add express
```

### Nodemon
O Nodemon é uma dependência de desenvolvimento para atualizar todas as mudanças feitas no código mesmo com o servidor rodando.
```bash
yarn add nodemon -D
```

### Axios

Cliente HTTP usado para enviar requisições à API.
```bash
yarn add axios
```

### Execução de comandos
Para rodar o servidor, basta executar o seguinte comando:
```bash
cd backend
node src/server.js
```
Quando o __Nodemon__ estiver instalado, iremos adicionar o objeto `scripts` no arquivo `package.json`:
```javascript
...
  "scripts": {
    "dev": "nodemon src/server.js"
  },
...
```
Agora podemos iniciar o servidor com o seguinte comando:
```bash
yarn dev
```
Com esta alteração, o servidor vai reiniciar automaticamente após qualquer modificação no código.

### Ferramentas de desenvolvimento

#### Insomnia
[Insominia](https://insomnia.rest/) é um programa para cadastrar as rotas da aplicação e fazer requisições à APIs.

#### MongoDB Compass
[MongoDB Compass](https://www.mongodb.com/products/compass)



**Babel**

**Web Pack**
**Criação do Projeto Frontend**
```
yarn create react-app frontend
```

```
yarn add react-router-dom
```

React é compenente, estado e propriedade
___

# Mobile (React Native)

### Instalação e criação projeto React Native

Para instalar o React Native, execute o comando:
```
yarn global add react-native-cli
```

Criação do projeto:
```
react-native init "nome do projeto"
```

### React Navigation
Módulo responsável por realizar a navigação básica.
```
yarn add react-navigation 
```

### React Native Gesture Handler
Dependência do react-navigation utilizada para lidar com os gestos do usuário.
```
yarn add react-native-gesture-handler 
```
Para finalizar a instalação é necessário modificar alguns arquivos de configuração no seguinte diretório: 

>android/app/src/main/java/com/tindev/MainActivity.java

Adicione os seguintes imports:
```
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```
E o seguinte código:
```
@Override
protected ReactActivityDelegate createReactActivityDelegate() {
  return new ReactActivityDelegate(this, getMainComponentName()) {
    @Override
    protected ReactRootView createRootView() {
     return new RNGestureHandlerEnabledRootView(MainActivity.this);
    }
  };
}
```

Resultado da alteração no arquivo MainActivity.java:
```
package com.tindev;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "tindev";
    }

    
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
          return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }
}

```
Como foram feitas algumas alterações nativas, é necessário reinstalar o app no android.
```bash
yarn react-native run-android
```

### React Native Reanimated
Animações de transições de rotas.
```
yarn add react-native-reanimated
```

### Axios
Cliente HTTP usado para enviar requisições à API.
```
yarn add axios
```
No caso do ios, o endereço local configurado no arquivo **src/services/api.js** funcionará sem problemas. Já para o android se conectar corretamente, é necessário colocar o ip da rede local (192.168.x.x) ou forçar o android a utilizar a porta do servidor por meio do seguinte comando:
```
adb reverse tcp:3333 tcp:3333
```

### Async Storage
Async Storage é uma ferramenta que funciona como um local storage da web. Utilizaremos para armazenar informações rápidas que precisamos ter entre as telas da aplicação e quando o usuário abre/fecha o app.
```
yarn add @react-native-community/async-storage
```
Para quem está programando para ios, é necessário ir até a pasta ios e rodar o seguinte comando:
```
pod install
```
E para terminar, rodar o comando run novamente.
```
yarn react-native run-android
            ou
yarn react-native run-ios
```