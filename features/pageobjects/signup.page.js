import Page from './page';


class SignupPage extends Page {

    get inputSignupFirstName(){
        return $(`//*[@id="customer.firstName"]`)
    }

    get inputSignupLastName(){
        return $('//*[@id="customer.lastName"]')
    }

    get inputSignupAddress(){
        return $('//*[@id="customer.address.street"]')
    }

    get inputSignupCity(){
        return $('//*[@id="customer.address.city"]')
    }

    get inputSignupState(){
        return $('//*[@id="customer.address.state"]')
    }

    get inputSignupZip(){
        return $('//*[@id="customer.address.zipCode"]')
    }

    get inputSignupPhoneNumber(){
        return $('//*[@id="customer.phoneNumber"]')
    }

    get inputSignupSsn(){
        return $('//*[@id="customer.ssn"]')
    }

    get inputSignupUsername(){
        return $('//*[@id="customer.username"]')
    }

    get inputSignupPassword(){
        return $('//*[@id="customer.password"]')
    }

    get inputSignupConfirmPassword(){
        return $('#repeatedPassword')
    }

    get inputButtonRegister(){
        return $('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input')
    }

    get labelSuccessMessage(){
        return $('//*[@id="rightPanel"]/p')
    }

    get labelFirstnameError(){
        return $('//*[@id="customer.firstName.errors"]')
    }

    get labelLastnameError(){
        return $('//*[@id="customer.lastName.errors"]')
    }

    get labelAddressError(){
        return $('//*[@id="customer.address.street.errors"]')
    }

    get labelCityError(){
        return $('//*[@id="customer.address.city.errors"]')
    }

    get labelStateError(){
        return $('//*[@id="customer.address.state.errors"]')
    }

    get labelZipError(){
        return $('//*[@id="customer.address.zipCode.errors"]')
    }

    get labelSsnError(){
        return $('//*[@id="customer.ssn.errors"]')
    }

    get labelUsernameError(){
        return $('//*[@id="customer.username.errors"]')
    }

    get labelPasswordError(){
        return $('//*[@id="customer.password.errors"]')
    }

    get labelConfirmedPasswordError(){
        return $('//*[@id="repeatedPassword.errors"]')
    }

    signUp(data) {
        this.inputSignupFirstName.setValue(data.first_name);
        this.inputSignupLastName.setValue(data.last_name);
        this.inputSignupAddress.setValue(data.address);
        this.inputSignupCity.setValue(data.city);
        this.inputSignupState.setValue(data.state);
        this.inputSignupZip.setValue(data.zip);
        this.inputSignupPhoneNumber.setValue(data.phone_number);
        this.inputSignupSsn.setValue(data.ssn);
        this.inputSignupUsername.setValue(data.username);
        this.inputSignupPassword.setValue(data.password);
        this.inputSignupConfirmPassword.setValue(data.confirm_password);
        this.inputButtonRegister.click()        
    }

    successfulSignUp(successMessage){
        const labelSuccessMessage = this.labelSuccessMessage
        expect(labelSuccessMessage).toHaveText(successMessage)
    }

    failedSignUpExistingUser(failureMessage){
        const labelUsernameError = this.labelUsernameError
        expect(labelUsernameError).toHaveText(failureMessage)
    }

    failedSignUpMissingData(){

        const labelFirstnameError = this.labelFirstnameError
        expect(labelFirstnameError).toHaveText("First name is required.")

        const labelLastnameError = this.labelLastnameError
        expect(labelLastnameError).toHaveText("Last name is required.")

        const labelAddressError = this.labelAddressError
        expect(labelAddressError).toHaveText("Address is required.")

        const labelCityError = this.labelCityError
        expect(labelCityError).toHaveText("City is required.")

        const labelStateError = this.labelStateError
        expect(labelStateError).toHaveText("State is required.")

        const labelZipError = this.labelZipError
        expect(labelZipError).toHaveText("Zip Code is required.")

        const labelSsnError = this.labelSsnError
        expect(labelSsnError).toHaveText("Social Security Number is required.")

        const labelUsernameError = this.labelUsernameError
        expect(labelUsernameError).toHaveText("Username is required.")

        const labelPasswordError = this.labelPasswordError
        expect(labelPasswordError).toHaveText("Password is required.")

        const labelConfirmedPasswordError = this.labelConfirmedPasswordError
        expect(labelConfirmedPasswordError).toHaveText("Password confirmation is required.")
    }

    failedSignUpPasswordDontMatch(failureMessage){
        const labelConfirmedPasswordError = this.labelConfirmedPasswordError
        expect(labelConfirmedPasswordError).toHaveText(failureMessage)
    }
    
}

export default new SignupPage();
