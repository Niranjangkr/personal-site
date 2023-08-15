import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, StarsCanvas, Blog, Works } from "./components";
import { ErrorBoundary } from "react-error-boundary";
import fallbackRender from "./components/ErrorBoundary";

const Connect = React.lazy(() => import("./components/Connect")); //lazy loading to improve performace of the site

const App = () => {
  return (
  <BrowserRouter>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />  
    <Works />
    <Blog/>
    <ErrorBoundary FallbackComponent={fallbackRender} onReset={()=> {}}>
    <Suspense fallback={<div>Loading...</div>}>
      <Connect />
    </Suspense>
    </ErrorBoundary>
    {/* <Feedbacks />  */} {/*createed but not used need some changes */}
    <div className="relative z-0">
      <Contact />
      <StarsCanvas/>
    </div>
   </div>
  </BrowserRouter>
  )
}

export default App
