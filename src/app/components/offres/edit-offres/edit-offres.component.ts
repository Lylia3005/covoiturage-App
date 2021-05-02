import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EditOffresAction, UpdatedOffresAction } from 'src/app/ngrx/offres.actions';
import { DataStateEnum, OffresState } from 'src/app/ngrx/offres.reducer';
import { OffresService } from 'src/app/services/offres.service';

@Component({
  selector: 'app-edit-offres',
  templateUrl: './edit-offres.component.html',
  styleUrls: ['./edit-offres.component.css']
})
export class EditOffresComponent implements OnInit {
  producedId:number;
  userForm?: FormGroup;
  submitted:boolean = false;
  readonly DataStateEnum = DataStateEnum;
  state:OffresState|null=null;
  okForm:boolean = false;
  constructor(private activatedRoute:ActivatedRoute,private store:Store<any>,private router:Router) { 
    this.producedId=activatedRoute.snapshot.params.id;
  }
  

  ngOnInit(): void {
    this.store.dispatch(new EditOffresAction(this.producedId));
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      if(this.state?.dataState==DataStateEnum.LOADED){
        if(this.state.currentOffre!=null){
          this.userForm= new FormGroup(
            { id : new FormControl(this.state.currentOffre.id),
              nomEmp : new FormControl(this.state.currentOffre.nomEmp,Validators.required),
              v_depart : new FormControl(this.state.currentOffre.v_depart,Validators.required),
              v_arrivee : new FormControl(this.state.currentOffre.v_arrivee,Validators.required),
              date : new FormControl(this.state.currentOffre.date,Validators.required)
            }
          );
          this.okForm=true;
        }
        
      }
      
    });

    
  }

  okEdiOffre(){
    this.router.navigateByUrl("/offres");
  }

  onUpdateOffre(){
    this.submitted=true;
    if(!this.userForm?.valid) return;
    this.store.dispatch(new UpdatedOffresAction(this.userForm?.value));
  }

}
