import { LightningElement, api, wire, track } from 'lwc';
import getAccountContacts from '@salesforce/apex/ShowRelatedContactsController.getAccountContacts';
import getOpportunities from '@salesforce/apex/ShowRelatedContactsController.getOpportunities'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'

const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text' },
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

const COLUMNS_OPP = [
    {},
];

export default class ShowRelatedContacts extends LightningElement {

    @api recordId;
    contacts;
    errors;
    columns = COLUMNS;
    opportunityData;
    opportunityErrors;

    connectedCallback() {
        console.log('recordId : ' + this.recordId);
    }

    @wire(getAccountContacts, {accountId : '$recordId'})
    getWiredRecord({error, data}) {

        console.log('Data ', data);
        console.log('Error ' + error);
        if(data) { 
            this.contacts = data;
            this.errors = undefined;
        }
        if(error) {
            this.contacts = undefined;
            this.errors = error;
        } 
    }


    @wire(getOpportunities, {accountId : '$recordId'})
    getWireOpportunities({error, data}) {

        if(error) {
            this.opportunityErrors = error;
            this.opportunityData = undefined
        }
        if(data) {
            this.opportunityData = data;
            this.opportunityErrors = undefined;
        }
    }
}