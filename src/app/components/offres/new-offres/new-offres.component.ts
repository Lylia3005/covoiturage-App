import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NewOffresAction, SaveOffresAction } from 'src/app/ngrx/offres.actions';
import { DataStateEnum, OffresState } from 'src/app/ngrx/offres.reducer';

@Component({
  selector: 'app-new-offres',
  templateUrl: './new-offres.component.html',
  styleUrls: ['./new-offres.component.css']
})
export class NewOffresComponent implements OnInit {
  
  userForm:FormGroup|null=null;
  state: OffresState|null=null;
  readonly DataStateEnum = DataStateEnum;
  submitted:boolean = false;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new NewOffresAction({}));
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      
      if(this.state?.dataState==DataStateEnum.NEW){
        this.userForm= new FormGroup(
          {
            nomEmp : new FormControl('',Validators.required),
            v_depart : new FormControl('',Validators.required),
            v_arrivee : new FormControl('',Validators.required),
            date : new FormControl('2019-05-30',Validators.required)
          }
        );
      }   
    
    });
  }

  newOffre(){
    this.store.dispatch(new NewOffresAction({}));
  }
  onSaveOffre(){
    this.submitted=true;
    if(!this.userForm?.valid) return;
    this.store.dispatch(new SaveOffresAction(this.userForm?.value));
  }
}
