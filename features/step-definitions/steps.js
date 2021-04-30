import { Given, When, Then } from '@cucumber/cucumber';

import SignupPage from '../pageobjects/signup.page';


Given("I am on Parabank sign up page", () => {
    browser.url("https://parabank.parasoft.com/parabank/register.htm")
});

When(/^I signup with valid information:$/, (data) => {
    const hashes = data.hashes();
    hashes.forEach((row) => {
        SignupPage.signUp(row);
    });
});

When(/^I signup with information:$/, (data) => {
    const hashes = data.hashes();
    hashes.forEach((row) => {
        SignupPage.signUp(row);
    });
});

Then(/^I get a successfully register message "(.*)"$/, (successMessage) => {
    SignupPage.successfulSignUp(successMessage);
});

Then(/^I get an error message "(.*)"$/, (failureMessage) => {
    SignupPage.failedSignUpExistingUser(failureMessage);
});

Then("I get an error messages for all fields", () => {
    SignupPage.failedSignUpMissingData();
});



