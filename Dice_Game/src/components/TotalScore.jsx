import React from 'react'
import styled  from 'styled-components'


function TotalScore() {
    return (
        <main>
            <div>
                <h1>0</h1>
                <p>Total Score</p>
            </div>
        </main>
    )
}

export default TotalScore;

const ScoreContaine=styled.div`
    h1{
        font-size:6.25rem;
    }
    p{
        font-weight:31.25rem;
        font-size:1.5rem;
    }
`;