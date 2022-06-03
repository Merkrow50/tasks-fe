import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task-service.service';
import {Task} from 'src/app/Task'
import {FormGroup, FormControl} from '@angular/forms';

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-accordion-form',
  templateUrl: './accordion-form.component.html',
  styleUrls: ['./accordion-form.component.css']
})
export class AccordionFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Task>()

  taskForm!: FormGroup

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl(''),
    })
  }

  async submit(){
    console.log("enviou formulario", this.taskForm.value)
    const formData = new FormData();
    formData.append("name", this.taskForm.value.name)
    formData.append("description", this.taskForm.value.description)
    formData.append("status", this.taskForm.value.status)

    await this.taskService.save(formData).subscribe();

  }


  selectedValue: string | undefined;

  status: Status[] = [
    {value: 'NOT_STARTED', viewValue: 'NOT STARTED'},
    {value: 'IN_PROGRESS', viewValue: 'IN PROGRESS'},
    {value: 'FINISHED', viewValue: 'FINISHED'},
  ];
}
