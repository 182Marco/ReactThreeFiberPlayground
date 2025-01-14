import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useAppContext } from "../../context/useAppContext";

const useDog = () => {
  const u = useAppContext();
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);
  const animationsList = Object.keys(animations?.actions);

  useEffect(() => {
    u.setBtns(animationsList);
  }, [animationsList, u.setBtns]);

  const playAnimation = () =>
    animations?.actions?.[u.state.currentAction]?.play();

  const isWorking = (animation) => animations.actions[animation].isRunning();
  const isStateMangerAnimation = (animation) =>
    u?.state?.currentAction === animations.actions[animation]._clip.name;

  useEffect(() => {
    Object.keys(animations.actions).forEach((k) => {
      if (isWorking(k) && !isStateMangerAnimation(k))
        animations.actions[k].stop();
    });

    playAnimation();
  }, [u?.state?.currentAction]);

  return { animationsList, model };
};

export { useDog };
