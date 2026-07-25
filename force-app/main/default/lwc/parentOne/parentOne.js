import { LightningElement } from 'lwc';

export default class ParentOne extends LightningElement {

    handleChildEvent() {
        console.log('Event is handeled');
        alert('Event is Captured');
    }
}