This is the design for **Microservices Pattern**
  - Backend:
    - OrderService: c# .Net Core
    - CustomerEShop: c# .Net Core
  - Frontend:
    - eShopFrontEndSPA: Angular 16 


**Eshop** provides: 
 1. register form
 1. login form
 1. products display
 1. order plcement UI
 1. login token saved in localStorage

**Technology** I used:
 - Angular 16, reactive form, service resource, angualr guards
 - deployed on Azure Static App 

How to first update Frontend source code:
1. use Azure CICD
1. update yml file

How to connect 2 components in angular:
- shoppingCartList as the example
  1. create a cartService
  1. dependency injection in componentA constructor
  1. dependency injection in componentB constructor
  1. subscribe all necessary (variables) cartList or grandTotal changes in componentA and B


Docker command to first upload to Azure Static App: 
- **TURN OFF** dev mode
- $ docker build -t feb2024acr.azurecr.io/productapi:latest -f ./Product.API/Dockerfile . --platform linux/amd64 
- $ az login
- $ az acr login --name [myregistry.azurecr.io]
- $ turn on Azure container registry admin access
- $ docker login [myregistry.azurecr.io]
- $ docker push [myregistry].azurecr.io/[imagename]:latest




# Eshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
