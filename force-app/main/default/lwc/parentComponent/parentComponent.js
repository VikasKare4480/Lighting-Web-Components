import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    childEventData;
    handleClickMe() {

        console.log('click me called');
        let data = this.template.querySelector('c-child-component');
        if(data) {
            data.fooBar();
        }
    }

    receiveChildDispathcedData(event) {

        this.childEventData = event.detail;
        console.log('Data received from child component successfully!');
        console.log('Received Username: ', this.childEventData.userName);
        console.log('Received Phone: ', this.childEventData.phone);
    }
}