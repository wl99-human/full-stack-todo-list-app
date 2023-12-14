import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  message = "Welcome"
  name = ""

  //ActivatedRoute
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }
}
