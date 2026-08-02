import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';


export default class LdsCreateUiRecordApi extends LightningElement {

    fieldsContact = {};
    fieldsAccount = {};

    handleOnchangeAccount(event) {
        event.preventDefault(); 
        let {name, value} = event.target; 
        this.fieldsAccount[name] = value;
        // this.fieldsAccount = { ...this.fieldsAccount, [name]: value };
        console.log('fields Account-->> ', JSON.stringify(this.fieldsAccount));
    }

    handleOnchangeContact(event) {
        event.preventDefault(); 
        let {name, value} = event.target; 
        this.fieldsContact[name] = value;
        // this.fieldsAccount = { ...this.fieldsAccount, [name]: value };
        console.log('fields Contact-->> ', JSON.stringify(this.fieldsContact));
    }


    handleCreateRecord(event) {
        event.preventDefault();

        let accountFields = this.fieldsAccount;
       
        const inputRecord = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields: {
                [NAME_FIELD.fieldApiName]: this.fieldsAccount.Name
            }
        };

        createRecord(inputRecord) // returns the promise
        .t
            console.log(JSON.stringify(result));
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
}