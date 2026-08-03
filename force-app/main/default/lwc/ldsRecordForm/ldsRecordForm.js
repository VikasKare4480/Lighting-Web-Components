import { LightningElement, api } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'

export default class LdsRecordForm extends LightningElement {

    @api recordId;
    @api objectApiName;
    fields = [
        {objectApiName : 'Account', fieldApiName : 'Type'},
        {objectApiName : 'Account', fieldApiName : 'Rating'},
        ACCOUNT_NAME,
        ACCOUNT_INDUSTRY
    ]
}