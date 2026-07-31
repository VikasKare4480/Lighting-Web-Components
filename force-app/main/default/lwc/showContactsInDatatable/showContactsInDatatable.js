import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ShowContactsInDatatableController.getContacts'
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import updateContacts from '@salesforce/apex/ShowContactsInDatatableController.updateContacts';

const COLUMNS = [
    { label: 'Id', fieldName: 'Id', editable : false},
    { label: 'First Name', fieldName: 'FirstName', editable : true},
    { label: 'Last Name', fieldName: 'LastName', editable : true },
    { label: 'Email', fieldName: 'Email', type: 'email', editable : true },
    { label: 'Mobile', fieldName: 'Phone', type: 'phone', editable : true }
];

export default class ShowContactsInDatatable extends LightningElement  {

   contactsToDisplay;
   errors;
   draftValues = [];
   wiredContactsResult;
columns = COLUMNS;

   @wire(getContacts)
   getcontactsData(result){

    const {data, error} = result;
        if(data) {
            this.wiredContactsResult = result;
            this.contactsToDisplay = data;
            this.errors = undefined;
        }
        if(error) {
            this.errors = error;
            this.contactsToDisplay = undefined;
        }
        console.log('this data -->>' + this.contactsToDisplay);
   }

   async handleSave(event) {

        const updatedFields = event.detail.draftValues;
        try {
            await updateContacts({contactsToUpdate : updatedFields});
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contacts updated successfully',
                    variant: 'success'
                })
            );
            this.draftValues = [];
            await refreshApex(this.wiredContactsResult)
        }catch(error) {
            this.dispatchEvent(
                new ShowToastEvent( {
                    title : 'Error Updating contacts',
                    message : error.body ? error.body.message : error.message,
                    varient : 'error'
                })
            );
        }
   }
}