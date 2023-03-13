# Angular Basics

This file contains a list of Angular and Front-end basics that every Front-End developer should know. 

1. Components
2. Modules
3. Services
4. Templates
5. Directives
6. Routes
7. Observables
8. Dependency injection
9. Forms
10. Wireframes
11. Mockup

## Components 
### Definition

Angular components are building blocks of an Angular application that encapsulate the functionality, behavior, and presentation of a part of the user interface. 
They consist of a TypeScript class that defines the component's properties and methods, and an HTML template that defines its markup and layout. 
Components can interact with other components and the application's data and services, and they can be reused throughout the application. 
They are responsible for handling user events, responding to changes in the application state, and rendering the UI.

### Example


## Modules
### Definition

Angular modules are containers for a group of related components, directives, services, and other features of an Angular application. 
They provide a way to organize the application into separate functional units with well-defined boundaries and dependencies. 
Modules can be used to group related functionality, such as a feature area or a set of shared services, and can be imported into other modules to reuse functionality across the application. 
They can also be used to encapsulate third-party libraries or other external dependencies. Modules are defined using the @NgModule decorator in TypeScript, which allows you to configure the module's dependencies, declarations, and other properties.

### Example



## Services 
### Definition

Angular services are reusable components that provide functionality to other parts of an Angular application. 
They are used to encapsulate common business logic, data access, or other operations that need to be shared across components or modules. 
Services can be injected into components or other services, allowing them to be used throughout the application in a consistent and modular way. 
They are typically used to manage state, perform data operations, or provide communication with external systems or APIs. Services are defined using the @Injectable decorator in TypeScript, and can be configured with dependencies using the Angular dependency injection system.

### Example



## Templates
### Definition

Angular templates are HTML-based views that are used to define the user interface of an Angular component. 
They consist of HTML markup, which defines the structure of the UI, and embedded Angular expressions and directives, which provide dynamic behavior and data binding. 
Templates allow developers to declaratively define the user interface of an application without having to manually manipulate the DOM or interact with low-level browser APIs. 
They are typically defined using inline HTML within the component's TypeScript file or in an external template file that is referenced by the component. Templates are compiled by Angular at runtime to produce the final HTML that is rendered in the browser.

### Example



## Routes
### Definition

Routes in Angular are used to define how the application should navigate between different views or components based on the current URL or user interactions. 
They allow developers to map URLs to specific components or views in the application, and to define how those components should be rendered or displayed. 
Routes are defined using the RouterModule in Angular, which provides a set of APIs for configuring the application's routing behavior. 
When a user navigates to a specific URL, Angular's router matches the URL to the corresponding route configuration and loads the associated component, rendering it within the application's layout. 
Routes can also be used to pass data between components or to implement authentication and authorization logic.

### Examples 



## Observables 
### Definition

Observables in Angular are a powerful asynchronous programming technique used to handle streams of data or events over time. 
They allow developers to easily manage and manipulate asynchronous data streams, such as HTTP requests or user events, in a reactive and efficient way. 
Observables are defined as sequences of values emitted over time, and can be thought of as streams of data that can be observed and acted upon. 
They provide a wide range of operators for filtering, transforming, and combining data, and can be used with Angular's template syntax to enable dynamic UI updates in real time. 
Observables are a key part of Angular's architecture, and are used extensively throughout the framework for features such as data binding, routing, and HTTP requests.

### Example



## Dependency injection
### Definition

Dependency injection (DI) in Angular is a design pattern used to manage the dependencies of an application by providing objects with their required dependencies instead of requiring them to create their own dependencies. 
It is a mechanism that allows components and services to declare their dependencies in a way that makes them easy to manage, maintain, and test. 
In Angular, DI is implemented using a hierarchical system of injectors that allow objects to request dependencies from their parent or child injectors. 
This makes it easy to share and reuse services across the application, and to decouple components from their dependencies, making them more modular and testable. 
By using DI, Angular promotes loose coupling and separation of concerns, which makes applications easier to develop, maintain, and evolve over time.

### Example

## Forms
### Definition

Forms in Angular are used to capture and validate user input in an Angular application. 
Angular provides a powerful and flexible forms API that allows developers to easily create complex forms with rich user interactions and validation logic. 
Forms can be created using the FormsModule or ReactiveFormsModule modules in Angular, which provide a set of APIs and directives for managing form controls and their state. 
Forms can be used to collect data from users, such as login credentials or search queries, and to provide feedback to users on the validity of their input. Forms can also be used to implement more complex workflows, such as multi-step forms or conditional form fields. 
Angular's forms API supports a wide range of input types, validation rules, and error messages, making it easy to create forms that are accessible, responsive, and easy to use.

### Examples


## Wireframes 

Wireframes are low-fidelity, static representations of a digital product or application that are typically used to plan and design the user interface and user experience (UI/UX) of the product. 
They are usually created at the beginning of the design process, before any code is written, and are used to explore and refine the structure, layout, and functionality of the product. 
Wireframes typically focus on the placement and arrangement of content and functionality, rather than on visual design or branding. They are often created using simple tools such as pen and paper, or digital wireframing software, and can be shared with stakeholders and team members to gather feedback and refine the design. 
Wireframes are an important part of the design process, as they help ensure that the product is well-organized, easy to use, and meets the needs of its users.

## Mockups 

Mockups in design are high-fidelity, visual representations of a digital product or application that are used to illustrate the final look and feel of the product. 
They are typically created after wireframes and other low-fidelity design artifacts, and are used to explore and refine the visual design, branding, and layout of the product. 
Mockups can include detailed graphical elements such as typography, color schemes, images, and other visual elements, and may include placeholders for actual content or data. 
They are often created using design tools such as Adobe Photoshop, Sketch, or Figma, and can be shared with stakeholders and team members for feedback and approval. 
Mockups are an important part of the design process, as they help ensure that the product has a cohesive visual identity, is aesthetically pleasing, and meets the needs and expectations of its users.
