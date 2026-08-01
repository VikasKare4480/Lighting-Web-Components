import { api, LightningElement, track } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api firstName;

    @api
    fooBar() {
        console.log('Boofar Called');
        console.log('firstName : ', this.firstName);
    }

    user = {
        userName : "VikasKare",
        password : "******",
        login : "login.salesforce.com",
        phone : 9370719020,
        countryCode : +91,
    }

    @track
    userNew = {
        userName : "VikasKare",
        password : "******",
        login : "login.salesforce.com",
        phone : 9370719020,
        countryCode : +91
    }

    @api 
    userNewCopy = this.userNew;

    passDataToParent() {

        let customEvent = new CustomEvent("userData", {
            detail : this.userNewCopy
        });
        this.dispatchEvent(customEvent);
        console.log("Event is Dispatched");
    }

    constructor () {
        super();
        console.log('ChildComponent constructor');
    }

    connectedCallback() {
        // this.user.userName = "VikasBhai";
        // this.user.password = "***********"
        // this.userName.userName = "VikasBhai";
        // this.userNew.password = "***********";
        this.passDataToParent();
    }
}