import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AccordionBasicsComponent } from './accordion-basics/accordion-basics.component';
import { ContentServiceService } from './content-service/content-service.service';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataProviderComponent } from './data-provider/data-provider.component';
import { FeatureDevelopComponent } from './feature-develop/feature-develop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { FileParseUploadComponent } from './file-parse-upload/file-parse-upload.component';

@NgModule({
  declarations: [
    SampleFormComponent,
    DataGridComponent,
    AccordionBasicsComponent,
    FeatureDevelopComponent,
    PageNotFoundComponent,
    DataProviderComponent,
    FileParseUploadComponent
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
    MatTreeModule,
    RouterModule
  ],
  exports: [
    SampleFormComponent,
    DataGridComponent,
    AccordionBasicsComponent,
    FeatureDevelopComponent,
    PageNotFoundComponent,
    DataProviderComponent,
    FileParseUploadComponent
  ],
  providers: [
    ContentServiceService
  ]
})
export class ContentModule { }
