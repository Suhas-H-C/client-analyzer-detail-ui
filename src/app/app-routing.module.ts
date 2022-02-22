import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartGridComponent } from './content/chart-grid/chart-grid.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import { SampleFormComponent } from './content/sample-form/sample-form.component';

/**
 * Contains all routes 
 * Always wildcard routes should be on the last
 * Angular tries to match from the beginning
 */
const routes: Routes = [
  /**
   * To display some route by default
   */
  { path: '', component: ChartGridComponent},
  /**
   * Other routes
   */
  { path: 'sample', component: SampleFormComponent},
  { path: 'chart', component: ChartGridComponent},
  /**
   * Not found handler (Always at the bottom)
   */
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
