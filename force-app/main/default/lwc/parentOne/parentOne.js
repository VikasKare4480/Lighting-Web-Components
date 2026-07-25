import { LightningElement } from 'lwc';

export default class ParentOne extends LightningElement {

    handleChildEvent(event) {
        console.log('Event is handeled');
        alert('Event is Captured');
        let childCustomEvent = event.detail;
        console.log(JSON.stringify(childCustomEvent));
        console.log(childCustomEvent.Name);
    }
}