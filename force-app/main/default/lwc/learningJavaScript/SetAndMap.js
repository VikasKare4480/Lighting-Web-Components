import {LightningElement, api, track, wire} from 'lwc';
import learningJavaScript from 'c/learningJavaScript';

export default class SetMapPractice extends LightningElement {

    connectedCallback() {

        let setOfUsersNames = new Set(); // let is blocked scoped variable, can be reassigned

        // ADDING VALUES TO THE SET USING ADD() METHOD
        setOfUsersNames.add('John Doe');
        setOfUsersNames.add('Jane Smith');
        setOfUsersNames.add('Alice Johnson');
        setOfUsersNames.add('Bob Brown');
        setOfUsersNames.add('Charlie Davis');

        // TO CHECK IF A VALUE EXISTS IN THE SET-- HAS METHOD
        const hasUser = setOfUsersNames.has('Alice Johnson');

        // TO CLEAR ALL THE VALUES OF THE A SET
        var clearSet = setOfUsersNames.clear();

        // TO DELETE THE SPECIFIC VALUE FROM THE SET USING DELETE() METHOD
        setOfUsersNames.delete('Bob Brown');

        // to get the values of the users fro m the set 
        setOfusersNames.values();

        for(const value of setOfUsersNames) {
            console.log(value);
        }
    }
}