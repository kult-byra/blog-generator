import React, { useState, useRef } from 'react';



const ResultCard = props => {
    const [copySuccess, setCopySuccess] = useState('Kopier');
    const [emoji, setEmoji] = useState('📄');
    const [title, setTitle] = useState({props});
    const [clickbaitScore, setClickbait] = useState({props});
    const refContainer = useRef(null);



    return (
      <div className="newResults__card">
          <form className="newResults__input">
            <textarea 
              className="newResults__card__input" 
              type="text" 
              placeholder="Bloggtittel" 
              readOnly value={props.title}
              ref={refContainer}
              />
              
          </form>
          <div className="newResults__metaData">
              <p className="clickbait">Clickbait: {props.clickbaitScore}</p>
              <button 
                className={copySuccess === 'Kopiert!' ? 'copyButton_new' : 'copyButton_new'}
                onClick={(e) => {
                  refContainer.current.select();
                  document.execCommand('copy');
                  e.target.focus();
                  setCopySuccess('Kopiert!');
                  setEmoji('📄');

                  // Reset button text
                  setTimeout(() => {
                    setEmoji('🎉');
                    setCopySuccess('Kopier');
                  }, 2000);

                }}>
              
              <span role="img" aria-label="Emoji">{emoji}</span>{copySuccess}
              </button>
          </div>
        </div>
    );
  }




  
  export default ResultCard;

  