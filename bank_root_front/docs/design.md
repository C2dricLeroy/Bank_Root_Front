# Designing the Bank_root Front

The design of a Front-End Web application goes through certain steps: 

1. analysis of needs and objectives
2. Tools
3. Architecture
4. Wireframes
5. Graphical Design
6. Prototypes
7. Development
8. Deployment
9. Testing


## 1. analysis of needs and objectives 

### Which device ? 
The project should be run on two types of platforms: 
- Desktop navigators
- Mobile navigators

### Responsiveness 
This front-end should be Responsive.

We will not work with Mobile-First methodology. This methodology is known to be the most efficient, but we are not used to using it.

## 2. Tools

For this project, we will use some frameworks: 
- [Angular](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)

Other Useful tools: 
- [Figma](https://www.figma.com/fr/design/)
- [CheckList Design](https://www.checklist.design/)

## 3. Architecture

The web application will be composed of : 
- A homepage with : 
  - A list of all bank accounts
  - A signup button that leads to the registration page
  - A signin button that lead to the signin page
- A login page with : 
  - A login form : 
    - mail button
    - password button
    - Forgotten password
    - Signin button
    - back button && Logo that leads to the homepage
- A registration page with : 
  - A component to upload profile picture (not available with API)
  - Components for:
    - Name
    - LastName
    - Email
    - Address (not available with API)
    - Password (Must be secured)
    - Confirm Password 
    - Date of birth
    - Accept the term of conditions
    - Signup button
  - Back Button && Logo that must lead to the homepage
- A personal space with: 
  - A logo button that leads to the homepage
  - A search bar (not available) 
  - Parameters button (not available)
  - Help Button (not available)
  - Notification button (not available)
  - The user icon (not available with API)
  - Navigation bar to navigate inside personal space
  - List of the last transactions
  - different forms : 
      - An account deletion form
      - A cash withdrawal form
      - A transfer request form
      - A money deposit form
- An admin page with:
  - Logo that leads to homepage
  - A setting icon (disabled)
  - A search bar to navigate through accounts
  - A list of the current requests
    - Management of account opening requests
    - Management of cash withdrawal requests
    - Management of transfer requests
    - Management of the requests of the money deposits
    - Management of credit applications
  - A button to sort accounts
- (Optional): A contact page with:
  - a contact form

## Wireframes

First, I began with Zoning : 

- [Homepage Zoning](./diagrams/zoning/zoning-homepage.png)
- [Homepage Zoning Mobile](./diagrams/zoning/zoning-homepage-mobile.png)
- [Login Zoning](./diagrams/zoning/zoning-login.png)
- [Login Zoning Mobile](./diagrams/zoning/zoning-login-mobile.png)
- [Signup Zoning](./diagrams/zoning/zoning-registration.png)
- [Signup Zoning Mobile](./diagrams/zoning/zoning-registration-mobile.png)
- [Personal Space Zoning](./diagrams/zoning/zoning-personal-space.png)
- [Personal Space Zoning Mobile](./diagrams/zoning/zoning-personal-space-mobile.png)

// TODO : Add Admin zoning

Secondly, I added wireframes : 

- [Homepage wireframe](./diagrams/wireframes/wireframe-homepage.png)
- [Homepage wireframe Mobile part 1](./diagrams/wireframes/wireframe-homepage-mobile-part1.png) [Homepage wireframe Mobile part 2](./diagrams/wireframes/wireframe-homepage-mobile-part2.png)
- [Login wireframe](./diagrams/wireframes/wireframe-login.png)
- [Login wireframe Mobile](./diagrams/wireframes/wireframe-login-mobile.png)
- [Signup wireframe](./diagrams/wireframes/wireframe-registration.png)
- [Signup wireframe Mobile](./diagrams/wireframes/wireframe-registration-mobile.png)
- [Personal Space wireframe](./diagrams/wireframes/wireframe-personal-space.png)
- [Personal Space wireframe Mobile](./diagrams/wireframes/wireframe-personal-space-mobile.png)

// TODO : Add Admin zoning
## Graphical Design

- 


