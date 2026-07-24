import { LightningElement , api, track} from 'lwc';

export default class GettersAndSetters extends LightningElement {

    @track userList = [
        {Name : 'Vikas Kare', Email : 'karevikas777@gmail.com', Age : 24}
    ];

    @api get getUsers() {
        return this.userList;
    }
    
    set setUserList(userList) {
        this.userList = userList;
    }

    name = 'Vikas Kare';
    @api get getName() {
        return this.name;
    }
    
    set setName(name) {
        this.name = name;
    }

    handleOnClick(event) {   
        event.preventDefault();
        this.name = 'Laxman Kare';
    }
}