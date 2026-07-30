/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 06-13-2026
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/


Trigger ContactTrigger on Contact (Before insert, Before update, Before delete, after insert, after update, after delete, after undelete) {
	
	if(Trigger.IsBefore) {
	
		ContactHandler.postData(Trigger.isInsert, Trigger.isUpdate, Trigger.isDelete, Trigger.new, Trigger.old);
	}
    
	if(Trigger.IsAfter) {
	
		ContactHandler.afterPostData(Trigger.isInsert, Trigger.isUpdate, Trigger.isDelete, Trigger.isUndelete, Trigger.new, Trigger.old);
	}
}