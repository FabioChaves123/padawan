import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private starWars: StarwarsService) { }

  ngOnInit(): void {
  }

}
