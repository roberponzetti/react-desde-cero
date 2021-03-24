import React from 'react'

const cursos = [
    {
      "id": 1,
      "title": "React desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
      "price": 30,
      "profesor": "Robertino Ponzetti"
    },
    {
      "id": 2,
      "title": "Raspberry PI desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/medium/d9b4688a-4959-4b57-af76-836504a94ba8.png",
      "price": 40,
      "profesor": "Gabriel Martin"
    },
    {
      "id": 3,
      "title": "Canvas desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/medium/f39cd39c-da23-44f1-b807-d9721ad7aa84.png",
      "price": 50,
      "profesor": "Otro Profesor"
    },
    {
      "id": 4,  
      "title": "Java desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
      "price": 60,
      "profesor": "Jenifer Paira"
    }
]

const Course = ({ match }) => {

    const cursoActual = cursos.filter( c=> c.id === parseInt(match.params.id))[0]

    return ( 
        <div className="ed-grid m-grid-3">
        {
            cursoActual ? (
                <>
                    <h1 className="m-cols-3">Curso: {cursoActual.title}</h1>
                    <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.title} />
                    <p className="m-cols-2">{cursoActual.profesor}</p>
                    <p className="m-cols-2">{cursoActual.price}</p>
                </>
            ) : ( 
                    <h1>El curso no existe</h1>
                )
        }
        </div>
    )
}

export default Course