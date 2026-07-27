import { LightningElement } from 'lwc';

export default class ParentOne extends LightningElement {

    handleChildEvent(event) {
        console.log('Event catched in Parent Component');
        let childCustomEvent = event.detail;
        if(childCustomEvent) {
            console.log(JSON.stringify(childCustomEvent));
            console.log(childCustomEvent.Name);
            console.log(childCustomEvent.Email);
            console.log(childCustomEvent.Age);
        }

        let patentCustomEvent = new CustomEvent('parentevent',{
            detail : {
                childCustomEventName : childCustomEvent.Name
            }, 
            bubbles : true,
            composed : false
        });
        this.dispatchEvent(patentCustomEvent);
    }
}