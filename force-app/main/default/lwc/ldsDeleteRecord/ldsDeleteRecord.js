import { LightningElement, api} from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LdsDeleteRecord extends LightningElement {

    @api recordId;
    handleRecordDelete(event) {  
        deleteRecord(this.recordId)
        .then( (response) => {
            console.log('response -> ' + JSON.stringify(response));
            this.showToast('Success ', 'Record Deleted Successfully', 'success')    
        }) 
        .catch( (error) => {
            this.showToast('Error', 'Please Check Related Records', 'error')    
        })
        .finally( () => {
            console.log('Finally Called');
        }); 
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant
            })
        );
    }
}