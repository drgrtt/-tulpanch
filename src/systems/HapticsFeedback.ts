export type HapticEvent = 'flowerPickup' | 'carryFull' | 'unload';

/** Replace only this adapter with native haptics when packaging for mobile. */
export class HapticsFeedback {
  play(event: HapticEvent): void {
    const patterns: Record<HapticEvent, number | number[]> = {
      flowerPickup: 8,
      carryFull: 25,
      unload: [12, 25, 18],
    };
    try {
      if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
        navigator.vibrate(patterns[event]);
      }
    } catch { /* Unsupported or blocked by platform: intentionally silent. */ }
  }
}
