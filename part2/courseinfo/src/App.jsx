const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ({name, exercises}) => {
  return (
    <li>{name} {exercises}</li>
  )
}

const Total = ({ content }) => {
  const x = content.map(part => part.exercises )
  // console.log(x)

  const sum = x.reduce((x, y) => {
    return x + y
  }, 0)
  
  // for (let i = 0; i < content.length; i++) {
  //   sum += content[i].exercises
  // }

  return (
    <p><strong>Total of {sum} exercises</strong></p>
  )
}

const Content = ({content}) => {
  return content.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)

}

const Course = ({course}) => {
  return (
    <>
    <Header name={course.name} />
    <Content content={course.parts} />
    <Total content={course.parts}/>
    </>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
      {
        name: 'To be cool',
        exercises: 451,
        id: 5
      }
    ]
  }



  return <Course course={course} />
}

export default App