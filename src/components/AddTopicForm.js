import React, {Component} from 'react';


class AddTopicForm extends Component {

    state = {
        verb: '',
        noun: ''
    };

    handleValueChangeVerb = (e) => {
        this.setState({ 
            verb: e.target.value
        })
    }

    handleValueChangeNoun = (e) => {
        this.setState({ 
            noun: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTitles(this.state.verb, this.state.noun);
        this.setState({ 
            verb: '',
            noun: ''
        })
    }

    render () {
        return (
            <form className="inputfields" onSubmit={this.handleSubmit}>
                        <input 
                            id="verbInput" 
                            type="text" 
                            placeholder="Verb" 
                            value={this.state.verb}    
                            onChange={this.handleValueChangeVerb}
                        />
                        <input 
                            id="nounInput" 
                            type="text" 
                            placeholder="Substantiv" 
                            value={this.state.noun}    
                            onChange={this.handleValueChangeNoun}
                        />
                        <input 
                            id="createTitleButton" 
                            type="submit" 
                            value="LAG TITLER" 
                        />
            </form>
            
        )
    }


}




export default AddTopicForm;