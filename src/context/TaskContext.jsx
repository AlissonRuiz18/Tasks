import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'
import { useState } from 'react';
import { tasks as data } from '../data/Task';


export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);


    function createTask(task) {
        setTasks([
            ...tasks,
        {
            title: task.title,
            id: tasks.length,
            description: task.description,



        },
    ]);//Esto hace que los demas elementos se vayabn agrando a la lista
    }


    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId))

    }
    useEffect(() => {
        setTasks(data);
    }, []);


    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,

            }}>


            {props.children}

        </TaskContext.Provider>
    )
}

