import React from 'react';
import '../css/sphere.css'; // Import your custom CSS for styling

const Sphere = ({ imgUrl }) => {
  return (
    <div className="sphere-container">
      <div className="sphere-image">
        <img src={imgUrl} alt="Sphere" className="animated-image" />
      </div>
    </div>
  );
};

const SphereCanvas = ({ icon }) => {
  return (
    <div className="canvas-container">
      <Sphere imgUrl={icon} />
    </div>
  );
};

export default SphereCanvas;





// ../css/sphere.css