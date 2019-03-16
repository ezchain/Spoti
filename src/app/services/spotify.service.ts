import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private http:HttpClient) { }
  
  getQuery(query:string){
  const url = `	https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQDgJq5QM6sp8ykYSMfUG6Ob488EjKXt1oAkKmBYb1Dxt2oI6VQJEWeiEgIh1NQ4rYPh0BcN1ir0F0A0JR0',

  });
  return this.http.get(url,{headers});
  }
  getNewReleases(){
   
    return this.getQuery('browse/new-releases?limit=50').pipe(map(data=>{return data['albums'].items;
  }))
  }

  getArtist(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(map(data=>{return data['artists'].items;
  }));
  }
}
