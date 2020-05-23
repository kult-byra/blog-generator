import React, { useState } from 'react';


const AddTopicForm = (props) => {

    const [verbInput, setVerbInput] = useState('');
    const [nounInput, setNounInput] = useState('');


  



        return (
            <form className="inputfields" onSubmit={(e) => {
                e.preventDefault();
                props.createTitles(verbInput, nounInput);

                setVerbInput('');
                setNounInput('');
        
            }}>
                        <input 
                            id="verbInput" 
                            type="text" 
                            placeholder="Verb" 
                            value={verbInput}    
                            onChange={e=> setVerbInput(e.target.value)}
                        />
                        <input 
                            id="nounInput" 
                            type="text" 
                            placeholder="Substantiv" 
                            value={nounInput}     
                            onChange={e=> setNounInput(e.target.value)}
                        />
                        <input 
                            id="createTitleButton" 
                            type="submit" 
                            value="LAG TITLER" 
                        />
            </form>
            
        )
    


}




export default AddTopicForm;