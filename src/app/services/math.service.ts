import { Injectable } from '@angular/core';


/**
 * Service for super difficult math operations
 */
@Injectable({
  providedIn: 'root'
})
export class MathService {
  /**
   * Value of the last operation
   */
  storedValue: number;

  /**
   * @ignore
   */
  constructor() { }

  /**
   * Perform a very special operation
   * 
   * @example
   * Simply call it with 2 numbers:
   * getResult(2, 3)
   * 
   * @param (number) a First number
   * @param (number) b Second number
   * @returns The sum of a and b
   */
  getResult(a: number, b: number): number {
    const sum = a + b;
    this.storedValue = sum;
    return sum;
  }
}
