import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { Lang } from './content/model';
import { PATHS } from './content/paths';
import { LangService } from './shared/lang.service';
import { ChapterPage } from './pages/chapter.page';
import { CoachingPage } from './pages/coaching.page';
import { JourneyPage } from './pages/journey.page';
import { SearchPage } from './pages/search.page';
import { WorkPage } from './pages/work.page';

/** Switches ngx-translate and <html lang> before the page renders. */
const langResolver: ResolveFn<unknown> = (route) => inject(LangService).use(route.data['lang'] as Lang);

function routesFor(lang: Lang): Routes {
  const p = PATHS[lang];
  const data = { lang };
  const resolve = { l: langResolver };
  const pathMatch = 'full' as const;
  return [
    { path: p.work, component: WorkPage, data, resolve, pathMatch },
    { path: p.coaching, component: CoachingPage, data, resolve, pathMatch },
    { path: p.journey, component: JourneyPage, data, resolve, pathMatch },
    { path: p.quikstep, component: ChapterPage, data: { ...data, chapter: 'quikstep' }, resolve, pathMatch },
    { path: p.training, component: ChapterPage, data: { ...data, chapter: 'training' }, resolve, pathMatch },
    { path: p.dkfz, component: ChapterPage, data: { ...data, chapter: 'dkfz' }, resolve, pathMatch },
    { path: p.search, component: SearchPage, data, resolve, pathMatch },
  ];
}

export const routes: Routes = [...routesFor('de'), ...routesFor('en'), { path: '**', redirectTo: '' }];
