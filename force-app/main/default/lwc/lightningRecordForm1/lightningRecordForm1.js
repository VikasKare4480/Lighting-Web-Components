import { LightningElement, api } from 'lwc';

export default class LightningRecordForm1 extends LightningElement {

    @api recordId;
    @api objectApiName;

    handleSubmit(event) {
        event.preventDefault();
        console.log('INSIDE onSave');
        let fields = event.detail.fields; // to get all the fields inside an update call
        // fields.parentId = ''; // yo can do the logic on this and then dp update
        fields.Subject = 'SET FROM JS';
        console.log('Fields -> ' + JSON.stringify(fields));
        this.template.querySelector('lightning-record-form').submit(fields);
    }

    handleSuccess(event) {

    }
    handleError(event) {

    }
    handleCancel(event) {

    }
}