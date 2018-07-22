import { DIRECTION_LEFT, DIRECTION_RIGHT, MAX_AIRJUMP_DURATION, MAX_JUMP_DURATION } from "../constants";
import { getInput } from "../input";

export const player = (actor, elapsedTime) => {
  actor.input = getInput();

  if (!actor.hasJumped && actor.input.jumpPressed && actor.jumpDuration < MAX_JUMP_DURATION) {
    actor.yVelocity = actor.jumpVelocity;
    actor.jumpDuration = actor.jumpDuration + 1;
  }

  // Disable jumping if the player has been airborne for a certain amount of time
  if (!actor.input.jumpPressed && actor.airDuration > 0 && actor.airDuration > MAX_AIRJUMP_DURATION) {
    actor.hasJumped = true;
  }

  if (actor.input.dashPressed) {
    actor.xVelocity = actor.moveVelocity * 2;
  }
  else if (actor.input.leftPressed || actor.input.rightPressed) {
    actor.xVelocity = actor.moveVelocity;
  }
  else {
    actor.xVelocity = 0;
  }

  actor.direction = actor.input.leftPressed && DIRECTION_LEFT || actor.input.rightPressed && DIRECTION_RIGHT || actor.direction;

  const { current } = actor;

  if (actor.yVelocity !== 0) {
    actor.current = actor.sprites.jump;
  }
  else if (actor.xVelocity !== 0) {
    if (Math.abs(actor.xVelocity) > actor.moveVelocity) {
      actor.current = actor.sprites.dash;
    }
    else {
      actor.current = actor.sprites.run;
    }
  }
  else if (actor.xVelocity === 0) {
    actor.current = actor.sprites.default;
  }

  // ensure we have sprites
  actor.current = actor.current || actor.sprites.default;

  if (actor.current !== current) {
    actor.cursor = 0;
  }
};
