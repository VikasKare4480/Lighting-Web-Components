import { LightningElement } from 'lwc';

export default class DynamicsFormsLWC extends LightningElement {

    selectedUserType = '';
    userTypeOptions = [
        {label : 'Individual', value : 'Individual'},
        {label : 'Business', value : 'Business'}
    ];

    formData = {};

    get isIndividual() {
        return this.selectedUserType === 'Individual';
    }

    get isBusiness() {
        return this.selectedUserType === 'Business';
    }

    handleChange(event) {
        let element = event.target;
        let value = element.value;
        this.selectedUserType = element.value;
    }

    handleFieldChange(event) {   
        console.log('handleFieldChange called');
        const fieldName = event.target.dataset.field;
        this.formData[fieldName] = event.target.value;
        console.log('Submitted data:', JSON.stringify(this.formData));
    }

    handleSubmit(event) {
        console.log('Submit has clicked');
        console.log('Submitted data:', JSON.stringify(this.formData));
    }
}