---

# The Process of Creating a Login Component
Daniel Chen

---

- Originally Biology major
- Almost 2 years in tech industry
- Help organize HCJS

---
- Kevin Lamping - Testing Login, October 18th, 2017
- Nate Barbettini - OAuth2 and OpenID in Simple English, November 15th, 2017
---

# Process of solving a coding challenge
seems time consuming, but provides more robustness in the long run

---
# Outline

1. Coming up with the list of requirements
2. Choosing the framework for the job
3. Write test based on the requirements
4. Write the production code
---
# Requirements

- Functionality
- Layout
- Validation
- Accessibility (a11y)
- User Experience (UX)
    - a11y and UX go hand in hand. Keeping a11y in mind will improve your UX coverage.
- Security
---
**Requirements external resources**
- [UMN homework trivia-4](https://www.d.umn.edu/~gshute/cs4531/programming/trivia-4/user-login.xhtml)

**a11y**:
- [w3.org forms](https://www.w3.org/WAI/tutorials/forms/)
- [cantina.co form errors screen readers can access](https://cantina.co/form-errors-screen-readers-can-access/)
- [webaim.org form validation](http://webaim.org/techniques/formvalidation/)
- [Stanford screen reader testing](https://soap.stanford.edu/tips-and-tools/screen-reader-testing)
- [Claws Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/claws/) screen reader emulator for firefox
---
## Choosing Tools
Figure out project limitations:
    - time
    - money
    - personnel (people and skills)
External Resources:
- [lullabot](https://www.lullabot.com/articles/choosing-the-right-javascript-framework-for-the-job)  
- [tutsplus](https://webdesign.tutsplus.com/tutorials/the-noobs-guide-to-choosing-a-javascript-framework--cms-28538)  
- [@ZombieCodeKill](https://medium.com/@ZombieCodeKill/choosing-a-javascript-framework-535745d0ab90)
---
## Framework difference at the DOM (Document Object Model)
[ToDoMVC](http://todomvc.com/)
---
Angular 1 vs React Network Speed
![angular-react](pitchme-img/angular-react-network.png)
---
Vue vs Vanilla Network Speed
![vue-vanilla](pitchme-img/vue-vanilla-network.png)
---
Angular 1 vs React DOM
![angular-react](pitchme-img/angular-react-elements.png)
---
Vue vs Vanilla DOM
![vue-vanilla](pitchme-img/vue-vanilla-elements.png)
---
## Criterias I would consider

- What the team knows best
- What the framework exceeds at if you only need that particular feature
- Really, mostly just team preference
---
## Iterate

prototype -> make robust -> optimize
---
## Prototyping
- Minimize all resources
- Identify the fewest requirements that expresses the idea to the user

## Make robust
- Focus on adding necessary features per user request and code organization

## Optimize
- Focus on code organization and optimization.
---
## Writing Tests
Many options out there, just choose one. Most are able to do what you need or can use plugins.

`mochajs`
---
## Unit/Functional tests
- store login data in database
- retrieve data from database
- validate login data, return pass or fail
---
## Writing code (Finally!)
---
Or so I hoped...
---
## 01 - how naive
---
- How do I use sqlite3 with node?

Note:
Realization that I don't know how to do things.
---
- how do I use sqlite3 with node?

Go through documentation and StackOverflow

[01- the database](https://github.com/danielim/login-talk/tree/master/01)

Note:
open db.js
Wrote code before test because tutorials show code. Tried to get it working before I tested it.
open db.test.js
---
## 02 - How do I test the code instead of testing the test?
---
Modules
---
## 03 - Oh, I forgot to validate users

- added those functions
- cleaned up db.serialize() where not needed
- made `'` into `"`
---
## main - How do I unit test express? HTTP requests

Note:
In an ideal world, the 4 steps would be all you need. Technical debt and other constraints cause you to shift from your ideal process. Be accepting of changes in the process as long as they don't hinder other teammates. Otherwise make sure to communicate these changes.
---
How do you test validating a user on submit if the database is unpopulated?
---
The front-end login component is HTML only. I'll add other frameworks to the mix as this project matures. You are more than welcome to contribute to examples that can use this backend.
---
**Contact:**
    Twitter: @imdanielch
    LinkedIn: https://www.linkedin.com/in/imdanielch
    GitHub: https://github.com/danielim/
---
# Questions?
---
