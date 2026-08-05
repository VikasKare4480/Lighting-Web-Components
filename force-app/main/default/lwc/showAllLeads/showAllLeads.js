import { LightningElement, wire } from 'lwc';
import getAllLeads from '@salesforce/apex/ShowAllLeadsController.getAllLeads'

export default class ShowAllLeads extends LightningElement {
    leadData;
    @wire(getAllLeads)
    allLeadsMethod({data, error}) {

        if(data) {
            this.leadData = data;
        }

        if(error) {
            console.error(error);
        }
    }
}