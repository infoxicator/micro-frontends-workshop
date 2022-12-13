<div>
  <h1 align="center">Micro-Frontends with Module Federation and React Router 6</a></h1>
  <strong>
   This workshop is a hands-on training session that will guide you through the features of a Micro-Frontend architecture using React Router 6 and Module Federation.
  </strong>
</div>

## System Requirements

- [git](https://git-scm.com/)
- [NodeJS](https://nodejs.org) `14 || 15 || 16 || 18`
- [npm](https://www.npmjs.com/)

## Getting Started

1. Clone the repository

   ```sh
   git clone https://github.com/infoxicator/micro-frontends-workshop.git
   ```
2. Select a lesson

   ```sh
   cd micro-frontends-workshop/module-federation-basics
   ```
3. Install dependencies

   ```sh
   cd host && npm install
   cd ../products && npm install
   cd ../cart && npm install
 ```
4. Start the application

   ```sh
   cd host && npm start
   cd ../products && npm start
   cd ../cart && npm start
   ```
5. Open the application in your browser on http://localhost:8080

## Lessons

- [Module Federation Basics](./src/module-federation-basics/module-federation-basics.md)
- [React Router 6](./src/react-router-mfe/react-router-6-mfe.md)
- [State and Communication](./src/state-and-communication/state-and-communication.md)

