import * as C from "./components";
import * as D from "@react-three/drei";
import { useCartFollowingMidget } from "./cartFollowingMidget.hook";
import { AxesHelper } from "three";
import { vars } from "./fixedVars";

const CartFollowingMidget = () => {
  const h = useCartFollowingMidget();

  return (
    <>
      <C.CartSceneOrbitControls />
      <ambientLight intensity={0.2} />
      <D.Environment preset="sunset" intensity={0.7} blur={0.8} />
      <group position={[0, -0.6, 0]}>
        <C.Ankou
          rotation-y={-Math.PI / 2}
          position={[-1.5, -0.02, 0]}
          scale={1.3}
        />
        <C.YoungKorrigan
          rotation-y={-Math.PI / 2}
          position={[1.5, 0, 0]}
          scale={4}
        />
        {[...Array(vars.nearRockN)].map((_, i) => (
          <C.MovingItem
            xSpread={vars.nearRockMaxX}
            speed={vars.nearRockSpeed}
            key={i}
          >
            <C.Rock
              position={[
                h.getPosition(i, vars.nearRockMaxX, vars.nearRockN),
                0,
                vars.nearRockZposition,
              ]}
              scale={vars.nearRockScale}
            />
          </C.MovingItem>
        ))}
        {[...Array(vars.farRockN)].map((_, i) => (
          <C.MovingItem
            xSpread={vars.farRockMaxX}
            speed={vars.farRockSpeed}
            key={i}
          >
            <C.Rock
              position={[
                h.getPosition(i, vars.farRockMaxX, vars.farRockN),
                0,
                vars.farRockZposition,
              ]}
              scale={vars.farRockScale}
            />
          </C.MovingItem>
        ))}
        {[...Array(vars.distantRockN)].map((_, i) => (
          <C.MovingItem
            xSpread={vars.distantRockMaxX}
            speed={vars.distantRockSpeed}
            key={i}
          >
            <C.Rock
              position={[
                h.getPosition(i, vars.distantRockMaxX, vars.distantRockN),
                0,
                vars.distantRockZposition,
              ]}
              scale={vars.distantRockScale}
            />
          </C.MovingItem>
        ))}

        {[...Array(vars.lampN)].map((_, i) => (
          <C.MovingItem xSpread={vars.lampMaxX} speed={vars.lampSpeed} key={i}>
            <C.LampPost
              position={[
                h.getPosition(i, vars.lampMaxX, vars.lampN),
                0,
                vars.lampZpoistion,
              ]}
              scale={vars.lampScale}
            />
          </C.MovingItem>
        ))}
        {[...Array(vars.nearTreeN)].map((_, i) => (
          <C.MovingItem
            xSpread={vars.nearTreeMaxX}
            speed={vars.nearTreeSpeed}
            key={i}
          >
            <C.Tree
              position={[
                h.getPosition(i, vars.nearTreeMaxX, vars.nearTreeN),
                0,
                vars.nearTreeZposition,
              ]}
              scale={vars.nearTreeScale}
            />
          </C.MovingItem>
        ))}
        {[...Array(vars.farTreeN)].map((_, i) => (
          <C.MovingItem
            xSpread={vars.farTreeMaxX}
            speed={vars.farTreeSpeed}
            key={i}
          >
            <C.Tree
              position={[
                h.getPosition(i, vars.farTreeMaxX, vars.farTreeN),
                0,
                vars.farTreeZposition,
              ]}
              scale={vars.farTreeScale}
            />
          </C.MovingItem>
        ))}
        {[...Array(vars.distantTreeN)].map((_, i) => (
          <C.MovingItem
            xSpread={vars.distantTreeMaxX}
            speed={vars.distantTreeSpeed}
            key={i}
          >
            <C.Tree
              position={[
                h.getPosition(i, vars.distantTreeMaxX, vars.distantTreeN) - 1,
                0,
                vars.distantTreeZposition,
              ]}
              scale={vars.distantTreeScale}
            />
          </C.MovingItem>
        ))}
        <D.ContactShadows scale={[16, 16]} opacity={0.42} />
        <primitive object={new AxesHelper(5)} />
      </group>
    </>
  );
};

export { CartFollowingMidget };
