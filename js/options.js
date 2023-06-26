import {addElement, setElement, insertElement} from "./main.js";

const addButton = document.getElementById("add-btn");
const setButton = document.getElementById("set-btn");
const insertButton = document.getElementById("insert-btn");
const removeButton = document.getElementById("remove-btn");
const removeButtonIcon = document.getElementById("remove-btn-icon");
const selectsContainer = document.getElementById("selects-container")
const selectButtonIndex = document.getElementById("select-btn-index");
const selectButtonData = document.getElementById("select-btn-data");
const removeIndexInput = document.querySelector(".option-input-remove:nth-child(3)");
const removeDataInput = document.querySelector(".option-input-remove:nth-child(4)");



addButton.addEventListener("click", () => {
  let addContainer = addButton.parentElement; 
  let addDataInput = addContainer.querySelector("#data-input");
  addElement(addDataInput.value);
});

setButton.addEventListener("click", () => {
  let setContainer = setButton.parentElement;
  let setIndexInput = setContainer.querySelector("#index-input");
  let setDataInput = setContainer.querySelector("#data-input");
  setElement(setIndexInput.value, setDataInput.value);
});

insertButton.addEventListener("click", () => {
  let insertContainer = insertButton.parentElement;
  let insertIndexInput = insertContainer.querySelector("#index-input");
  let insertDataInput = insertContainer.querySelector("#data-input");
  insertElement(insertIndexInput.value, insertDataInput.value);
});

function showRemoveIndexInput() {
  selectsContainer.style.setProperty("display", "none");
  selectButtonData.classList.remove("show");
  selectButtonIndex.classList.remove("show");
  removeIndexInput.style.setProperty("display", "block");
}

function showRemoveDataInput() {
  selectsContainer.style.setProperty("display", "none");
  selectButtonData.classList.remove("show");
  selectButtonIndex.classList.remove("show");
  removeDataInput.style.setProperty("display", "block");
}

removeButtonIcon.addEventListener("click", e => {
  e.stopPropagation();
  selectButtonIndex.onclick = () => showRemoveIndexInput();
  selectButtonData.onclick = () => showRemoveDataInput();
  selectsContainer.style.setProperty("display", "block");
  removeIndexInput.style.setProperty("display", "none");
  removeDataInput.style.setProperty("display", "none");
  if (selectButtonData.classList.contains("show")) {
    selectButtonData.classList.remove("show");
    selectButtonIndex.classList.remove("show");
    removeButtonIcon.style.setProperty("transform", "rotate(-90deg)")
  } else {
    setTimeout(() => {
      selectButtonData.classList.add("show");
      selectButtonIndex.classList.add("show");
      removeButtonIcon.style.setProperty("transform", "rotate(90deg)");
    }, 10);
  }
})

removeButton.addEventListener("click", e => {
  // console.log("ENTRO")
});



