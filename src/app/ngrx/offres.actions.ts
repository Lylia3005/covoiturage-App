import { Action } from "@ngrx/store";
import { Offre } from "../model/offre.model";

export enum ActionTypes{
    //get all offres
    GET_ALL_OFFRES="[Offre] Get All offres",
    GET_ALL_OFFRES_SUCCESS="[Offre] Get All offres Succes",
    GET_ALL_OFFRES_ERROR="[Offre] Get All offres Error",

    //search offres
    SEARCH_OFFRES="[Offre] Search offres",
    SEARCH_OFFRES_SUCCESS="[Offre] Search offres Succes",
    SEARCH_OFFRES_ERROR="[Offre] Search offres Error",


    //new offres
    NEW_OFFRES="[Offre] New offre",
    NEW_OFFRES_SUCCESS="[Offre] New offres Succes",
    NEW_OFFRES_ERROR="[Offre] New offres Error",

    //Save offres
    SAVE_OFFRES="[Offre] Save offre",
    SAVE_OFFRES_SUCCESS="[Offre] Save offres Succes",
    SAVE_OFFRES_ERROR="[Offre] Save offres Error",

    //edit
    EDIT_OFFRES="[Offre] Edit offre",
    EDIT_OFFRES_SUCCESS="[Offre] Edit offres Succes",
    EDIT_OFFRES_ERROR="[Offre] Edit offres Error",

    //Save edit
    UPDATED_OFFRES="[Offre] Updated offre",
    UPDATED_OFFRES_SUCCESS="[Offre] Updated offres Succes",
    UPDATED_OFFRES_ERROR="[Offre] Updated offres Error",
    
    //suppr
    DELETE_OFFRES="[Offre] Delete offre",
    DELETE_OFFRES_SUCCESS="[Offre] Delete offres Succes",
    DELETE_OFFRES_ERROR="[Offre] Delete offres Error"

}

//get actions
export class GetAllOffresAction implements Action{
    type: ActionTypes=ActionTypes.GET_ALL_OFFRES;
    constructor(public payload:any){}
    
}

export class GetAllOffresActionSuccess implements Action{
    type: ActionTypes=ActionTypes.GET_ALL_OFFRES_SUCCESS;
    constructor(public payload:Offre[]){}
    
}

export class GetAllOffresActionError implements Action{
    type: ActionTypes=ActionTypes.GET_ALL_OFFRES_ERROR;
    constructor(public payload:string){}
    
}


//search actions
export class SearchOffresAction implements Action{
    type: ActionTypes=ActionTypes.SEARCH_OFFRES;
    constructor(public payload:Offre){}
    
}

export class SearchOffresActionSuccess implements Action{
    type: ActionTypes=ActionTypes.SEARCH_OFFRES_SUCCESS;
    constructor(public payload:Offre[]){}
    
}

export class SearchOffresActionError implements Action{
    type: ActionTypes=ActionTypes.SEARCH_OFFRES_ERROR;
    constructor(public payload:string){}
    
}


//NEW actions
export class NewOffresAction implements Action{
    type: ActionTypes=ActionTypes.NEW_OFFRES;
    constructor(public payload:any){}
    
}

export class NewOffresActionSuccess implements Action{
    type: ActionTypes=ActionTypes.NEW_OFFRES_SUCCESS;
    constructor(public payload:any){}
    
}

export class NewOffresActionError implements Action{
    type: ActionTypes=ActionTypes.NEW_OFFRES_ERROR;
    constructor(public payload:string){}
    
}

//Edit actions
export class EditOffresAction implements Action{
    type: ActionTypes=ActionTypes.EDIT_OFFRES;
    constructor(public payload:number){}
    
}

export class EditOffresActionSuccess implements Action{
    type: ActionTypes=ActionTypes.EDIT_OFFRES_SUCCESS;
    constructor(public payload:Offre){}
    
}

export class EditOffresActionError implements Action{
    type: ActionTypes=ActionTypes.EDIT_OFFRES_ERROR;
    constructor(public payload:string){}
    
}

//Updated actions
export class UpdatedOffresAction implements Action{
    type: ActionTypes=ActionTypes.UPDATED_OFFRES;
    constructor(public payload:Offre){}
    
}

export class UpdatedOffresActionSuccess implements Action{
    type: ActionTypes=ActionTypes.UPDATED_OFFRES_SUCCESS;
    constructor(public payload:Offre){}
    
}

export class UpdatedOffresActionError implements Action{
    type: ActionTypes=ActionTypes.UPDATED_OFFRES_ERROR;
    constructor(public payload:string){}
    
}

//supp actions
export class DeleteOffresAction implements Action{
    type: ActionTypes=ActionTypes.DELETE_OFFRES;
    constructor(public payload:Offre){}
    
}

export class DeleteOffresActionSuccess implements Action{
    type: ActionTypes=ActionTypes.DELETE_OFFRES_SUCCESS;
    constructor(public payload:Offre){}
    
}

export class DeleteOffresActionError implements Action{
    type: ActionTypes=ActionTypes.DELETE_OFFRES_ERROR;
    constructor(public payload:string){}
    
}


//save actions
export class SaveOffresAction implements Action{
    type: ActionTypes=ActionTypes.SAVE_OFFRES;
    constructor(public payload:Offre){}
    
}

export class SaveOffresActionSuccess implements Action{
    type: ActionTypes=ActionTypes.SAVE_OFFRES_SUCCESS;
    constructor(public payload:Offre){}
    
}

export class SaveOffresActionError implements Action{
    type: ActionTypes=ActionTypes.SAVE_OFFRES_ERROR;
    constructor(public payload:string){}
    
}

export type OffresAction= 
GetAllOffresAction | GetAllOffresActionSuccess | GetAllOffresActionError |
SearchOffresAction | SearchOffresActionSuccess | SearchOffresActionError |
DeleteOffresAction | DeleteOffresActionSuccess | DeleteOffresActionError |
NewOffresAction | NewOffresActionSuccess | NewOffresActionError | 
SaveOffresAction | SaveOffresActionSuccess | SaveOffresActionError |
EditOffresAction | EditOffresActionSuccess | EditOffresActionError
;

