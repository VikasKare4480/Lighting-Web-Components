import { LightningElement, api } from 'lwc';

export default class DynamicForms extends LightningElement {

    @api recordId;
    formAButtomClicked = false
    handleFormAToggle() {

        formAButtomClicked = true;
        console.log('Form A Botton has been clicked');
    }
}