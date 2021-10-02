import React from "react";
import {CssBaseline, Button} from "@material-ui/core";

export default function TodoApp({task, tasks, inputTask, addTask}){
    return(
        <div>
            <CssBaseline/>
            <input type="text" onChange={(e) => inputTask(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={() => addTask(task)}>add</Button>
            <ul>
                {
                    tasks.map(function (item, i){
                        return (
                            <li key={i}>{item}</li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

