import SplashButton from "./images/splash_button.png";

function Splash(props) {
    return ( 
        <div
        style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img 
                src={SplashButton}
                alt="Splash Button"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '5px',
                    cursor: 'pointer' // Add cursor pointer to indicate it's clickable
                }}
                onClick={props.handler}
            />
        </div>
    );
}

export default Splash;