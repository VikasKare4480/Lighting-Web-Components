import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import LEAD_NAME_FIELD from '@salesforce/schema/Lead.Name';
import LEAD_EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import LEAD_TITLE_FIELD from '@salesforce/schema/Lead.Title';
import LEAD_PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import LEAD_COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import LEAD_INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry';
import LEAD_ANNUAL_REVENUE_FIELD from '@salesforce/schema/Lead.AnnualRevenue';
import LEAD_SOURCE_FIELD from '@salesforce/schema/Lead.LeadSource';

const FIELDS = [
    LEAD_NAME_FIELD,
    LEAD_EMAIL_FIELD,
    LEAD_TITLE_FIELD,
    LEAD_PHONE_FIELD,
    LEAD_COMPANY_FIELD,
    LEAD_INDUSTRY_FIELD,
    LEAD_ANNUAL_REVENUE_FIELD,
    LEAD_SOURCE_FIELD
];

export default class ShowLeadRecordAssingment extends LightningElement {
    @api recordId;
    leadData;
    error;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wireLeadData({ data, error }) {
        if (data) {
            this.leadData = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.leadData = undefined;
        }
    }

    get name() {
        return getFieldValue(this.leadData, LEAD_NAME_FIELD);
    }
    get email() {
        return getFieldValue(this.leadData, LEAD_EMAIL_FIELD);
    }
    get title() {
        return getFieldValue(this.leadData, LEAD_TITLE_FIELD);
    }
    get phone() {
        return getFieldValue(this.leadData, LEAD_PHONE_FIELD);
    }
    get company() {
        return getFieldValue(this.leadData, LEAD_COMPANY_FIELD);
    }
    get industry() {
        return getFieldValue(this.leadData, LEAD_INDUSTRY_FIELD);
    }
    get annualRevenue() {
        return getFieldValue(this.leadData, LEAD_ANNUAL_REVENUE_FIELD);
    }
    get leadSource() {
        return getFieldValue(this.leadData, LEAD_SOURCE_FIELD);
    }
}

// import { LightningElement, api , wire } from 'lwc';
// import { getRecord, updateRecord, getFieldValue } from 'lightning/uiRecordApi';
// import LEAD_OBJECT from '@salesforce/schema/Lead'
// import LEAD_NAME_FIELD from '@salesforce/schema/Lead.Name'
// import LEAD_EMAIL_FIELD from '@salesforce/schema/Lead.Email'
// import LEAD_TITLE_FIELD from '@salesforce/schema/Lead.Title'
// import LEAD_PHONE_FIELD from '@salesforce/schema/Lead.Phone'
// import LEAD_COMPANY_FIELD from '@salesforce/schema/Lead.Company'
// import LEAD_INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry'
// import LEAD_ANNUAL_REVENUE_FIELD from '@salesforce/schema/Lead.AnnualRevenue'
// import LEAD_SOURCE_FIELD from '@salesforce/schema/Lead.LeadSource'
// import LEAD_ID_FIELD from '@salesforce/schema/Lead.Id'

// FIELDS = [
//             LEAD_ID_FIELD,
//             LEAD_NAME_FIELD,
//             LEAD_EMAIL_FIELD,
//             LEAD_TITLE_FIELD,
//             LEAD_PHONE_FIELD,
//             LEAD_COMPANY_FIELD,
//             LEAD_INDUSTRY_FIELD,
//             LEAD_ANNUAL_REVENUE_FIELD,
//             LEAD_SOURCE_FIELD
//         ];

// export default class ShowLeadRecordAssingment extends LightningElement {

//     @api recordId;
//     leadData;
//     error;

//     @wire(getRecord, {
//         recordId : '$recordId',
//         fields : FIELDS
//     })
//     wireleadData({data, error}) {
//         if(data) {
//             this.leadData = data;
//         }
//         if(error) {
//             this.error = error;
//         }
//     }

//      get name() {
//         return getFieldValue(this.leadData, LEAD_NAME_FIELD);
//     }
//     get email() {
//         return getFieldValue(this.leadData, LEAD_EMAIL_FIELD);
//     }
//     get title() {
//         return getFieldValue(this.leadData, LEAD_TITLE_FIELD);
//     }
//     get phone() {
//         return getFieldValue(this.leadData, LEAD_PHONE_FIELD);
//     }
//     get company() {
//         return getFieldValue(this.leadData, LEAD_COMPANY_FIELD);
//     }
//     get industry() {
//         return getFieldValue(this.leadData, LEAD_INDUSTRY_FIELD);
//     }
//     get annualRevenue() {
//         return getFieldValue(this.leadData, LEAD_ANNUAL_REVENUE_FIELD);
//     }
//     get leadSource() {
//         return getFieldValue(this.leadData, LEAD_SOURCE_FIELD);
//     }
// }