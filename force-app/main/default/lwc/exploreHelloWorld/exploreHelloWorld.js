import { api, LightningElement, wire, track } from 'lwc';
import stringManupulation from './stringManupulation';
import doMultiplication from './doMultiplication';
import getContactsData from '@salesforce/apex/ExploreHelloWorldController.getContactsData';
export default class ExploreHelloWorld extends LightningElement {

    @api componentTitle;

    firstName = 'Krishna';
    lastName = 'Kare';
    table = true;
    data;
    error;
    
    constructor() {
        super();
        console.log('helloooooooooooooooooo');
        let getstringManupulation = stringManupulation();
        let getMultiplicationResult = doMultiplication(10, 20);
        console.log('getstringManupulation- : ', getstringManupulation);
        console.log('getMultiplicationResult : ' + getMultiplicationResult);
    }

    @wire(getContactsData)
    getContactData({error, data}) {
        if(data) {
            this.data = data;
        }
        if(error) {
            this.error = error;
        }
    }

     // set setFistName(firstName) {
    //     this.firstName = firstName;
    // }

    // set setLastName(lastName) {
    //     this.lastName = lastName;
    // }

    // get getFistName() {
    //     return this.firstName;
    // }
    // get getLastName() {
    //     return this.lastName;
    // }

}