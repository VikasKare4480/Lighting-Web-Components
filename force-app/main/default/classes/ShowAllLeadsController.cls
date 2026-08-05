public class ShowAllLeadsController {
    
    @AuraEnabled(cacheable=true)
    public static List<Lead> getAllLeads() {

        List<Lead> allLeads = [SELECT Id, Title, AnnualRevenue, City, Email, Name  
                                FROM Lead 
                                WITH USER_MODE];
        return allLeads;
    }
}