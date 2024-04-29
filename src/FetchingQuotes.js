import React from "react";
import getStyles from './styles';

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            red: 0,
            green: 0,
            blue: 0,
            opacity: 0
        }

        this.randomQuote = this.randomQuote.bind(this);
    }

    componentDidMount() {
        this.fetchQuote();
        this.updateBackgroundColor();
    }

    async fetchQuote() {
        this.setState({ opacity: 0 }, async () => {
            setTimeout(async () => {
                try {
                    const response = await fetch('https://api.quotable.io/random');
                    const data = await response.json();
                    this.setState({
                        quote: data.content,
                        author: data.author,
                        opacity: 1
                    });
                    this.updateBackgroundColor();
                } catch (error) {
                    console.log('Error fetching and parsing data', error);
                    this.setState({ opacity: 1 });
                }
            }, 500);
        });
    }

    randomQuote() {
        this.fetchQuote();      
    }

    updateBackgroundColor() {
        const red = Math.floor(Math.random() * 101);
        const green = Math.floor(Math.random() * 101);
        const blue = Math.floor(Math.random() * 101);
        this.setState({ red, green, blue });
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    render() {

        const { quote, author, red, green, blue } = this.state;
        const textColor = `rgb(${red}, ${green}, ${blue})`;
        const styles = getStyles(textColor, this.state.opacity);        

        return (
            <div id="quote-box" style={styles.quoteBox}>
                <p id="text" style={{...styles.text, opacity: this.state.opacity}}><i class="fa fa-quote-left"></i> {this.state.quote}</p>
                <p id="author" style={{...styles.author, opacity: this.state.opacity}}>-{this.state.author}</p>
                <div id="buttons" style={styles.buttons}>
                    <a
                        class="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_blank"
                        style={{...styles.button, textDecoration: 'none'}}
                        href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(this.state.quote)}" - ${encodeURIComponent(this.state.author)}`}>
                        Tweet it!<i class="fa fa-twitter" style={styles.twitter}></i>
                    </a>
                    <button id="new-quote" style={{...styles.button}} onClick={this.randomQuote}>New Quote</button>
                </div>
            </div>
        );
    }
}

export default Quotes; 
