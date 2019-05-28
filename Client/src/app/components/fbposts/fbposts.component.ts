import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fbposts',
  templateUrl: './fbposts.component.html',
  styleUrls: ['./fbposts.component.css']
})


export class FbpostsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  share(){
      FB.ui({
        method: 'share',
        display: 'iframe',
        href: 'https://developers.facebook.com/docs/',
        
      }, function(response){
        console.log(response);
         console.log(response.post_id);
          console.log(response.error_message);
      });
  }
}

declare var FB: any;