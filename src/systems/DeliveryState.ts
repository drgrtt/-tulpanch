import type { CarryState } from './CarryState';

/** A delivery counter, with no economy or production attached. */
export class DeliveryState {
  total = 0;

  unload(carry: CarryState): number {
    const amount = carry.unload();
    this.total += amount;
    return amount;
  }
}
