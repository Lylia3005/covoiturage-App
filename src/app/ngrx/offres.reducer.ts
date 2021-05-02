import { Action } from "@ngrx/store";
import { Offre } from "../model/offre.model";
import { ActionTypes, OffresAction } from "./offres.actions";

export enum DataStateEnum{
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial",
    NEW="NEW",
    EDIT="EDIT",
    
    UPDATED="UPDATED"
}


export interface OffresState{
    offres:Offre[],
    errorMessage:string,
    dataState:DataStateEnum,
    currentOffre:Offre|null
}

const initialState:OffresState={
    offres:[],
    errorMessage:"",
    dataState:DataStateEnum.INITIAL,
    currentOffre:null
}

export function offresReducer(state=initialState, action: Action):OffresState{
    switch(action.type){
        //get
        case ActionTypes.GET_ALL_OFFRES:
            return {...state, dataState:DataStateEnum.LOADING}
        case ActionTypes.GET_ALL_OFFRES_SUCCESS:
            return {...state, dataState:DataStateEnum.LOADED, offres:(<OffresAction>action).payload}
        case ActionTypes.GET_ALL_OFFRES_ERROR:
            return {...state, dataState:DataStateEnum.ERROR, errorMessage:(<OffresAction>action).payload}
        
        // search
        case ActionTypes.SEARCH_OFFRES:
            return {...state, dataState:DataStateEnum.LOADING}
        case ActionTypes.SEARCH_OFFRES_SUCCESS:
            return {...state, dataState:DataStateEnum.LOADED, offres:(<OffresAction>action).payload}
        case ActionTypes.SEARCH_OFFRES_ERROR:
            return {...state, dataState:DataStateEnum.ERROR, errorMessage:(<OffresAction>action).payload}
        

        // delete
        case ActionTypes.DELETE_OFFRES:
            return {...state, dataState:DataStateEnum.LOADING}
        case ActionTypes.DELETE_OFFRES_SUCCESS:
            let o:Offre=(<OffresAction>action).payload;
            let index=state.offres.indexOf(o);
            let offresList=[...state.offres];
            offresList.splice(index,1);
            return {...state, dataState:DataStateEnum.LOADED, offres:offresList}
        case ActionTypes.DELETE_OFFRES_ERROR:
            return {...state, dataState:DataStateEnum.ERROR, errorMessage:(<OffresAction>action).payload}
        

        // new
        case ActionTypes.NEW_OFFRES:
            return {...state, dataState:DataStateEnum.LOADING}
        case ActionTypes.NEW_OFFRES_SUCCESS:
            return {...state, dataState:DataStateEnum.NEW}
        case ActionTypes.NEW_OFFRES_ERROR:
            return {...state, dataState:DataStateEnum.ERROR, errorMessage:(<OffresAction>action).payload}
        

        // save
        case ActionTypes.SAVE_OFFRES:
            return {...state, dataState:DataStateEnum.LOADING}
        case ActionTypes.SAVE_OFFRES_SUCCESS:
            let off:Offre[]=[...state.offres];
            off.push((<OffresAction>action).payload);
            return {...state, dataState:DataStateEnum.LOADED,offres:off}
        case ActionTypes.SAVE_OFFRES_ERROR:
            return {...state, dataState:DataStateEnum.ERROR, errorMessage:(<OffresAction>action).payload}
        

        // edit
        case ActionTypes.EDIT_OFFRES:
            return {...state, dataState:DataStateEnum.LOADING}
        case ActionTypes.EDIT_OFFRES_SUCCESS:
            return {...state, dataState:DataStateEnum.LOADED,currentOffre:(<OffresAction>action).payload}
        case ActionTypes.EDIT_OFFRES_ERROR:
            return {...state, dataState:DataStateEnum.ERROR, errorMessage:(<OffresAction>action).payload}
        

        // update
        case ActionTypes.UPDATED_OFFRES:
            return {...state, dataState:DataStateEnum.LOADING}
        case ActionTypes.UPDATED_OFFRES_SUCCESS:
            let uOffre:Offre=(<OffresAction>action).payload;
            let lOffre:Offre[]=state.offres.map(o=>(o.id==uOffre.id)?uOffre:o);
            return {...state, dataState:DataStateEnum.UPDATED,offres:lOffre}
        case ActionTypes.UPDATED_OFFRES_ERROR:
            return {...state, dataState:DataStateEnum.ERROR, errorMessage:(<OffresAction>action).payload}
        
        default: return {...state}
    }
}