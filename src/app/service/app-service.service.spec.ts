import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AppServiceService } from './app-service.service';

describe('AppServiceService', () => {
  let service: AppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(AppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check userData size', () => {
    /**
     * To create own instance
     */
    //const creatingDummyInstance = TestBed.createComponent(AppServiceService);
    //const creatingOwnInstance = creatingDummyInstance.componentInstance;
    /**
     * subscribing and checking the response length
     */
    service.getUserRecords().subscribe(
      response => {
        expect(response.length).toBe(10);
      }
    )
  })

  it('should check userData calling time', () => {
    expect(service.getUserRecords().subscribe(
      (response) => {
        expect(response).toHaveBeenCalledTimes(1);
      }
    ))
  })
});
