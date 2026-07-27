import { LightningElement } from 'lwc';

export default class GrandParentOne extends LightningElement {

    handleChildEvent(event) {
        console.log('Event catched in Grand Parent Component');
        let childCustomEvent = event.detail;
        if(childCustomEvent) {
            console.log(JSON.stringify(childCustomEvent));
            console.log(childCustomEvent.Name);
            console.log(childCustomEvent.Email);
            console.log(childCustomEvent.Age);
        }
    }

    handleParentEvent(event) {
        
        console.log('Event from Parent Catched in GP');
        let eventDetails = event.detail;
        console.log(eventDetails.childCustomEventName);
    }
}