import { TestBed } from '@angular/core/testing';

import { ServicioPaisesService } from './servicio-paises.service';

describe('ServicioPaisesService', () => {
  let service: ServicioPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
