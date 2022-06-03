import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {TaskService} from 'src/app/services/task-service.service'
import {Task} from 'src/app/Task'
let data: Task[] | undefined;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'status'];
  dataSource: any
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private taskService: TaskService) {
    this.getAllTasks();
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  getAllTasks(){
    this.taskService.getAll().subscribe((tasks) => (
      // @ts-ignore
      this.dataSource = new MatTableDataSource<Task>(tasks)
    ))
  }

}

