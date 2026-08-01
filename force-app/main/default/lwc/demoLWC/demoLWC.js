import { LightningElement } from 'lwc';
export default class DemoLWC extends LightningElement {
    message = 'Hello World';

    DemoLWC() {
        console.log('DemoLWC constructor called');
    }
    connectedCallback() {
        console.log('connectedCallback called');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback called');
    }

    renderedcallaback() {
        console.log('renderedCallback called');
    }

    errorCallback(error, stack) {
        console.log('errorCallback called');
        console.log('Error: ', error);
        console.log('Stack: ', stack);
    }
}