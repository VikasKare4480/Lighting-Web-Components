import { LightningElement, api } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation' // IN CASE OF TAB AND APP PAGE TO GET THE  ALL PAGE DATA
import user from '@salesforce/user/Id'
import isGuestUser from '@salesforce/user/isGuest'

export default class MetadataCofiguration extends LightningElement {

    @api objectApiName; // reads this dynamically by engine
    @api recordId; // lwc engine reads this dynamically
    @api fieldAPIName;
    @api dateOfBirth;
    @api userEmail;
    @api noOfRecord;
    @api selectedRecordId;
    handleClick(event) {
        const element = event.target;
    }
}