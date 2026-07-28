import { LightningElement } from 'lwc';

export default class ShowAllContactsCombined extends LightningElement {

    selectedContactId;
    handleContactSelection(event) {  
        this.selectedContactId = event.detail.contactId;
        console.log('selectedContactId--> ' + selectedContactId);
    }
}