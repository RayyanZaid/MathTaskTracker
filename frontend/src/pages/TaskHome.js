import { useEffect, useState } from "react";
import Navbar from '../componenets/NavbarForTasks'


const TaskHome = () => {
    const [tasks, setTasks] = useState(null);
    useEffect( () => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            const json = await response.json(); // will give us an array of objects from the get all workouts API GET request

            if(response.ok) {
                setTasks(json);
            }
        }

        fetchTasks()

        
    }, [])
    return (
        
        <form action="/">
        <Navbar/>
        <div className="tasks">
        
            {tasks && tasks.map((task) => (
                <div>
                    <input type="checkbox" />
                    <p key={task._id}>{task.title}</p>
                </div>
                
            ))}
            <input type="submit" value="Submit"></input>
        </div>
      </form>
    )
  }
  
  export default TaskHome