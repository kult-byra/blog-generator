import React, {Component} from 'react';



class ResultCard extends Component {

    state = {
      copySuccess: 'Kopier',
      emoji: '📄'
    }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ 
      copySuccess: 'Kopiert!',
      emoji: '🎉'
    });
    setTimeout(() => {
      this.setState({ 
        copySuccess: 'Kopier',
        emoji: '📄'
      });
    }, 2000);
  };
    
    render() {

      const title = this.props.title;
      const clickBait = this.props.clickbaitScore;

      return (
        <div className="newResults__card">
          <form className="newResults__input">
            <textarea 
              className="newResults__card__input" 
              type="text" 
              placeholder="Bloggtittel" 
              readOnly value={title}
              ref={(textarea) => this.textArea = textarea}
              />
              
          </form>
          <div className="newResults__metaData">
              <p className="clickbait">Clickbait: {clickBait}</p>
              <button 
                className={this.copySuccess === 'Kopiert!' ? 'copyButton_new' : 'copyButton_new'}
                onClick={this.copyToClipboard}
              >
              <span role="img" aria-label="Emoji">{this.state.emoji}</span>{this.state.copySuccess}
              </button>
          </div>
        </div>
      )

    }
      
  }

  
  export default ResultCard;

  