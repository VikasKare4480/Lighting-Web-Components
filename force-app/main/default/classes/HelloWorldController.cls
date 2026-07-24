/**
 * @description       : CONTAINS THE DATA FOR THE HELLO WORLD CONMPONENT
 * @author            : VIKAS KARE
 * @last modified on  : 07-23-2026
**/
public with sharing class HelloWorldController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllContacts() {

        return [SELECT ID, Name, FirstName, LastName, Email 
                FROM Contact
                WITH USER_MODE];
    }
}