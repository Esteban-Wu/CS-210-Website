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
            <button 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:'5px'
                }}
                onClick = {props.handler}
            >
                Press me!
            </button>
        </div>
    );
}

export default Splash;