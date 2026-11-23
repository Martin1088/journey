import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { Lang } from './content/model';
import { PATHS } from './content/paths';
import { LangService } from './shared/lang.service';
import { ChapterPage } from './pages/chapter.page';
import { HomePage } from './pages/home.page';
import { SearchPage } from './pages/search.page';

/** Switches ngx-translate and <html lang> before the page renders. */
const langResolver: ResolveFn<unknown> = (route) => inject(LangService).use(route.data['lang'] as Lang);

function routesFor(lang: Lang): Routes {
  const p = PATHS[lang];
  const base = { lang };
  return [
    { path: p.home, component: HomePage, data: base, resolve: { l: langResolver }, pathMatch: 'full' },
    { path: p.quikstep, component: ChapterPage, data: { ...base, chapter: 'quikstep' }, resolve: { l: langResolver } },
    { path: p.training, component: ChapterPage, data: { ...base, chapter: 'training' }, resolve: { l: langResolver } },
    { path: p.dkfz, component: ChapterPage, data: { ...base, chapter: 'dkfz' }, resolve: { l: langResolver } },
    { path: p.search, component: SearchPage, data: base, resolve: { l: langResolver } },
  ];
}

export const routes: Routes = [...routesFor('de'), ...routesFor('en'), { path: '**', redirectTo: '' }];
