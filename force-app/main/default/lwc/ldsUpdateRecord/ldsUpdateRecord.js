import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_FIELD_ID from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ACCOUNT_INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_RATING_FIELD from '@salesforce/schema/Account.Rating';
export default class LdsUpdateRecord extends LightningElement {
    @api recordId;
    fieldsData  = {};
    loading = false;
    ratingOptions = [
        {label : 'Hot', value : 'Hot'},
        {label : 'Cold', value : 'Cold'},
        {label : 'Warm', value : 'Warm'}
    ]
    handleChange(event) {
        const {name, value} = event.target; 
        this.fieldsData[name] = value;
    }

    handleAccountUpdate() {

        if(!this.validateInput())  {
            console.log('Please Complete All the required Fields');
            return;
        }
        this.loading = true;
        this.fieldsData['Id'] = this.recordId;
        // this.fieldsData[ACCOUNT_NAME_FIELD.fieldApiName] = 'LDS - UPDATE RECORD';
        // this.fieldsData[ACCOUNT_RATING_FIELD.fieldApiName] = 'Hot';
        let fields = this.fieldsData;
        const recordInput = {
            fields
        }
        try {
            console.log('recordInput '  , JSON.stringify(recordInput));
            updateRecord(recordInput)
            .then( (result) => {
                console.log('result -> ' + JSON.stringify(result));
                this.dispatchEvent( 
                    new ShowToastEvent(
                        {
                            title : 'Sucess',
                            message : 'Record Updated Sucessfully',
                            variant : 'success'
                        }
                    )
                );
            })
            .catch( (error) => {
                this.dispatchEvent(
                    new ShowToastEvent(
                        {
                            title : 'Error',
                            message : 'Error Occured',
                            variant : 'error'
                        }
                    )
                );
            })
            .finally(() => {
                console.log('Finally ');
                this.loading = false;
            })
        }catch(exception) { 
            console.error(exception);
        }
    }

    validateInput() {
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