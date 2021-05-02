import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetAllOffresAction, SearchOffresAction } from 'src/app/ngrx/offres.actions';
import { DataStateEnum, OffresState } from 'src/app/ngrx/offres.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userForm:FormGroup|null=null;
  state: OffresState|null=null;
  readonly DataStateEnum = DataStateEnum;
  submitted:boolean = false;
  constructor(private store:Store<any>,private router:Router) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      
     
        this.userForm= new FormGroup(
          {
            nomEmp : new FormControl(''),
            v_depart : new FormControl(''),
            v_arrivee : new FormControl(''),
            date : new FormControl('')
          }
        );
      
    
    });
  }

  onGetAllOffres(){
    this.store.dispatch(new GetAllOffresAction({}));
  }

  onSearch(){
    this.submitted=true;
    if(!this.userForm?.valid) return;
    this.store.dispatch(new SearchOffresAction(this.userForm?.value));
  }

  onNewOffres(){
    this.router.navigateByUrl("/newOffre");
  }

}
