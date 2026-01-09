const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const toast = document.getElementById("toast");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showToast() {
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1000);
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
  showToast();
}

function renderNotes() {
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const el = document.createElement("div");
    el.className = "note";

    el.innerHTML = `
      <input value="${note.title || "Untitled Note"}" />
      <textarea>${note.text}</textarea>
      <div class="actions">
        <button class="save">Save</button>
        <button class="delete">Delete</button>
      </div>
    `;

    const titleInput = el.querySelector("input");
    const textArea = el.querySelector("textarea");

    titleInput.addEventListener("input", () => {
      notes[index].title = titleInput.value;
    });

    textArea.addEventListener("input", () => {
      notes[index].text = textArea.value;
    });

    el.querySelector(".save").addEventListener("click", saveNotes);

    el.querySelector(".delete").addEventListener("click", () => {
      notes.splice(index, 1);
      saveNotes();
      renderNotes();
    });

    notesContainer.appendChild(el);
  });
}

addNoteBtn.addEventListener("click", () => {
  notes.push({ title: "New Note", text: "" });
  renderNotes();
  saveNotes();
});

renderNotes();