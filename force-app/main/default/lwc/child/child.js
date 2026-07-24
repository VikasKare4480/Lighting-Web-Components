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

    handleOnClick(event) {
        event.preventDefault();
        this.name   = 'Laxman Kare';
    }
}