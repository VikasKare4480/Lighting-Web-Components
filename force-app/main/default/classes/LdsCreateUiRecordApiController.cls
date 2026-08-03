public with sharing class LdsCreateUiRecordApiController {

    @AuraEnabled
    public static void createAccount(Account accountsToCreate) {

        System.debug('createAccount started');
        try {
            insert accountsToCreate;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}