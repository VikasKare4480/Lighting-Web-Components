import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId'
import FIRSTNAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import createAccount from '@salesforce/apex/LdsCreateUiRecordApiController.createAccount'

export default class LdsCreateUiRecordApi extends LightningElement {

    fieldsContact = {};
    fieldsAccount = {};

    handleOnchangeAccount(event) {
        event.preventDefault(); 
        let {name, value} = event.target; 
        this.fieldsAccount[name] = value;
        console.log('fields Account-->> ', JSON.stringify(this.fieldsAccount));
    }

    handleOnchangeContact(event) {
        event.preventDefault(); 
        let {name, value} = event.target; 
        this.fieldsContact[name] = value;
        console.log('fields Contact-->> ', JSON.stringify(this.fieldsContact));
    }

    async handleCreateRecord(event) {
        event.preventDefault();
        let isvalidated = this.handleValidate();
        if(!isvalidated) {
            console.log('Returned From handleValidate');
            return;
        }
        let fields = this.fieldsAccount; // NAME OF THE PARAMETER SHOULD BE SAME - fields 
        const inputRecord = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields
        };

        // await createAccount({accountsToCreate : fields})
        createRecord(inputRecord) // returns the promise
        .then( (result) => {
            console.log(JSON.stringify(result));
            // console.log('Id of the Account -> ' + result.fields.id);
            const accountId = result.id;
            console.log('accountId -> ' + accountId);
            this.createContact(accountId);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
        })
        .finally(() => {
            console.log(
                'finally called'
            );
        });
    }

    createContact(accountId) {
        console.log('createContact called');
        const fields = this.fieldsContact;
        fields[CONTACT_ACCOUNTID_FIELD.fieldApiName] = accountId;
        console.log(' fields -> ' + JSON.stringify(fields));
        const inputRecord = {
            apiName : CONTACT_OBJECT.objectApiName,
            fields
        }
        createRecord(inputRecord)
        .then((result) => {
            console.log('Contact JSON -> ' + JSON.stringify(result));

            console.log('contact id -> ' + result.id);
        })
        .catch((error) => {
            console.log(error);
        })  
        .finally( () => {
            console.log('finally of Contact Creation');
        })
    }

    handleValidate() {

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