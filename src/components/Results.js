import React, { useState } from 'react';
import ResultCard from './ResultCard.js';


const Results = (props) => {

    const [value, setValue] = useState('all');



      return (
        <div className="output">
          <div className="outer-wrap">
              <div className="wrap">
                  <div className="results">
                      <div className="filter">
                        <h2>Filtrer:</h2>
                        <select 
                            defaultValue={value}
                            onChange={e=> setValue(e.target.value)}>
                            <option selected value="all">Clickbait-faktor</option>
                            <option value="★★★">Skamløs: ★★★</option>
                            <option value="★★">Middels: ★★</option>
                            <option value="★">Lav: ★</option>
                        </select>
                      </div>
                      <div className="newResults">
                        {/* List of Titles*/}
                        {value === "all" && props.formsFilled === true ? props.titleSuggestions.map( (titleSuggestion, index) =>
                            <ResultCard
                                title={titleSuggestion.title}
                                clickbaitScore={titleSuggestion.clickbaitScore}

                            /> 
                        ) : props.titleSuggestions
                            .filter( titleSuggestion => titleSuggestion.clickbaitScore === value)
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


export default Results;