# DocuWare REST API Sample
This example is written by DocuWare. Feel free to fork and play around.
__We do not recommend__ to use this example for __productive__ purposes.
It's more like to show a possible way to use our DocuWare
REST API.

_Project was created with DocuWare 7.1_

## Prerequisites
Be familiar with Nodejs, Typescript and Promises:
- [Nodejs](https://nodejs.org/en/about/)
- [Typescript Tooling in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)
- [Promises](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)

We've developed this project with [Visual Studio Code](https://code.visualstudio.com/).

## Project structure

Startup: index.ts
Javascript output dir: ./dist
[The REST Wrapper class](./docs/modules/restwrapper.md)

### Custom typescript definition files
- ["types/DW_Rest.d"](./docs/modules/types_dw_rest.md)
  Wrappes the REST Schema here, so you can work with interfaces in code
- ["types/DW_Request_Promise_Extension.d"](./docs/modules/types_dw_request_promise_extension.md)
Just a helper to work with node module 'request-promise'
- ["types/timespan.d"](./docs/modules/types_timespan.md)
  Definition for module 'timespan' so you can work better in typescript

## How to start
1. Install node packages (run 'npm install')
2. Take a look in ["index.ts"](./src/index.ts) and [restWrapper.ts](./docs/classes/restwrapper.restcallwrapper.md)
3. Change credentials, organization and root URL
4. Play around, find the functions you need
5. Compile the code so it can be run (`npm run tsc`)
6. Run the code (`npm run start`)
7. In case of changing code, do not forget to rerun typescript compile(manually or by watcher)

## Typedoc project reference documentation

[Project References](./docs/README.md)

## More information
Feel free and take also a look on https://developer.docuware.com
