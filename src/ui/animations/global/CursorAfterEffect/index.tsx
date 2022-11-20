/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  memo, useCallback, useLayoutEffect, useRef,
} from 'react';

class Particle {
  position: { x: number; y: number; };

  element: HTMLSpanElement;

  lifeSpan: number;

  initialStyles: any;

  velocity: { x: number; y: number };

  constructor(x: number, y: number, character: string) {
    this.lifeSpan = 120; // ms
    this.initialStyles = {
      position: 'fixed',
      display: 'block',
      pointerEvents: 'none',
      'z-index': '10000000',
      fontSize: '16px',
      'will-change': 'transform',
      top: 0,
      left: 0,
    };

    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
      y: 1,
    };

    this.position = { x: x - 10, y };

    this.element = document.createElement('span');

    this.element.innerHTML = character;

    Particle.applyProperties(this.element, this.initialStyles);

    this.update();

    document.body.appendChild(this.element);
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.lifeSpan -= 1;

    this.element.style.transform = `translate3d(${this.position.x}px,${
      this.position.y
    }px,0) scale(${this.lifeSpan / 120})`;
  }

  die() {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  // Applies css `properties` to an element.
  private static applyProperties(target: any, properties: any) {
    const keysOfObject = Object.keys(properties);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of keysOfObject) {
      // eslint-disable-next-line no-param-reassign
      target.style[key] = properties[key];
    }
  }
}

const possibleEmoji = ['🍕'];

export const CursorAfterEffect = memo(() => {
  const particles = useRef<Array<Particle>>([]);

  const addParticle = useCallback((x: number, y: number, character: string) => {
    const particle = new Particle(x, y, character);

    particles.current.push(particle);
  }, []);

  const onMouseMove = useCallback((e: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = e;

    addParticle(
      clientX,
      clientY,
      possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)],
    );
  }, [possibleEmoji, addParticle]);

  const onTouchMove = useCallback((e: any) => {
    if (e.touches.length > 0) {
      for (let i = 0; i < e.touches.length; i += 1) {
        addParticle(
          e.touches[i].clientX,
          e.touches[i].clientY,
          possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)],
        );
      }
    }
  }, [possibleEmoji, addParticle]);

  const updateParticles = useCallback(() => {
    const { current } = particles;

    // Updated
    for (let i = 0; i < current.length; i += 1) {
      current[i].update();
    }

    // Remove dead particles
    for (let i = current.length - 1; i >= 0; i -= 1) {
      if (current[i].lifeSpan < 0) {
        current[i].die();
        current.splice(i, 1);
      }
    }
  }, [particles]);

  const loop = useCallback(() => {
    requestAnimationFrame(loop);
    updateParticles();
  }, [updateParticles]);

  useLayoutEffect(() => {
    // Bind events
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchstart', onTouchMove);

    loop();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchstart', onTouchMove);
    };
  }, []);

  return null;
});
