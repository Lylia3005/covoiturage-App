import { Component, Input, OnInit } from '@angular/core';
import { OffresState } from 'src/app/ngrx/offres.reducer';

@Component({
  selector: 'app-offres-list',
  templateUrl: './offres-list.component.html',
  styleUrls: ['./offres-list.component.css']
})
export class OffresListComponent implements OnInit {
  @Input() state:OffresState|null=null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
