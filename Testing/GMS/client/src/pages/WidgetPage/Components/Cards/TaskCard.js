import React from "react";
import TaskFooter from "./TaskCards/TaskFooter";
import TaskHeader from "./TaskCards/TaskHeader";
import TaskCardTable from "./TaskCards/TaslCardTable";

const TaskCard = () => {
    return (
        <div class="card  card-tasks">
            <TaskHeader Category="Backend development" Title="Tasks"/>
            <TaskCardTable Text='"Sign contract for " What are conference organizers afraid off?"' checked="True" />
            <TaskCardTable Text='Lines From Great Russian Literature? Or E-mails From My Boss?' />
            <TaskCardTable Text='Flooded: One year later, assessing what was lost
                                and what was found when a ravaging rain swept through metro Detroit' checked="True" />
            <TaskFooter Icon="now-ui-icons loader_refresh spin" Content="Updated 3 minutes ago"/>
        </div>
    );
}

export default TaskCard;