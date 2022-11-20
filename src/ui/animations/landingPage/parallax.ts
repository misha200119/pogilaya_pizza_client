/* eslint-disable @typescript-eslint/no-explicit-any */
import { gsap } from 'gsap';

/* eslint-disable no-param-reassign */
const getRatio = (el: any) => window.innerHeight / (window.innerHeight + el.offsetHeight);

export const parallax = () => {
  gsap.utils.toArray('section').forEach((section: any, i: number) => {
    section.bg = section.querySelector('.bg');

    gsap.fromTo(
      section.bg,
      {
        translateY: () => (i ? `${-window.innerHeight * getRatio(section)}px` : '0px'),
      },
      {
        translateY: () => `${window.innerHeight * (1 - getRatio(section))}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: () => (i ? 'top bottom' : 'top top'),
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true, // to make it responsive
        },
      },
    );
  });
};

export const parallaxContent = () => {
  gsap.fromTo('.p-content', {
    yPercent: -50,
  }, {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
};
