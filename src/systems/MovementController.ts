export interface MovementConfig {
  playerMaxSpeed: number;
  playerAcceleration: number;
  playerDeceleration: number;
  steeringResponsiveness: number;
  inputDeadZone: number;
  inputMaxRadius: number;
  inputAxisSnapDegrees: number;
  velocityStopThreshold: number;
}

export function dragInput(x: number, y: number, config: MovementConfig): { x: number; y: number } {
  const distance = Math.hypot(x, y);
  if (distance <= config.inputDeadZone) return { x: 0, y: 0 };
  const strength = Math.min(1, (distance - config.inputDeadZone) / (config.inputMaxRadius - config.inputDeadZone));
  // Suppress small sideways finger wobble when aiming along a cardinal axis.
  const snap = Math.tan(config.inputAxisSnapDegrees * Math.PI / 180);
  if (Math.abs(y) <= Math.abs(x) * snap) y = 0;
  else if (Math.abs(x) <= Math.abs(y) * snap) x = 0;
  const length = Math.hypot(x, y);
  return { x: x / length * strength, y: y / length * strength };
}

export class MovementController {
  readonly currentVelocity = { x: 0, y: 0 };
  readonly targetVelocity = { x: 0, y: 0 };

  constructor(private readonly config: MovementConfig) {}

  reset(): void {
    this.currentVelocity.x = this.currentVelocity.y = 0;
    this.targetVelocity.x = this.targetVelocity.y = 0;
  }

  update(x: number, y: number, seconds: number): void {
    const length = Math.hypot(x, y);
    const active = length > 0;
    const scale = this.config.playerMaxSpeed / Math.max(1, length);
    const alpha = 1 - Math.exp(-this.config.steeringResponsiveness * seconds);
    if (active) {
      this.targetVelocity.x += (x * scale - this.targetVelocity.x) * alpha;
      this.targetVelocity.y += (y * scale - this.targetVelocity.y) * alpha;
    } else {
      // No steering tail on release: stop promptly, without an icy glide.
      this.targetVelocity.x = this.targetVelocity.y = 0;
    }
    const dx = this.targetVelocity.x - this.currentVelocity.x;
    const dy = this.targetVelocity.y - this.currentVelocity.y;
    const distance = Math.hypot(dx, dy);
    const rate = active ? this.config.playerAcceleration : this.config.playerDeceleration;
    const step = distance === 0 ? 0 : Math.min(1, rate * seconds / distance);
    this.currentVelocity.x += dx * step;
    this.currentVelocity.y += dy * step;
    if (!active && Math.hypot(this.currentVelocity.x, this.currentVelocity.y) < this.config.velocityStopThreshold) this.reset();
  }
}
