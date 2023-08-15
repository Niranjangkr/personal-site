import React, { useState, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from "maath/random/dist/maath-random.esm" //math utility that was downloaded
import { Suspense } from 'react'

const Stars=(props)=>{
  const ref = useRef();

  // const sphere = random.inSphere(Float32Array(5000), { radius: 1.2})
  const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2})

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return(
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref}  positions={sphere} stride={3} frustumCulled { ...props}> {/*frustumculls it checks every frame to see if the objects are within the camera view before rendering the object it optimizes or makes the performance better as only the object within the camera view are rendered*/}
        <PointMaterial 
          transparent
          color = "#f272c8"
          size={0.002}
          sizeAttenuation={true} /* This parameter controls whether the size of the points is affected by their distance from the camera. When set to true, the points will appear smaller as they move farther away from the camera, creating a sense of depth.*/
          depthWrite={false} /* This parameter controls whether the size of the points is affected by their distance from the camera. When set to true, the points will appear smaller as they move farther away from the camera, creating a sense of depth. */
        />
      </Points>
    </group>
  )
}


const StarsCanvas = () =>{
  return(
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas