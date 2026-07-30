Trigger CaseCustomTrigger on Case (before insert, before update, before delete, after insert, after update, after delete, after undelete) {

    if(Trigger.isBefore) {
        CaseHandlerCustom.beforeSave(Trigger.isInsert, Trigger.isUpdate, Trigger.isDelete, Trigger.new, Trigger.old);
    }
    if(Trigger.isAfter) {

        CaseHandlerCustom.afterSave(Trigger.isInsert, Trigger.isUpdate, Trigger.isDelete, Trigger.new, Trigger.old);
    }
}
