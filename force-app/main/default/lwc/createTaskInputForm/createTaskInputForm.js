import { LightningElement, track } from 'lwc';

export default class CreateTaskInputForm extends LightningElement {

    @track taskList = [];
    taskPriorityOptions = [
        {label : 'Low', value : 'Low'},
        {label : 'Medium', value : 'Medium'},
        {label : 'High', value : 'High'}
    ];

    task = {}
    handlePriorityChange(event) {
        let element = event.target;
        let name = element.name;    
        let value = element.value;
        console.log(value);
        this.task[name] = value; 
    }

    handleTaskName(event) {
        let element = event.target;
        let name = element.name;
        let value = element.value;
        console.log(value);
        this.task[name] = value; 
    }

    handleAddTask(event) {
        console.log(JSON.stringify(this.task));
        console.log(this.task);
        this.taskList.push(this.task);
        // this.taskList = [...this.taskList, { ...this.task }];
        console.log(this.taskList);
    }
}