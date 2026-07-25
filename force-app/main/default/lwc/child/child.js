import { LightningElement, track, api } from 'lwc';

export default class Child extends LightningElement {

    name = 'Vikas Kare';
    @track userList = [];

    @api get setUserList() {
        return this.userList;
    }

    // THIS WILL BE CALLED ONCE PARENT WILL SEND THE DATA TO CHILD
    set setUserList(userList) {
        console.log('set user list called');
        console.log(JSON.stringify(userList));
        this.userList = userList || [];
    }

    // CALLING THE METHOD FROM PARENT(MUST NOT USE THE ARROW METHODS) 
    @api
    callChildMethod(para1, para2) {
        console.log('Method was called from parent');
        console.log(para1);
        console.log(para2);
    }
}