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

const Header = ({name}) => {
    return (<h2>{name}</h2>)
}

const Course = ({courses}) => {
  return(
      courses.map(course => {
        // console.log(course.name, course.id)
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content content={course.parts} />
            <Total content={course.parts}/>
          </div>
        )
      }
    )
  )
}


export default Course