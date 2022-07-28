import React from 'react'
import { useNavigate } from 'react-router-dom';

function Tutorials() {

  const navigate = useNavigate();
  return (
    <div className="container">
        <h1>Tutoriel: Intro to React</h1>
        <button className="btn btn-outline-primary mt-4"
          onClick={() => navigate('/community')}
        >vers Community</button>
    </div>
  )
}

export default Tutorials
