import { LightningElement } from 'lwc';

export default class CreateContactFormAss2 extends LightningElement {

    contact = {};

    handleFirstName(event) {
        this.contact[event.target.name] = event.target.value;
    }

    handleLastName(event) {
        this.contact[event.target.name] = event.target.value;
    }

    handleEmailName(event) {
        this.contact[event.target.name] = event.target.value;
    }

    handlePhoneName(event) {
        this.contact[event.target.name] = event.target.value;
    }

    handTitleName(event) {
        this.contact[event.target.name] = event.target.value;
    }

    handDeptName(event) {
        this.contact[event.target.name] = event.target.value;
    }

    handleCreateContact(event) {
        console.log(JSON.stringify(this.contact));
    }
}