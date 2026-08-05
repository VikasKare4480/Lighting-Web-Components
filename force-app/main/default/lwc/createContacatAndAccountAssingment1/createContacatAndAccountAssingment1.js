import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId'

export default class createContacatAndAccountAssingment1 extends LightningElement {

    accountInputData = {};
    contactInputData = {};

    handleAccountInput(event) {
        const {name, value} = event.target;
        this.accountInputData[name] = value;
    }

    handleContactInput(event) {
        const {name, value} = event.target;
        this.contactInputData[name] = value;
    }

    handleCreateAccount(event) {    

        let validate = this.validateForm();

        if(!validate) {
            console.log('Please Enter all the  fields')
            return;
        }

        console.log('accountInputData : ' , JSON.stringify(this.accountInputData));
        console.log('contactInputData : ' , JSON.stringify(this.contactInputData));

        const fields = this.accountInputData;
        const inputRecord = {apiName : ACCOUNT_OBJECT.objectApiName, fields}

        createRecord(inputRecord)
        .then( (result) => {
            console.log('result Account: ' , JSON.stringify(result))
            console.log('Account Id : ', result.id);
            this.showToastEvent('Success', 'Account Created Sucessfully', 'success');
            this.createContact(result.id);
        }) 
        .catch( (error) => {
            console.error(error);
            this.showToastEvent('Error', 'Error During Account Creation', 'error');
        })
        .finally( () => {
            console.log('Finally Account Creation')
        }); 
    }

    createContact(accountId) {

        if(accountId) {
            const fields = this.contactInputData;
            fields[CONTACT_ACCOUNTID_FIELD.fieldApiName] = accountId;
            const inputRecord  = {
                apiName : CONTACT_OBJECT.objectApiName,
                fields
            }
            createRecord(inputRecord)
            .then( (result) => {
                console.log('result Contact : ' , JSON.stringify(result))
                this.showToastEvent('Success', 'Contact Created Sucessfully', 'success');
                console.log('Contact Id : ', result.id);
            })
            .catch( (error) => {
                console.error(error);
                this.showToastEvent('Error', 'Error During Contact Creation', 'error');
            })
            .finally( () => {
                console.log('Finally Contact Creation')
            }); 
        }
    }

    showToastEvent(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent(
                {
                    title : title,
                    message : message,
                    variant : variant
                }
            )
        );
    }

    validateForm() {

        const allValid = [...this.template.querySelectorAll("lightning-input")].reduce(
        (validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        },
        true,
        );
        return allValid;
    }
}   

