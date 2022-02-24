import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentServiceService } from '../content-service/content-service.service';

import { FileParseUploadComponent } from './file-parse-upload.component';

describe('FileParseUploadComponent', () => {
  let component: FileParseUploadComponent;
  let fixture: ComponentFixture<FileParseUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileParseUploadComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileParseUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
