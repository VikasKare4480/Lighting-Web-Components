public with sharing class OpportunityHandelerCustom {

    public static void beforeTrigger(Boolean isInsert, Boolean isUpdate, Boolean isDelete, List<Opportunity> newEntries, List<Opportunity> oldEntries) {

        if(isUpdate) {
            updateTotalCountOnAccount();
        }
    }
}