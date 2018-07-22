import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarColorService {

  constructor() { }

  getReverse(input: string): string {
    return input.split('').reverse().join('');
  }
}
