import { LightningElement, wire, api } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetObjectInfoApiLWC extends LightningElement {

    @api recordId;
    @api objectApiName;
    objectInfoData;
    objectInfoError;

    @wire(getObjectInfo, {
        objectApiName : '$objectApiName'
    })
    accountsData({error, data}) {

        console.log('objectApiName-> ' + this.objectApiName);
        
        if(data) {
            this.objectInfoData = data;
            this.objectInfoError = undefined;
        }
        if(error) {
            this.objectInfoData = undefined;
            this.objectInfoError = error;
        }
    }
}