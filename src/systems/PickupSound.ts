/** Tiny synthesized pickup tick, unlocked by a user gesture. No external assets. */
export class PickupSound {
  private context: AudioContext | null = null;

  unlock(): void {
    try {
      if (!this.context && typeof AudioContext !== 'undefined') this.context = new AudioContext();
      if (this.context?.state === 'suspended') void this.context.resume().catch(() => {});
    } catch { /* Audio unavailable. */ }
  }

  play(): void {
    const context = this.context;
    if (!context || context.state !== 'running') return;
    try {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const now = context.currentTime;
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, now);
      oscillator.frequency.exponentialRampToValueAtTime(1320, now + 0.045);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.055, now + 0.006);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
      oscillator.connect(gain); gain.connect(context.destination);
      oscillator.start(now); oscillator.stop(now + 0.1);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    } catch { /* Audio errors must not affect harvesting. */ }
  }

  destroy(): void {
    if (this.context) void this.context.close().catch(() => {});
    this.context = null;
  }
}
