import { LightningElement } from 'lwc';

export default class HandleCreateAccount extends LightningElement {
    
    options = [
        {label : 'Male', value : 'Male'},
        {label : 'Female', value : 'Female'},
        {label : 'Not Preffred To Say', value : 'NotPrefferedToSay'}
    ]

    salutationOptions = [
        {label : 'Mr.', value : 'Mr.'},
        {label : 'Mrs.', value : 'Mrs.'},
        {label : 'Ms.' , value : 'Ms.'},
        {label : 'Dr.' , value : 'Dr.'},
        {label : 'Prof.', value : 'prof.'}
    ]
    contactRecord = {};

    // FIRST NAME
    handleOnChange(event) {

        let element = event.target;
        let value = element.value;
        let name = element.name;
        this.contactRecord[name] = value;
        console.log(value);
    }

    handleAnchorClick(event) {
        Event.preventDefault();
    }

    handleCombochange(event) {

        let element = event.target;
        console.log(element.name);
        console.log(element.value);
        console.log(JSON.stringify(element)); 
    }

    handleCreateAccout(event) {
        let element = event.target;
        let name = element.name;
        console.log(JSON.stringify(this.contactRecord));
    }
}