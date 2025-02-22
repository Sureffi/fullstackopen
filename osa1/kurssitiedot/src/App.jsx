const Header = (props) => {
  
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {

  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = ({ parts }) => {

  return (
    <div>
        {parts.map(part => (
          <Part name={part.name} exercises={part.exercises}/>
        ))}
    </div>
  )
}

const Total = ({ parts }) => {

  const total = parts.map(part => part.exercises).reduce((a, b) => a + b, 0)

  return (
    <p>
      Number of exercises {total}
    </p>
  )
}





const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App