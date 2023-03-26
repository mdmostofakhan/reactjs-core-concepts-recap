 
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
       {/* <LoadPost></LoadPost> */}
       <LoadTodos></LoadTodos>
      <District name='Mymonsing' special='Netrokuna'></District>
      <District name='Borishal' special='SodorGat'></District>
      <District name='Noakhali' special='bolg'></District>
    </div>
  );
}


function LoadTodos () {
  const [todos, setTodos] = useState([1]);
   
  useEffect( ()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => setTodos(data))

  },[])

 return(
     <div>
        <h1>Name:{todos.length}</h1>
       {
        todos.map(todo => <Todos
          names='Todos Man Bar'
        title={todo.title}
        userId={todo.userId}
        ></Todos>)
      }
     
    </div>
   )
}

function Todos(props) {
  return(
    <div className='todosContain'>
      <h1>name:{props.names}</h1>
      <h3>Title:{props.title}</h3>
      <p>UsersId:{props.userId}</p>

    </div>
  )
}






//second functon componets-(1)-
// function LoadPost () {
//  const [posts, setPosts] = useState([]);
 
//  useEffect( () =>{
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => setPosts(data))
//  }, [])

//  return(
//   <div>
//     <h1>Posts:{posts.length}</h1>
//     {
//       posts.map(post => <Post title={post.title} body={post.body}
//         userId={post.userId}
//         ></Post>)
//     }
//   </div>
//  )
// }
// third componets-(1)--
// function Post(props){
//   return(
//     <div style={{backgroundColor: 'lightgray', padding: '15px', margin: '20px', border: '4px solid red', borderRadius: '20px'}}>
//       <h1>Title:{props.title}</h1>
//       <p>Body:{props.body}</p>
//       <p>UserId:{props.userId}</p>
//     </div>
//   )
// }

// style direectiion---
const districtStyle = {
  backgroundColor:'yellow',
  margin:'10px',
  borderRadius:'20px',
  padding:'20px'

}

// function direction--- componet!
function District(props){
const [power, setPower] = useState(1);

const boostPower = ()=>{
const newPower = power * 2;
setPower(newPower);
}

  return(
    <div style={districtStyle}>
      <h1>Name:{props.name}</h1>
      <p>Specialty:{props.special}</p>
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost Power The</button>
    </div>
  )
}

export default App;
