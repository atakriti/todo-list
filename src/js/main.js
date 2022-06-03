// each ul li button X3 ********************** Note

// let p = document.querySelector("p");
let yetParagraph = document.querySelector(".yet");
let finishedItems = document.querySelector(".finishedItems");
let ul = document.querySelector(".listItem");
let recycleUl = document.querySelector(".recycle");
let reset = document.querySelector("#reset")
let emptyTrash = document.querySelector(".emptyTrash")

let user = (e) => {
  e.preventDefault();
  let inputUser = document.querySelector("#input-user").value;
  if (!inputUser == "") {
    let li = document.createElement("li");
    let spanLi = document.createElement("span")
    let list = document.createTextNode(inputUser);
    spanLi.appendChild(list)
    li.appendChild(spanLi);
    ul.appendChild(li);
    
    
    // let clone = li.cloneNode(true)
    // ul2.appendChild(clone)
    document.querySelector("#input-user").value = "";
    // step 1 create div for btns
    let div = document.createElement("div");
    // step 2 create btns
    let done = document.createElement("button");
    let remindMe = document.createElement("button");
    let recycleBtn = document.createElement("button");
    let trash = document.createElement("button")
    // step 3 create the content of btns
    let doneContent = document.createTextNode("✅");
    let remindMeContent = document.createTextNode("⏰");
    let recycleContent = document.createTextNode("🗑️");
    let trashContent = document.createTextNode("❌");
    // step4 push content to btns
    done.appendChild(doneContent);
    remindMe.appendChild(remindMeContent);
    recycleBtn.appendChild(recycleContent);
    trash.appendChild(trashContent);
    // step 5 push btns to div
    div.appendChild(done);
    div.appendChild(remindMe);
    div.appendChild(recycleBtn);
    div.appendChild(trash);
    // step 6 push div to li
    li.appendChild(div);
    
    // =============
    
    // =================== DONE =======================
    done.addEventListener("click", () => {
      li.classList.add("done");
      finishedItems.appendChild(li);
    });
    // =================== Remind Me =======================
    remindMe.addEventListener("click", () => {
      li.classList.remove("done");
      yetParagraph.appendChild(li);
    });
    // =================== Cancel =======================
    recycleBtn.addEventListener("click", () => {
      // li.remove()
      li.classList.remove("done");
      recycleUl.appendChild(li);
emptyTrash.style.display = "block"

      // recycleUl.appendChild(recycleUl);
    });

    trash.addEventListener("click", () => {
      li.remove()
      li.classList.remove("done");
    });

    reset.addEventListener("click", () => {
      li.remove()
      emptyTrash.style.display = "none"
    });

    emptyTrash.addEventListener("click", () => {
      let allRecycleLi = document.querySelectorAll(".recycle li")
      allRecycleLi.forEach(n => n.remove())
    });

  } else {
    document.querySelector("#input-user").placeholder = "Write your toDo list";
  }
};
let submit = document
  .querySelector(".mainForm")
  .addEventListener("submit", user);

// ===============
let userWelcome = document.querySelector(".userWelcome");
let userWel = (e) => {
  e.preventDefault();
  let userWelInput = document.getElementById("userWelInput").value;
  if (!userWelInput == "") {
    userWelcome.innerHTML = userWelInput;
    document.getElementById("userWelInput").value = "";
  } else {
    document.getElementById("userWelInput").placeholder = "Enter your name"
  }
};
let userWelcomeForm = document
  .querySelector(".userWelcomeInput")
  .addEventListener("submit", userWel);
