import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Offre } from 'src/app/model/offre.model';
import { DeleteOffresAction } from 'src/app/ngrx/offres.actions';

@Component({
  selector: 'app-offre-item',
  templateUrl: './offre-item.component.html',
  styleUrls: ['./offre-item.component.css']
})
export class OffreItemComponent implements OnInit {
  @Input() offre:Offre|null=null;
  constructor(private store:Store,private router:Router) { }

  ngOnInit(): void {
  }

  onDelete(offre:Offre){
    let v=confirm("Etes vous sûr de vouloir supprimer cette offre?");
    if(v==true) this.store.dispatch(new DeleteOffresAction(offre));
  }

  onEdit(offre:Offre){
    this.router.navigateByUrl("/editOffre/"+offre.id);
  }
  
}
