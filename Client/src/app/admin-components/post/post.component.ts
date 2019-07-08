import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  create_is_clicked: boolean = false;
  text = "Create";
  post_id: string = "";
  post_time = new FormControl(new Date());

  IDFormControl = new FormControl("", [Validators.required]);


  constructor() { }

  ngOnInit() { }

  create(): void {
    this.create_is_clicked = !this.create_is_clicked;
    this.post_id = "";
    if (this.create_is_clicked) {
      this.text = "Cancel";
    } else {
      this.text = "Create";
    }
  }
  submit(): void { }
}