
import React from 'react';

import AddTopicForm from './AddTopicForm.js';


const Header = (props) => {

    return (
      <div className="intro">
        <div className="outer-wrap">
          <div className="wrap">
            <p className="introText">Kult Byrås</p>
            <h1 className="heading">Bloggtittel Generator</h1>

            <AddTopicForm 
                createTitles={props.createTitles}
                verb={props.verb}
                noun={props.noun}
            />
            
            <p className="help-text">
                <strong>F.eks </strong> "Selge + bil" eller "Bake + kake"                
            </p>
          </div>
        </div>
      </div>
      )
    
  }
  

  export default Header;