import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartGridComponent } from './content/chart-grid/chart-grid.component';
import { SampleFormComponent } from './content/sample-form/sample-form.component';

const routes: Routes = [
  { path: 'sample', component: SampleFormComponent},
  { path: 'chart', component: ChartGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
