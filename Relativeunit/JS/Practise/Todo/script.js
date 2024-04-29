// let todolist=[
//     {
//         item: 'first',
//         dueDate: '01/01/2001' ,
//     }
// ];
// display()
// function addTodo()
// {
//     let inputElement = document.querySelector('#Todo-input');
//     let date = document.querySelector('#todo-date');
    
//     let   todoItem = inputElement.value;
//     let  todoDate =  date.value;

//     console.log(todoItem);

//     todolist.push({item:todoItem , dueDate:todoDate});
//     inputElement.value = '';
//     date.value='';

//     display();
// }

// function display(){
//     let Containeritem = document.querySelector(".todo-container ");

//     let newhtml = '';
//     for(let i = 0 ; i < todolist.length ; i++){

//     // let todoitem = todolist[i].item;
//     // let todoDate =  todolist[i].dueDate;
//         let{item,dueDate} = todolist[i];

//         newhtml += `
     
//           <span> ${item} </span>  
//           <span> ${dueDate} </span>
//            <button onclick = "todolist.splice(
//             ${i},1);display();">Delete</button> 
       
//         `;
//     }
//     Containeritem.innerHTML = newhtml;
// } 


let todoList = [
    {
      item: 'Buy Milk',
      dueDate: '4/10/2023'
    },

  ];
  
  displayItems();
  
  function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
  }
  
  function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let {item, dueDate} = todoList[i];
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
  }
 
          // Alternative approach of insert item

  // let currentItem = todoList[i];
  //   newHtml += `
  //     <span>${currentItem.item}</span>
  //     <span>${currentItem.dueDate}</span>
  //     <button class='btn-delete' onclick="deleteItem(${i});">Delete</button>
  //   `;
  

  function addtodo()
  {
    let dateElement = document.querySelector('.ghf');
    let date_Element = document.querySelector('#todo-date');
    todoList.push({item: dateElement, duedate : date_Element});
    dateElement.value = '';
    date_Element.value = '';
    display();

  }


  function display()
  {
    let dii = document.querySelector('.skkd');
    let newHtml ="";
    for (let i = 0; i < todoList.length; i++)
    {
    }
  }