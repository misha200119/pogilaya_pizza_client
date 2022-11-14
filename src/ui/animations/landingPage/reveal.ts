/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const animateFrom = (
  elem: any,
  direction?: number,
  duration = 2,
  delay = 0,
) => {
  const _direction = direction ?? 1;
  let x = 0;
  let y = _direction * 100;

  if (elem.classList.contains('gs_reveal_fromLeft')) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains('gs_reveal_fromRight')) {
    x = 100;
    y = 0;
  }

  elem.style.transform = `translate(${x}px, ${y}px)`;
  elem.style.opacity = '0';
  gsap.fromTo(
    elem,
    { x, y, autoAlpha: 0 },
    {
      delay,
      duration,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    },
  );
};

const hide = (elem: any) => {
  gsap.set(elem, { autoAlpha: 0 });
};

const _findNumericValueInClassName = (
  startToFindIndex: number,
  targetString: string,
) => {
  let out = '';

  for (let i = startToFindIndex; i < targetString.length; i += 1) {
    const currentChar = targetString.charAt(i);

    if (currentChar === ' ') {
      break;
    }

    out += currentChar;
  }

  return Number(out);
};

export const applyAnimations = () => {
  gsap.utils.toArray('.gs_reveal').forEach((elem: any) => {
    hide(elem); // assure that the element is hidden when scrolled into view

    const durationClassName = 'gs_duration-';
    const delayClassName = 'gs_delay-';
    const isHaveDuration = (elem.classList.value as string).indexOf(durationClassName);
    const isHaveDelay = (elem.classList.value as string).indexOf(delayClassName);

    let duration = 0;
    let delay = 0;

    if (isHaveDuration !== -1) {
      duration = _findNumericValueInClassName(
        isHaveDuration + durationClassName.length,
        elem.classList.value as string,
      );
    }

    if (isHaveDelay !== -1) {
      delay = _findNumericValueInClassName(
        isHaveDelay + delayClassName.length,
        elem.classList.value as string,
      );
    }

    ScrollTrigger.create({
      trigger: elem,
      onEnter() {
        animateFrom(elem, 1, duration, delay);
      },
      onEnterBack() {
        animateFrom(elem, -1, duration, delay);
      },
      onLeave() {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
};
