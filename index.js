
// parent container
const taskContainer=document.querySelector(".task_container");

// global store

const globalStore=[];




const newCard=({id,imageUrl,taskTitle,taskType,taskDescription})=>
    `
<div class="col-md-6 col-lg-4" id=${id}>
  <div class="card ">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-success  "><i class="fa-solid fa-pencil"></i></button>
      <button type="button" class="btn btn-outline-danger  "><i class="fa-solid fa-trash-can"></i></button>
    </div>
    <img src="${imageUrl}" alt="..." class="image" width="100%" height="200">   
    <div class="card-body">
      <h5 class="card-title">${taskTitle}</h5>
      <p class="card-text">${taskType}</p>
      <h5><span class="badge bg-primary">${taskDescription}</span></h5>
    </div>
    <div class="card-footer text-muted">
      <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
 </div>
</div>
`;

const loadTaskCards=()=>{
  // access local storage
  const getInitialData=localStorage.getItem("tasky");  // null
  if(!getInitialData) return ;



  //convert stringified object to object
const {cards}=JSON.parse(getInitialData);

  // map around the array to generate htmlcard and inject it to dom
  cards.map((card) => {
    const cardNewCard=newCard(card);      // passing object to arrow ft
    taskContainer.insertAdjacentHTML("beforeend",cardNewCard);
    globalStore.push(card);
    
  });
};


const saveChanges=()=>{
    const taskData={
        id:`${Date.now()}`,    // unique no for card id
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdescp").value,


    };  
    const cardData=newCard(taskData);      // passing object to arrow ft
     taskContainer.insertAdjacentHTML("beforeend",cardData);
     globalStore.push(taskData);
     
   // API (ex-localstorage)
   // add to local storage
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));

};


// issues -->

// the modal was not closing upon adding new card (solved)
// the cards are deleted after refresh  --> localstorage(5mb of data per website (browser storage)) 

// features-->
// delete modal feature
// open task
// edit




