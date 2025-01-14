import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Select } from "../components";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import { Scene } from "../scene";

const Root = () => {
  const u = useRoot();
  return (
    <AppProvider>
      <div className="box">
        <Select />
        <Leva />
        <Canvas
          shadows
          camera={{
            position: [0, 2, -7],
            fov: 75,
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </AppProvider>
  );
};

export { Root };
