import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionBasicsComponent } from './content/accordion-basics/accordion-basics.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import { SampleFormComponent } from './content/sample-form/sample-form.component';
import { FooterComponent } from './footer/footer.component';

/**
 * Contains all routes 
 * Always wildcard routes should be on the last
 * Angular tries to match from the beginning
 */
const routes: Routes = [
  /**
   * To display some route by default
   */
  //{ path: '', component: AppComponent},
  /**
   * Other routes
   */
  { path: 'sample', component: SampleFormComponent },
  { path: 'accordion', component: AccordionBasicsComponent },
  { path: 'develop-ftt/:id', component: FooterComponent },
  /**
   * Not found handler (Always at the bottom)
   */
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
