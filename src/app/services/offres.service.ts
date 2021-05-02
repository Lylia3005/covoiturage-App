import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Offre } from "../model/offre.model";
@Injectable({providedIn:"root"})
export class OffresService{
    constructor(private http: HttpClient){
    }

    getAllOffres():Observable<Offre[]>{
        let host=environment.host;
        return this.http.get<Offre[]>(host+"/offres");
    }

    searchOffres(o : Offre):Observable<Offre[]>{
        let host=environment.host;
        return this.http.get<Offre[]>(host+"/offres?nomEmp_like="+o.nomEmp+"&v_depart_like="+o.v_depart+"&v_arrivee_like="+o.v_arrivee+"&date_like="+o.date);
        
    }

    deleteOffre(o : Offre):Observable<void>{
        let host=environment.host;
        return this.http.delete<void>(host+"/offres/"+o.id);
    }

    save(o : Offre):Observable<Offre>{
        let host=environment.host;
        return this.http.post<Offre>(host+"/offres",o)
    }

    getOffre(id: number):Observable<Offre>{
        let host=environment.host;
        return this.http.get<Offre>(host+"/offres/"+id);
    }

    updatetOffre(o : Offre):Observable<Offre>{
        let host=environment.host;
        return this.http.put<Offre>(host+"/offres/"+o.id,o);
    }


}