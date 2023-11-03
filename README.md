# Test automation using Playwright + API automation + mocha framework + Allure Report  

# Prerequisites

The first thing we need to do is to setup our environment. So here are some things that you should have to start this project:

VSCode: https://code.visualstudio.com/download </br>
NPM: https://www.npmjs.com/get-npm </br>
NodeJS: https://nodejs.org/en/download

# to install playwright and identify locators using test generator  
1.  sudo npm init playwright
2.  install vs code extenstion - Playwright Test for VSCode
	https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright
3.  Pick locators
    Click the "pick locator" button and hover over the browser to see the locators available. Clicking an element will store it in the locators box in VS Code. Pressing enter will save it to the clip board so you can easily paste it into your code or press the escape key to cancel.
4.  Record new tests
    Record new tests by clicking on the "record tests" button in the testing sidebar. This will open a browser window where you can navigate to a URL and perform actions on the page which will be recorded to a new test file in VS Code.
5.  Record at cursor
    This generates actions into the existing test at the current cursor position. You can run the test, position the cursor at the end of the test and continue generating the test.   	 

# to run playwright scripts 
    add below line in package.json 
	"scripts": {
		"ui-mode": "npx playwright test --ui",
		"show-html-report": "sudo npx playwright show-report"
	}

# Steps to execute the test

1. Checkout the project from git
2. Navigate to the project root directory
3. To install all the project dependencies execute 
    npm install
4. To run the test execute
    sudo npm run ui-mode - to run test in interative mdoe  
    sudo npm run show-html-report - to generate html report 
    
 # Application under test 
   https://bstackdemo.com/ 
   https://demo.nopcommerce.com/

 # Screenshots
[![Test code](https://github.com/alagamai/Playwright-Locators-Demo/blob/master/images/generate-test-code.png)]
[![HTML report](https://github.com/alagamai/Playwright-Locators-Demo/blob/master/images/report.png)]
[![HTML detailed report](https://github.com/alagamai/Playwright-Locators-Demo/blob/master/images/report1.png)]

