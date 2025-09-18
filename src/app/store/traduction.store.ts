/* eslint-disable @typescript-eslint/no-explicit-any */
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { SpanishTranslate } from './traductions/TextSpanish.data';
import { EnglishTranslate } from './traductions/TextEnglish.data';
import { Translation } from '../model/Translation.model';

type State = {
  Language: string;
  Translation: Translation;
  Enfocada: boolean;
};

const TranslationSpanish: Translation = SpanishTranslate;
const TranslationEnglish: Translation = EnglishTranslate;

const initialState: State = {
  Language: 'EN',
  Translation: TranslationEnglish,
  Enfocada: false,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, http = inject(HttpClient)) => ({
    async changeLanguage(NewLanguage: string): Promise<void> {
      patchState(store, { Language: NewLanguage });
      patchState(store, {
        Translation:
          NewLanguage === 'ES' ? TranslationSpanish : TranslationEnglish,
      });
    },
    async changeEnfocado(NewEnfocado: boolean): Promise<void> {
      patchState(store, { Enfocada: NewEnfocado });
    },
  }))
);
