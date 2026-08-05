Trigger OpportunityTrigger on Opportunity (after update, after delete) {

    if(Trigger.isAfter) {
        OpportunityHandelerCustom.beforeTrigger(Trigger.isInsert, Trigger.isUpdate, Trigger.isUpdate, Trigger.new, Trigger.old);
    }
}