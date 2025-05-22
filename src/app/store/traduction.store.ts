import { Translation } from '../model/Translation.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TraductionStore {
  private idiomaSubject = new BehaviorSubject<'en' | 'es'>('en');
  idioma$ = this.idiomaSubject.asObservable();

  setIdioma(idioma: 'en' | 'es') {
    this.idiomaSubject.next(idioma);
  }

  get idiomaActual() {
    return this.idiomaSubject.value;
  }
}
