import { LightningElement } from 'lwc';

export default class ChildOne extends LightningElement {

    handleFireEvent() {

        let clickEvent = new CustomEvent('click', {
            detail : {
                Name : 'Vikas'
            }
        });
        this.dispatchEvent(clickEvent); // THIS WILL BE CAPTURED ON PARENT COMPONENT
    }
}