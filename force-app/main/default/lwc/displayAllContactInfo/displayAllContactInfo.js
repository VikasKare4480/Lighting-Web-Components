import { LightningElement } from 'lwc';

export default class DisplayAllContactInfo extends LightningElement {

    get getContactJSON() {
        return this.fullContactJSON.records;
    }
    fullContactJSON = {
        "records": [
            {
            "attributes": {
                "type": "Contact",
                "referenceId": "ContactRef1"
            },
            "Id": 1,
            "AccountId": "@AccountRef1",
            "FirstName": "Amy",
            "LastName": "Taylor",
            "Title": "VP of Engineering",
            "Email": "amy@demo.net",
            "Phone": "4152568563",
            "Picture__c": "https://www.salesforceben.com/wp-content/uploads/2023/12/1519743_Graphic3_300DPI_011223-768x432.png"
            },
            {
            "attributes": {
                "type": "Contact",
                "referenceId": "ContactRef2"
            },
            "Id": 2,
            "AccountId": "@AccountRef2",
            "FirstName": "Michael",
            "LastName": "Jones",
            "Title": "VP of Sales",
            "Email": "michael@demo.net",
            "Phone": "4158526633",
            "Picture__c": "https://www.salesforceben.com/wp-content/uploads/2023/12/1519743_Graphic3_300DPI_011223-768x432.png"
            },
            {
            "attributes": {
                "type": "Contact",
                "referenceId": "ContactRef3"
            },
            "Id": 3,
            "AccountId": "@AccountRef1",
            "FirstName": "Jennifer",
            "LastName": "Wu",
            "Title": "CEO",
            "Email": "jennifer@demo.net",
            "Phone": "4158521463",
            "Picture__c": "https://www.salesforceben.com/wp-content/uploads/2023/12/1519743_Graphic11_300DPI_011223-768x432.png"
            },
            {
            "attributes": {
                "type": "Contact",
                "referenceId": "ContactRef4"
            },
            "Id": 4,
            "AccountId": "@AccountRef2",
            "FirstName": "Anup",
            "LastName": "Gupta",
            "Title": "VP of Products",
            "Email": "anup@demo.net",
            "Phone": "4158526398",
            "Picture__c": "https://www.salesforceben.com/wp-content/uploads/2023/12/1519743_Graphic11_300DPI_011223-768x432.png"
            },
            {
            "attributes": {
                "type": "Contact",
                "referenceId": "ContactRef5"
            },
            "Id": 5,
            "AccountId": "@AccountRef1",
            "FirstName": "Caroline",
            "LastName": "Kingsley",
            "Title": "VP of Technology",
            "Email": "caroline@demo.net",
            "Phone": "4158753654",
            "Picture__c": "https://www.salesforceben.com/wp-content/uploads/2023/12/1519743_Graphic11_300DPI_011223-768x432.png"
            },
            {
            "attributes": {
                "type": "Contact",
                "referenceId": "ContactRef6"
            },
            "Id": 6,
            "AccountId": "@AccountRef2",
            "FirstName": "Jonathan",
            "LastName": "Bradley",
            "Title": "VP of Operations",
            "Email": "jonathan@demo.net",
            "Phone": "4158885522",
            "Picture__c": "https://www.salesforceben.com/wp-content/uploads/2023/12/1519743_Graphic3_300DPI_011223-768x432.png"
            }
        ]
    }

    handleContactOnclick(event) {
        const contactId = event.currentTarget.dataset.id;
        console.log(contactId);
        const customEventPassingId = new CustomEvent('contactselect', {
            detail : {
                contactId : contactId
            }
        });
        this.dispatchEvent(customEventPassingId);
    }
}