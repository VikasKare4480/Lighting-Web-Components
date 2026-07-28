import { LightningElement } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'

export default class LdsRecordForm extends LightningElement {

    fields = [
        {objectApiName : 'Account', fieldApiName : 'Type'},
        {objectApiName : 'Account', fieldApiName : 'Rating'},
        ACCOUNT_NAME,
        ACCOUNT_INDUSTRY
    ]
}