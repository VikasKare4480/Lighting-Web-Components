import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import OBJECT_CASE from '@salesforce/schema/Case'
// import CASE_NUMBER_FIELD from '@salesforce/schema/Case.CaseNumber';
// import STATUS_FIELD from '@salesforce/schema/Case.Status';
// import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
// import ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId';
// import CONTACT_FIELD from '@salesforce/schema/Case.ContactId';
// import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';



export default class ShowCaseDataLWC extends LightningElement { 

    @api recordId;
    // fields = [
    //     CASE_NUMBER_FIELD,
    //     STATUS_FIELD,
    //     PRIORITY_FIELD,
    //     ACCOUNT_FIELD,
    //     CONTACT_FIELD,
    //     DESCRIPTION_FIELD
    // ];

    objectApiName = OBJECT_CASE;

    onSubmit(event) {
        // event.preventDefault();
    }

    onSuccess() {
         this.dispatchEvent(
            new ShowToastEvent({

                title : 'Success',
                message : 'Case Updated Sucessfully',
                variant : 'success'
            })
        );
    }   

    onError(event) {

        const errorMessage = event.target.detail.message || 'An error occurred while updating the case';
        this.dispatchEvent(
            new ShowToastEvent(
                {
                    title : 'Error',
                    message : errorMessage,
                    variant : 'error'
                }
            )
        );
    }
}