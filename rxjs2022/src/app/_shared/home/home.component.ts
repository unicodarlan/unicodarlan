import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  ngOnInit(): void {
  }

}
