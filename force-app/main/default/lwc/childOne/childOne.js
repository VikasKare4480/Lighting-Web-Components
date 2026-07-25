import { LightningElement } from 'lwc';

export default class ChildOne extends LightningElement {

    handleFireEvent() {

        let firstCustomEvent = new CustomEvent('FirstEvent'); // bubbles : false and cacelable : false
        this.dispatchEvent(firstCustomEvent); // THIS WILL BE CAPTURED ON PARENT COMPONENT
    }
}