import { TestBed } from '@angular/core/testing';

import { TradeProcessorService } from './trade-processor.service';

describe('TradeProcessorService', () => {
  let service: TradeProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
