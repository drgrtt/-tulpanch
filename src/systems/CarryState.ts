/** Only Tulips are carried in milestone 0.1A. */
export class CarryState {
  private tulips = 0;

  constructor(readonly capacity: number) {}

  get count(): number { return this.tulips; }
  get isFull(): boolean { return this.tulips >= this.capacity; }

  add(): boolean {
    if (this.isFull) return false;
    this.tulips++;
    return true;
  }

  unload(): number {
    const amount = this.tulips;
    this.tulips = 0;
    return amount;
  }
}
