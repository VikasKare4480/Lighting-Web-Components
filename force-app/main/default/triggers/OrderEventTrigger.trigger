trigger OrderEventTrigger on Order_Event__e(after insert) {

	List<Task> taskList = new List<Task>();
	for(Order_Event__e event : Trigger.New) {
		if(event.Has_Shipped__c == true) {
			Task task = new Task();
			task.Priority = 'Medium';
			task.Subject = 'Follow up on shipped order 105';
			task.OwnerId = event.CreatedById;
			taskList.add(task);
		}
	}

	if(!taskList.isEmpty()) {

		insert taskList;
	}
}