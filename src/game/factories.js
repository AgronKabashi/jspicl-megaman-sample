export function createActor (args) {
  return Object.assign({
    x: 0,
    y: 0,
    health: 0,
    direction: 0,
    xVelocity: 0,
    yVelocity: 0,
    moveAcceleration: 0,
    moveVelocity: 0,
    jumpVelocity: 0,
    jumpDuration: 0,
    airDuration: 0,
    gravityModifier: 1,
    scale: 1,
    currentAnimation: args.sprites.default,
    cursor: 0,
    current: args.sprites.default
  }, args);
}

export function createKeyframeAnimation (index, frames = 1, duration = 1, widthUnits = 1, heightUnits = 1) {
  return {
    index,
    frames,
    duration,
    widthUnits,
    heightUnits
  };
}
