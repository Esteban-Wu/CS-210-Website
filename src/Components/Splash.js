import SplashButton from "./images/splash_button.png";

function Splash(props) {
    return (
      <div
        className="splash-screen"
      >
        <img
          src={SplashButton}
          alt="Splash Button"
          className="splash-button"
          onClick={props.handler}
        />
      </div>
    );
  }

export default Splash;