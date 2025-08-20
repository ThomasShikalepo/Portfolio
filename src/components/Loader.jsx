import { Html,useProgress } from "@react-three/drei"

const Loader = () => {
    const {progress} = useProgress();
  return (
    <Html center>
        {progress}%laoded
    </Html>
  )
}

export default Loader