import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ContentServiceService } from './content-service.service';
import { MatDialogModule } from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ChartGridComponent } from './chart-grid/chart-grid.component';
import { AccordionBasicsComponent } from './accordion-basics/accordion-basics.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatTreeModule } from '@angular/material/tree';
import { FeatureDevelopComponent } from './feature-develop/feature-develop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    SampleFormComponent,
    DataGridComponent,
    ChartGridComponent,
    AccordionBasicsComponent,
    FeatureDevelopComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AgGridModule,
    MatDialogModule,
    MatExpansionModule,
    MatTooltipModule,
    HttpClientModule,
    MatTreeModule
  ],
  exports: [
    SampleFormComponent,
    DataGridComponent,
    ChartGridComponent,
    AccordionBasicsComponent,
    FeatureDevelopComponent,
    PageNotFoundComponent
  ],
  providers: [
    ContentServiceService
  ]
})
export class ContentModule { }
