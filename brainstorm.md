# Mini workshop about creating a login component

1. Coming up with list of requirements
2. Choosing tools for the job

Test Driven Development.
3. Write tests based on the requirements
4. Write the code to pass the tests

## Presentation Notes:

Explain that there are speakers coming up which could have conflicting messages and that's ok. There's no one way to solve a problem and it all depends on the situation.
Explain my way of problem solving. We'll be using flowcharts to figure out the requirements for a login.

## Presentation Flow:

Introduce yourself.
This mini workshop is part of a trilogy or potentially series, we'll see how it goes.
Kevin will be presenting UI or functional testing in October.
Nate Barbettini will presenting OAuth2 and OpenID in November.
Today We'll cover my process for solving a coding challenge. It will feel more time consuming but provides a little more assurance in the long run.

## Requirements:

based on: https://www.d.umn.edu/~gshute/cs4531/programming/trivia-4/user-login.xhtml
**Functionality**:
store login data in database
retrieve data from database
validate login data, return pass or fail

**layout**:
provide 2 text fields, login, password
provide registration button
provide login button

**Validation**:
display warning "user name required" if field is left empty
display warning "password required" if field is left empty
display warning "Incorrect user name or password" if invalid user/pass combination

**Accessibility (a11y)**:
https://www.w3.org/WAI/tutorials/forms/
https://cantina.co/form-errors-screen-readers-can-access/
http://webaim.org/techniques/formvalidation/
https://soap.stanford.edu/tips-and-tools/screen-reader-testing
https://addons.mozilla.org/en-US/firefox/addon/claws/ screen reader emulator for firefox

**User Experience (UX)**:
does the cursor auto focus on username on page load?
can you navigate and submit with the keyboard only?
should you keep username on failed attempts?
Is it easy to click on the input fields?
is the intention of the component clear?
are the error messages comprehensive?

a11y and UX go hand in hand. Keeping a11y in mind will improve your UX coverage.

**Security**: Security is in layers. Data is inputted, transmitted and is stored. Each layer has to be scrutinized.
can someone see the credentials when typed in?
can someone sniff the credentials across the wire?
can someone access the credentials where they are stored?
    is the password saved in plain text?
    Is there any way someone can access the database without going through our login?
can someone bypass the login? whatever information is protected by the login, can anyone else access it without being authenticated?

## Choosing Tools:
Looking back to Project management
Figure out project limitations: time, money, personnel (people and skills).

https://www.lullabot.com/articles/choosing-the-right-javascript-framework-for-the-job
https://webdesign.tutsplus.com/tutorials/the-noobs-guide-to-choosing-a-javascript-framework--cms-28538
https://medium.com/@ZombieCodeKill/choosing-a-javascript-framework-535745d0ab90

repaint performance: `Rob says that to be honest all of these frameworks are very fast because 50 frames per second is faster than what we can usually see.` I don't agree, fps is relative and some can notice difference between 120fps and 60fps, however for the most part it is relative and using audio as an analogy, it depends in the chain from the transmitter to the receptor. If you have a lossless audio file with an amazing sound card, it won't sound any good with the $3 earphones you bought at the corner store. The audiophile with $600 earphones may notice the difference of a lossless file but for the average person cd quality is plenty quality enough. Coming back to performance, all these frameworks range from CD quality to 'lossless' when fully optimized possibly in differetn areas so they only make a significant difference when you reach Amazon, Reddit, or Facebook sizes.

back in the day react came out being capable of scroll through lists without lag because it minimized repainting by utilizing the virtual DOM, from what I remember it was much faster than Angular 1. However, nowadays, the best features are becoming ubiquitous because ideas are shared. Virtual DOM exist one way or another in many frameworks as they are released.

### Different framework logins DOM
http://todomvc.com/ This isn't a login, but this shows how little difference there is.
Something to note, Vue has a very clean DOM.

What the team knows best.
What the framework exceeds at.
Mostly it's just team preference.

If you are prototyping, minimize all limitations, identify the fewest requirements that still expresses the idea to the user.

Priorities:
1. Letting the user know what you are trying to do
2. Speed

prototype -> make robust -> optimize

Make Robust: As codebase gets larger, more code organization has to take place. Choose one that balances organization and optimization.
Optimize: By here, I hope you have teams. Each team will focus on what they optimize, maybe you'll have a mix of libraries which use different frameworks or you write your own to cut on those single digit milliseconds.

## Writing Tests:

Many options out there, choose one, stick to it, if missing a test you want to write, research if it's better to find another framework or write a one off test.

We'll use `mochajs`.
Mocha provides the infrastructure to organize tests, it also provides by default Assertions. If you want to do different style of testing you can include other libraries such as `chai`
http://stackabuse.com/testing-node-js-code-with-mocha-and-chai/

We'll create a few simple unit tests for functionality.

- store login data in database
- retrieve data from database
- validate login data, return pass or fail


## Writing code:

Finally we write the code.

Or so I hoped.


----------------------
Mini workshop write a login. However you want/can. While fitting a set criteria. Clean code, identifiable code, positioning of elements that make sense. Have login with password. Show the DOM. Difference of server and client login. Focus on the fact that it is all the same no matter what frame work you use. That choosing a framework depends on what you need. Sometimes you want quickest, sometimes you want lowest footprint.
To-do: write generic test to validate. Write boilerplate which has the login data to be pulled from and what page to redirect to once validated. Write multiple versions ahead of time to be able to reference. See if Kevin's testmylogin works and briefly explain why test. Say it will be another meetup that Kevin will present

