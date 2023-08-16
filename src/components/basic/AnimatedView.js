import { View, AnimatePresence } from "moti";

const AnimatedView = ({ children }) => {
  return (
    <View
      from={{
        opacity: 0,
        scale: 0.9,
        translateY: 50
      }}
      animate={{
        opacity: 1,
        scale: 1,
        translateY: 0
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        translateY: -50
      }}
      transition={{duration: 2000}}
      exitTransition={{
        type: "timing",
        duration: 2500,
      }}
    >
      {children}
    </View>
  );
};

export default AnimatedView;
