/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 06-17-2026
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
trigger ExceptionLogEventTrigger on ExceptionLogEvent__e (after insert) {
    
    List<ExceptionLog__c> logsToInsert = new List<ExceptionLog__c>();

    System.debug('Received ' + Trigger.new.size() + ' exception log events.');  
    for (ExceptionLogEvent__e event : Trigger.new) {
        ExceptionLog__c logEntry = new ExceptionLog__c();
        logEntry.ClassName__c = event.ClassName__c;
        logEntry.MethodName__c = event.MethodName__c;
        logEntry.ExceptionMessage__c = event.ExceptionMessage__c;
        logEntry.StackTrace__c = event.StackTrace__c;
        logEntry.userId__c = event.userId__c;
        logEntry.TransactionId__c = event.TransactionId__c;
        logEntry.CPUTime__c = event.CPUTime__c;
        logEntry.QueryLimit__c = event.QueryLimit__c;
        logEntry.DMLStatements__c = event.DMLStatements__c;
        logsToInsert.add(logEntry);
    }
    if (!logsToInsert.isEmpty()) {
        insert logsToInsert;
    }
}