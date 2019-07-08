import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-admintask',
  templateUrl: './admintask.component.html',
  styleUrls: ['./admintask.component.css']
})
export class AdmintaskComponent implements OnInit {
   
    
    
    name: string = "";
    discription: string;
    point: number;
    post_time = new FormControl(new Date());
    
  
    NameFormControl = new FormControl('', [
      Validators.required
    ]);
  
    DesFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(150)
    ]);

    PointFormControl = new FormControl('', [
      Validators.required
    ]);

    constructor() { }
  
    ngOnInit() { }
  
    submit(): void {
  
    }
  }