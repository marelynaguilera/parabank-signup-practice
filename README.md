# parabank-signup-practice
This is a demo to automate test to sign up at Parabank build in webdriverIO using Cucumber and Javascript. I outline 4 tests cases:
- Successful sign up when user provides valid information.
- Failed sign up when passwords don't match.
- Failed sign up when information isn't provided.
- Failed sign up for existing users.

##Prerequisites
This project requires to Install Java, node and npm.

##Setup
Clone the git repo `git clone git@github.com:marelynaguilera/parabank-signup-practice.git`
Go to folder `parabank-signup-practice`
Run `npm install`

##Run tests
`npx wdio run wdio.conf.js`
