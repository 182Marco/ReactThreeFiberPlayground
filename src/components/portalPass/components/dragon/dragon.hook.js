import * as R from "react";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import * as V from "../../environmentVars";
import { SkeletonUtils } from "three-stdlib";

const useDragon = hover => {
  const group = R.useRef();
  const { scene, animations } = D.useGLTF("./model/dragon.gltf");
  const clone = R.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = F.useGraph(clone);
  const { actions, names } = D.useAnimations(animations, group);

  R.useEffect(() => {
    const animation =
      hover === V.names.dragon
        ? names[names.indexOf("Headbutt")]
        : names[names.indexOf("Flying_Idle")];
    actions[animation].reset().fadeIn(0.5).play();
    return () => actions[animation]?.stop();
  }, [hover, actions]);

  return { group, nodes, materials };
};

export { useDragon };
