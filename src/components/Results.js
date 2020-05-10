import React, {Component} from 'react';
import ResultCard from './ResultCard.js';


class Results extends Component {

    state = {
        value: 'all'
    }


    handleChange(event) {
        this.setState({value: event.target.value});

        console.log(this.state.value);
        
      }


    render() {

      return (
        <div className="output">
          <div className="outer-wrap">
              <div className="wrap">
                  <div className="results">
                      <div className="filter">
                        <h2>Filtrer:</h2>
                        <select value={this.state.value} onChange={this.handleChange.bind(this)}>
                            <option selected value="all">Clickbait-faktor</option>
                            <option value="★★★">Skamløs: ★★★</option>
                            <option value="★★">Middels: ★★</option>
                            <option value="★">Lav: ★</option>
                        </select>
                      </div>
                      <div className="newResults">
                        {/* List of Titles*/}
                        {this.state.value === "all" ? this.props.titleSuggestions.map( (titleSuggestion, index) =>
                            <ResultCard
                                title={titleSuggestion.title}
                                clickbaitScore={titleSuggestion.clickbaitScore}

                            /> 
                        ) : this.props.titleSuggestions
                            .filter( titleSuggestion => titleSuggestion.clickbaitScore === this.state.value)
                            .map( (titleSuggestion, index) => 
                            <ResultCard
                                title={titleSuggestion.title}
                                clickbaitScore={titleSuggestion.clickbaitScore}

                            /> 
                        
                        )}
                        
                          
                      </div>
                  </div>
                  <p className="heart"> </p>
              </div>
          </div>
      </div>
      )
    }
}   


export default Results;