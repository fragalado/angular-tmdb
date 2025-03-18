import { Pipe, PipeTransform } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { Languages } from '../interfaces/languages';

@Pipe({
  name: 'movieOriginalLanguage',
  pure: true
})
export class MovieOriginalLanguagePipe implements PipeTransform {
  transform(languages: Languages[] | null, code: string): string {
    if (!languages || !code) return 'Desconocido';
    const language = languages.find((l) => l.iso_639_1 === code);
    return language ? language.english_name : code;
  }
}
