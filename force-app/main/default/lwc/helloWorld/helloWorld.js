import { LightningElement, wire } from 'lwc';
import getAllContacts from '@salesforce/apex/HelloWorldController.getAllContacts'

export default class HelloWorld extends LightningElement {

    showIndianFlag = false;
    showRussianFlag = false;   
    showAmericanFlag = false;
    allContacts;
    contactErrors;
    salutationOptions = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Prof.', value: 'Prof.' }
    ];

    allUsers = [
        {
            Name : 'Vikas Kare',
            Email : 'karevikas7777@gmail.com'
        },
        {
            Name : 'Admin User',
            Email : 'admin@gmail.com'
        },
        {
            Name : 'Integration User',
            Email : 'integration@gmail.com'
        }
    ]

    systemUserData = [
        {
            Name : 'First User',
            Email : 'first@gmail.com',
            gender : 'Male'
        },
        {
            Name : 'Second User',
            Email : 'second@gmail.com',
            gender : 'Female'
        },
        {
            Name : 'Last User',
            Email : 'last@gmail.com',
            gender : 'Female'
        }
    ]

    @wire(getAllContacts)
    contacts({error, data}) {
        if(data) {
            this.allContacts = data;
            this.contactErrors = undefined;
        }else if(error) {
            this.contactErrors = error;
            this.allContacts = undefined;
        }
    }

    handleIndianFlag() {
        console.log('handleIndianFlag Clicked');
        if(this.showIndianFlag) {
            this.showIndianFlag = false;
        }else {
             this.showIndianFlag = true;
        }
    }


    handleRussianFlag() {
        console.log('handleRussianFlag Clicked');
        if(this.showRussianFlag) {
            this.showRussianFlag = false;
        }else {
             this.showRussianFlag = true;
        }
    }

    handleAmericanFlag() {
         console.log('handleAmericanFlag Clicked');
        if(this.showAmericanFlag) {
            this.showAmericanFlag = false;
        }else {
             this.showAmericanFlag = true;
        }
    }
}