// styles.js
const getStyles = (textColor, opacity) => ({
    quoteBox: {
        borderRadius: '5px',
        position: 'relative',
        width: '450px',
        padding: '40px 50px',
        display: 'table',
        backgroundColor: 'white',
        margin: 'auto',
    },
    text: {
        textAlign: 'center',
        fontSize: '1.75em',
        width: '450px',
        color: textColor,
        transition: 'opacity 0.5s ease',
        opacity: opacity,
        fontWeight: '500'
    },
    author: {
        textAlign: 'right',
        fontSize: '1.5em',
        color: textColor,
        width: '450px',
        paddingTop: '20px',
        transition: 'opacity 0.5s ease',
        opacity: opacity,
    },
    buttons: {
        width: '450px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px 0 0 0',
    },
    button: {
        height: '38px',
        border: 'none',
        borderRadius: '3px',
        color: 'white',
        backgroundColor: textColor,
        fontSize: '1.2em',
        padding: '8px 18px',
        opacity: '1',
        cursor: 'pointer',
        transition: 'background 0.3s ease-out'
    },
});

export default getStyles;
