import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataStateEnum, OffresState } from 'src/app/ngrx/offres.reducer';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  offresState$:Observable<OffresState> |null=null;
  readonly DataStateEnum= DataStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.offresState$=this.store.pipe(
      map((state)=> state.catalogState)
    );
  }

}
