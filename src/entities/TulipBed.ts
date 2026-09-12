import type { CarryState } from '../systems/CarryState';

export interface FlowerSlot {
  readonly x: number;
  readonly y: number;
  state: 'growing' | 'ready';
  readyAt: number;
}

/** Absolute monotonic seconds keep each plant's growth independent of frame rate. */
export class TulipBed {
  readonly slots: FlowerSlot[];

  constructor(positions: readonly { x: number; y: number }[], readonly growthSeconds: number) {
    this.slots = positions.map(position => ({ ...position, state: 'ready', readyAt: 0 }));
  }

  update(now: number): void {
    for (const slot of this.slots) {
      if (slot.state === 'growing' && now >= slot.readyAt) slot.state = 'ready';
    }
  }

  harvest(index: number, now: number, carry: CarryState): boolean {
    const slot = this.slots[index];
    if (!slot || slot.state !== 'ready' || !carry.add()) return false;
    slot.state = 'growing';
    slot.readyAt = now + this.growthSeconds;
    return true;
  }

  progress(slot: FlowerSlot, now: number): number {
    return slot.state === 'ready' ? 1 : Math.max(0, Math.min(1, 1 - (slot.readyAt - now) / this.growthSeconds));
  }
}
