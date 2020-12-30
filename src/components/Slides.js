import React, {useState} from 'react';

const Slides = ({slides}) => { 

    const [value,setValue] = useState(0);

 

    const onClickNext = (e) => {
        let arrayValue;
        e.target.name === 'prev' ? 
        arrayValue = value-1
        :
        arrayValue = value+1

        setValue(arrayValue)
    }

    const onReset = () => {
        setValue(0);
    }
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={onReset}>Restart</button>
                {value === 0 ?
                    <button data-testid="button-prev" name="prev" className="small" onClick={onClickNext} disabled>Prev</button>
                    :
                    <button data-testid="button-prev" name="prev" className="small" onClick={onClickNext}>Prev</button>
                    
                }
                {slides.length === value +1 ?
                    <button data-testid="button-next" name="next" className="small" onClick={onClickNext} disabled>Next</button>
                    :
                    <button data-testid="button-next" name="next" className="small" onClick={onClickNext}>Next</button>
                }
                
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[value].title}</h1>
                <p data-testid="text">{slides[value].text}</p>
            </div>
        </div>
    );

}

export default Slides;