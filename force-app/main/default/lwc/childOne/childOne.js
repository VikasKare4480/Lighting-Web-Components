import { LightningElement } from 'lwc';

export default class ChildOne extends LightningElement {
    
    handleFireEvent() {

        let clickEvent = new CustomEvent('success', {
            detail : {
                Name : 'Vikas',
                Age : 24,
                Email : 'vikas@gmail.com',
                UserList : [
                {
                    id: 1,
                    name: "Alex Johnson",
                    email: "alex.j@example.com",
                    role: "Admin",
                    isActive: true
                }
            ]},
            bubbles : true,
            composed : true
        });

        if(true) {
            console.log('Event Dispatched');
        }
        this.dispatchEvent(clickEvent); // THIS WILL BE CAPTURED ON PARENT COMPONENT
       
    }
}