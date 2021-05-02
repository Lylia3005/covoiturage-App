import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { OffresService } from "../services/offres.service";
import { ActionTypes, DeleteOffresActionError, DeleteOffresActionSuccess, EditOffresActionError, EditOffresActionSuccess, GetAllOffresActionError, GetAllOffresActionSuccess, NewOffresActionSuccess, OffresAction, SaveOffresActionError, SaveOffresActionSuccess, SearchOffresActionError, SearchOffresActionSuccess, UpdatedOffresActionError, UpdatedOffresActionSuccess } from "./offres.actions";
import { catchError, map,  mergeMap} from 'rxjs/operators';
@Injectable()
export class OffresEffects{
    constructor(private offresServices:OffresService, private effectActions:Actions){}
    //get
    getAllOffresEffect:Observable<OffresAction>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ActionTypes.GET_ALL_OFFRES),
            mergeMap((action:OffresAction)=>{
                return this.offresServices.getAllOffres().pipe(
                    map((offres)=> new GetAllOffresActionSuccess(offres)),
                    catchError((err)=>of(new GetAllOffresActionError(err.message)))
                )
            })
        )
    );

    //Search
    searchOffresEffect:Observable<OffresAction>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ActionTypes.SEARCH_OFFRES),
            mergeMap((action:OffresAction)=>{
                return this.offresServices.searchOffres(action.payload).pipe(
                    map((offres)=> new SearchOffresActionSuccess(offres)),
                    catchError((err)=>of(new SearchOffresActionError(err.message)))
                )
            })
        )
    );


    //delete
    deleteOffresEffect:Observable<OffresAction>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ActionTypes.DELETE_OFFRES),
            mergeMap((action:OffresAction)=>{
                
                return this.offresServices.deleteOffre(action.payload).pipe(
                    map(()=> new DeleteOffresActionSuccess(action.payload)),
                    catchError((err)=>of(new DeleteOffresActionError(err.message)))
                )
            })
        )
    );

    //new
    newOffresEffect:Observable<OffresAction>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ActionTypes.NEW_OFFRES),
            map((action:OffresAction)=>{
                return new NewOffresActionSuccess({});
            })
        )
    );


    
    //save
    saveOffresEffect:Observable<OffresAction>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ActionTypes.SAVE_OFFRES),
            mergeMap((action:OffresAction)=>{
                
                return this.offresServices.save(action.payload).pipe(
                    map((offre)=> new SaveOffresActionSuccess(offre)),
                    catchError((err)=>of(new SaveOffresActionError(err.message)))
                )
            })
        )
    );

    //edit
    editOffresEffect:Observable<OffresAction>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ActionTypes.EDIT_OFFRES),
            mergeMap((action:OffresAction)=>{
                
                return this.offresServices.getOffre(action.payload).pipe(
                    map((offre)=> new EditOffresActionSuccess(offre)),
                    catchError((err)=>of(new EditOffresActionError(err.message)))
                )
            })
        )
    );

    //update
    updateOffresEffect:Observable<OffresAction>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ActionTypes.UPDATED_OFFRES),
            mergeMap((action:OffresAction)=>{
                
                return this.offresServices.updatetOffre(action.payload).pipe(
                    map((offre)=> new UpdatedOffresActionSuccess(offre)),
                    catchError((err)=>of(new UpdatedOffresActionError(err.message)))
                )
            })
        )
    );
    
 
}