import { TestBed } from '@angular/core/testing';

import { YoutubeapiserviceService } from './youtubeapiservice.service';

describe('YoutubeapiService', () => {
  let service: YoutubeapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
