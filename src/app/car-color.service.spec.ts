import { TestBed, inject } from '@angular/core/testing';

import { CarColorService } from './car-color.service';

describe('CarColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarColorService]
    });
  });

  it('should be created', inject([CarColorService], (service: CarColorService) => {
    expect(service).toBeTruthy();
  }));

  it('return reverse for a word', inject([CarColorService], (service: CarColorService) => {
    expect(service.getReverse('hello')).toBe('olleh');
    expect(service.getReverse('Howdy')).toBe('ydwoH');
    expect(service.getReverse('Greetings from Earth')).toBe('htraE morf sgniteerG');
  }));
});
