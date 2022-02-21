import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ContentServiceService } from './content-service.service';

describe('ContentServiceService', () => {
  let service: ContentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(ContentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
