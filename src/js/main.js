// each ul li button X3 ********************** Note

// let p = document.querySelector("p");
let ul = document.querySelector(".listItem");
let yetParagraph = document.querySelector(".yet");
let finishedItems = document.querySelector(".finishedItems");
let recycleUl = document.querySelector(".recycle");
let reset = document.querySelector("#reset");
let emptyTrash = document.querySelector(".emptyTrash");
let pop = document.querySelector(".pop-container");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let body = document.querySelector("body");
// ================== display and POP none for the trash =================
emptyTrash.style.display = "none";
pop.style.transform = "scale(0)";
// =============================================
// =======================clock ============
// let hours = new Date().getHours();
// let minutes = new Date().getMinutes();
// let seconds = new Date().getSeconds()
// let time = `${hours}:${minutes}:${seconds}`;
// =========================== Time function ===========
let timeFunction = () => {
  return new Date().toLocaleTimeString();
};
// ============================
let user = (e) => {
  e.preventDefault();
  let inputUser = document.querySelector("#input-user").value;
  if (!inputUser == "") {
    let li = document.createElement("li");
    let spanLi = document.createElement("span");
    let list = document.createTextNode(inputUser);
    spanLi.appendChild(list);
    li.appendChild(spanLi);
    ul.appendChild(li);
    // ============= creating the timing as sticker in li

    // let clone = li.cloneNode(true)
    // ul2.appendChild(clone)
    document.querySelector("#input-user").value = "";
    // step 1 create div for btns

    let div = document.createElement("div");
    // step 2 create btns
    let done = document.createElement("button");
    let remindMe = document.createElement("button");
    let recycleBtn = document.createElement("button");
    let trash = document.createElement("button");
    let restore = document.createElement("button");
    // step 3 create the content of btns
    let doneContent = document.createTextNode("✅");
    let remindMeContent = document.createTextNode("⏰");
    let recycleContent = document.createTextNode("🗑️");
    let trashContent = document.createTextNode("❌");
    let restoreContent = document.createTextNode("🔃");
    // step4 push content to btns
    done.appendChild(doneContent);
    remindMe.appendChild(remindMeContent);
    recycleBtn.appendChild(recycleContent);
    trash.appendChild(trashContent);
    restore.appendChild(restoreContent);
    // step 5 push btns to div
    div.appendChild(done);
    div.appendChild(remindMe);
    div.appendChild(recycleBtn);
    div.appendChild(trash);
    div.appendChild(restore);
    // step 6 push div to li
    li.appendChild(div);
    // console.log(localStorage.length)
    // let a = "";
    // if (localStorage.length) {

    //   a = JSON.parse(localStorage.getItem("inputUser"))
    // }
    // localStorage.setItem("inputUser",JSON.stringify([...a, li.innerText])) // ===============
    //! i actually added here the li because everything inside it , so my point is to take the whole li and store it and call it after that , calling in line 178
    let listItem1 = li.innerHTML;
    localStorage.setItem("inputUser", listItem1);

    let sticker = document.createElement("strong"); // -----------------
    sticker.innerHTML = timeFunction(); // ---------------------------- Time

    li.appendChild(sticker); // -----------------
    sticker.classList.add("stickerNote"); // -----------------
    // =================== DONE =======================
    done.addEventListener("click", () => {
      li.classList.add("done");
      li.classList.remove("waiting");
      finishedItems.appendChild(li);
    });
    // =================== Remind Me =======================
    remindMe.addEventListener("click", () => {
      li.classList.remove("done");
      li.classList.add("waiting");
      yetParagraph.appendChild(li);
    });
    // =================== recycleBtn =======================
    recycleBtn.addEventListener("click", () => {
      // li.remove()
      li.classList.remove("done");
      li.classList.add("recycleBg");
      recycleUl.appendChild(li);
      emptyTrash.style.display = "block";

      // recycleUl.appendChild(recycleUl);
    });

    trash.addEventListener("click", () => {
      li.remove();
      li.classList.remove("done");
    });

    reset.addEventListener("click", () => {
      // li.remove()
      emptyTrash.style.display = "none";
      pop.style.transform = "scale(1)";
      body.classList.add("darkBg");
      pop.style.animationName = "popUp";
      pop.style.animationDuration = "1s";
    });

    emptyTrash.addEventListener("click", () => {
      let allRecycleLi = document.querySelectorAll(".recycle li");
      allRecycleLi.forEach((n) => n.remove());
    });

    restore.addEventListener("click", () => {
      ul.appendChild(li);
      li.classList.remove("recycleBg");
    });
    // =========== yes no btn ==========
    yes.addEventListener("click", () => {
      li.remove();
      pop.style.transform = "scale(0)";
      // body.style.backgroundColor ="white"
      body.classList.remove("darkBg");
      pop.style.animationName = "popDown";
      pop.style.animationDuration = "0.5s";
    });
    no.addEventListener("click", () => {
      pop.style.transform = "scale(0)";
      // body.style.backgroundColor ="white"
      body.classList.remove("darkBg");
      pop.style.animationName = "popDown";
      pop.style.animationDuration = "0.5s";
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
    userWelcome.innerHTML =
      userWelInput[0].toUpperCase() + userWelInput.slice(1);

    document.getElementById("userWelInput").value = "";
  } else {
    document.getElementById("userWelInput").placeholder = "Enter your name";
  }
};
let userWelcomeForm = document
  .querySelector(".userWelcomeInput")
  .addEventListener("submit", userWel);

setInterval(timeFunction, 1000);

window.addEventListener("load", () => {
  localStorage.getItem("inputUser");
  // let a = [];
  // if (localStorage.length) {

  //   a = JSON.parse(localStorage.getItem("inputUser"))
  // }
});
