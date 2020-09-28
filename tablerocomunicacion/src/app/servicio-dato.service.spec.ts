import { TestBed } from '@angular/core/testing';

import { ServicioDatoService } from './servicio-dato.service';

describe('ServicioDatoService', () => {
  let service: ServicioDatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
