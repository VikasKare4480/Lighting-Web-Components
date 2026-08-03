import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'
import CURRENCY_CODE from '@salesforce/i18n/currency'

// IMPORT ACCOUNT OBJECT SCHEMA
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ACCOUNT_INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_RATING_FIELD from '@salesforce/schema/Account.Rating';

// IMPORT CONTACT OBJECT SCHEMA
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class LsdGetRecordUiRecordApi extends LightningElement {

    @api recordId;
    @api objectApiName;
    accountData = '';
    error;

    constructor() {
        super();
        console.log('ACCOUNT_OBJECT--> ' , ACCOUNT_OBJECT);
    }

    @wire(getRecord, { 
        recordId : '$recordId', 
        fields :    [ACCOUNT_NAME_FIELD,
                    ACCOUNT_PHONE_FIELD,
                    ACCOUNT_RATING_FIELD,
                    ACCOUNT_INDUSTRY_FIELD,
                    ACCOUNT_ANNUAL_REVENUE_FIELD]
    })
    accountDatawire({error, data}) {
        if(data) {
            this.accountData = data;
        }
        if(error) {
            this.error = error;
        }
    };
    /*
        Structure of accountData - return 
        accountData = {
            data : ANY[OBJECT, ARRAY, DECIMAL, INTEGER, ]
            error : {
            }
        }
    */

    get getName() {
        return this.accountData.fields.Name.value;
        // return getFieldValue(this.accountData, ACCOUNT_NAME_FIELD);
    }

    get getPhone() {
        return getFieldValue(this.accountData, ACCOUNT_PHONE_FIELD);
    }

    get getannualRevenue() {
        return CURRENCY_CODE + ' ' + getFieldValue(this.accountData, ACCOUNT_ANNUAL_REVENUE_FIELD);
    }
    get getRating() {
        return getFieldValue(this.accountData, ACCOUNT_RATING_FIELD);
    }

    get getIndustry() {
        return getFieldValue(this.accountData, ACCOUNT_INDUSTRY_FIELD);
    }
}   