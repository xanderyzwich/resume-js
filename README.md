# Programmer's Resume

What's the best way to utilize one of those fancy [my name].dev domains?  What about a resume that is entirely rendered from JavaScript data!

The page is auto-generated from `data.js` file and populated to the `index.html` from `script.js`.
The goal of the the script is to be dynamic and uncaring about the design of the data itself.

Feel free to fork this repository and replace the data.js file with your own.  After you fork then you will need to go into settings and change the repository name to match [username].github.io pattern with username being your github username. You will also need to remove CNAME file.

Styling utilizes [Barebones framework](https://acahir.github.io/Barebones/)

## Getting Started

1. Fork this repo
1. run `npm install`. This will install project dependencies.
1. run `npm run dev`. This will run the project and start it at [localhost:1234](http://localhost:1234 "Your dev server").
1. run `npm run build`. This utilizes a script from `package.json` to build the project for deployment.
