import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TraductionStore } from '../store/traduction.store';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TraduccionService {
  private traduccionesSubject = new BehaviorSubject<Record<string, string>>({});
  traducciones$ = this.traduccionesSubject.asObservable();

  constructor(private http: HttpClient, private idiomaStore: TraductionStore) {
    // Escuchar cambios de idioma y cargar el JSON correspondiente
    this.idiomaStore.idioma$.subscribe((idioma) => {
      this.cargarTraducciones(idioma);
    });

    // Cargar traducciones iniciales
    this.cargarTraducciones(this.idiomaStore.idiomaActual);
  }

  private cargarTraducciones(idioma: 'en' | 'es') {
    const pathSpanish = `../store/traductions/TextSpanish.data.ts`;
    const pathEnglish = `../store/traductions/TextEnglish.data.ts`;

    this.http.get<Record<string, string>>(pathEnglish).subscribe((json) => {
      this.traduccionesSubject.next(json);
    });
  }

  traducir(key: string): string {
    return this.traduccionesSubject.value[key] || key;
  }
}
