public class CaseHandlerCustom {

    public static void beforeSave(Boolean isInsert, Boolean isUpdate, Boolean isDelete, List<Case> newEntries, List<Case> oldEntries) {

        if(isInsert) {
            
            System.debug('Hey');
        }  
        if(isUpdate) {
            System.debug('Hey');
            
        }
        if(isDelete) {
            System.debug('Hey');

        }
    }

    public static void afterSave(Boolean isInsert, Boolean isUpdate, Boolean isDelete, List<Case> newEntries, List<Case> oldEntries) {

        if(isInsert) {
            System.debug('Hey');

        }
        if(isUpdate) {
            System.debug('Hey');

        }
        if(isDelete) {
            System.debug('Hey');

            List<AggregateResult> ar = ];
        }
    }


}