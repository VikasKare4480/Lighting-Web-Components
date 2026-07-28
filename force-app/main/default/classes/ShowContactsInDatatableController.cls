/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 07-28-2026
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class ShowContactsInDatatableController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [
            SELECT Id, FirstName, LastName, Email, Phone
            FROM Contact
            ORDER BY LastName ASC
            LIMIT 50
        ];
    }
    @AuraEnabled
    public static void updateContacts(List<Contact> contactsToUpdate) {
        try {
            update contactsToUpdate;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}