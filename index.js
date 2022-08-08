console.log("Just started scripting");

const saveChanges=()=>{
    const taskData={
        id:`${Date.now()}`,    // unique no for card id
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdescp").value,


    };
    console.log(taskData);
};