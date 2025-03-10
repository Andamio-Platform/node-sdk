/**
 * A simple math SDK for performing basic arithmetic operations
 */
export class MathSDK {
  /**
   * Adds two numbers together
   * @param a - First number
   * @param b - Second number
   * @returns The sum of the two numbers
   */
  public add(a: number, b: number): number {
    return a + b;
  }

  // Add a new method
  public subtract(a: number, b: number): number {
    return a - b;
  }
}

// Default export for easier importing
export default MathSDK;