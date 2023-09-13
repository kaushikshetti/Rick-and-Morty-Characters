import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characterData: any; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCharacterData();
  }

  fetchCharacterData() {
    const randomCharacterId = Math.floor(Math.random() * 100) + 1;
    const apiUrl = `https://rickandmortyapi.com/api/character/${randomCharacterId}`;
  
    this.http.get(apiUrl).subscribe((data: any) => {
      this.characterData = data;
      console.log('Character data:', this.characterData); 
    });
  }
  refreshPage() {
    window.location.reload();
  }
}
