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
    'Authorization': 'Bearer BQB1zV-e9Ia1J1-YTyzYiu7pgeiZDcCyYCZPzr5dbjVVn-3KfPyZEzlVHn2zEjKusc6bXSaH-8Vcguhikhs',

  });
  return this.http.get(url,{headers});
  }
  getNewReleases(){
   
    return this.getQuery('browse/new-releases?limit=50').pipe(map(data=>{return data['albums'].items;
  }))
  }

  getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(map(data=>{return data['artists'].items;
  }));
  }
  
  getArtist(id:string){
    return this.getQuery(`artists/${id}`);//.pipe(map(data=>{return data['artists'].items;}));
  }

  getTopTracks(id:string){
  return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data=> data['tracks']));
}
}
