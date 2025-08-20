import { Html,useProgress } from "@react-three/drei"

const Loader = () => {
    const {progress} = useProgress();
  return (
    <Html center className="text-xl font-black font-bold text-center">
        {progress}%Laoded
    </Html>
  )
}

export default Loader