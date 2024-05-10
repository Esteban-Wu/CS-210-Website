import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityGame() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    // loaderUrl: "/Mercedes1/Build/Mercedes1.loader.js",
    dataUrl: "/Mercedes2/Build/Mercedes2.data",
    frameworkUrl: "/Mercedes2/Build/Mercedes2.framework.js",
    codeUrl: "/Mercedes2/Build/Mercedes2.wasm",
  });

  return (
    <div>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        src="/Mercedes2/index.html"
      />
    </div>
  );

}

export default UnityGame