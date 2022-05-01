import {withTiming, withDelay} from 'react-native-reanimated';

export const FadeInDown = (delay = 0) => {
  return values => {
    'worklet';
    return {
      animations: {
        transform: [
          {
            translateY: withDelay(delay, withTiming(0, {duration: 500})),
          },
        ],
        opacity: withDelay(delay, withTiming(1, {duration: 400})),
      },
      initialValues: {
        transform: [{translateY: 100}],
        opacity: 0,
      },
    };
  };
};
export const FadeOutUp = (delay = 0) => {
  return values => {
    'worklet';
    return {
      animations: {
        transform: [
          {
            translateY: withDelay(delay, withTiming(-100, {duration: 400})),
          },
        ],
        opacity: withDelay(delay, withTiming(0, {duration: 300})),
      },
      initialValues: {
        transform: [{translateY: 0}],
        opacity: 1,
      },
    };
  };
};
export const FadeOutRight = (delay = 0, index = 1) => {
  return values => {
    'worklet';
    return {
      animations: {
        transform: [
          {
            translateX: withDelay(delay, withTiming(-100, {duration: 400})),
          },
        ],
        opacity: withDelay(delay, withTiming(0, {duration: 100})),
      },
      initialValues: {
        transform: [{translateX: 0}],
        opacity: 1,
      },
    };
  };
};
export const FadeInLeft = (delay = 0, index = 0) => {
  return values => {
    'worklet';
    return {
      animations: {
        transform: [
          {
            translateX: withDelay(delay, withTiming(0, {duration: 400})),
          },
        ],
        opacity: withDelay(delay, withTiming(1, {duration: 100})),
      },
      initialValues: {
        transform: [{translateX: -300 * (index + 1)}],
        opacity: 0,
      },
    };
  };
};
export const FadeInLeftLong = (delay = 0, index = 0) => {
  return values => {
    'worklet';
    return {
      animations: {
        transform: [
          {
            translateX: withDelay(delay, withTiming(0, {duration: 500})),
          },
        ],
        opacity: withDelay(delay, withTiming(1, {duration: 400})),
      },
      initialValues: {
        transform: [{translateX: -100 * (index + 1)}],
        opacity: 0,
      },
    };
  };
};
export const FadeInRight = (delay = 0) => {
  return values => {
    'worklet';
    return {
      animations: {
        transform: [
          {
            translateX: withDelay(delay, withTiming(0, {duration: 400})),
          },
        ],
        opacity: withDelay(delay, withTiming(1, {duration: 400})),
      },
      initialValues: {
        transform: [{translateX: 100}],
        opacity: 0,
      },
    };
  };
};

// export class FadeInDown {
//   build = () => {
//     return () => {
//       'worklet';
//       return {
//         animations: {
//           opacity: delayFunction(delay, animation(1, config)),
//           transform: [{translateY: delayFunction(delay, animation(0, config))}],
//         },
//         initialValues: {
//           opacity: 0,
//           transform: [{translateY: 25}],
//           ...initialValues,
//         },
//         callback: callback,
//       };
//     };
//   };
// }

// export class FadeOutUp {
//   build = () => {
//     return () => {
//       'worklet';
//       return {
//         animations: {
//           opacity: delayFunction(delay, animation(0, config)),
//           transform: [
//             {translateY: delayFunction(delay, animation(-25, config))},
//           ],
//         },
//         initialValues: {
//           opacity: 1,
//           transform: [{translateY: 0}],
//           ...initialValues,
//         },
//         callback: callback,
//       };
//     };
//   };
// }
