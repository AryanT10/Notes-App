// Add Notes
const funB = document.querySelector('.notes_add');
funB.addEventListener('click', () => {
	const addButton = document.querySelector('.notes_add');
	const notesContainer = document.querySelector('.notes_side');
	
	addButton.addEventListener('click', () =>
	{
	  const newNote = document.createElement('div');
	  newNote.classList.add('notes_note');
	  const newNoteContent = `
		<div class="notes_container">
		  <div class="notes_title"></div>
		  <div class="notes_body"></div>
		  <div class="notes_update"></div>
		  <button class="deleteButton"><i class="fa fa-trash"></i></button>
		</div>
	  `;
	  newNote.innerHTML = newNoteContent;
	  notesContainer.appendChild(newNote);
	});	
})

// Submit and show
const funSubmit = document.querySelector('#submit-btn');
funSubmit.addEventListener('click', (e) => {
	//preventDefault() method cancels the event if it is cancelable.
	e.preventDefault();
	const title = document.getElementById('text1').value;
	const content = document.getElementById('output').value;
	//This code is creating a HTML template for a single note in the Notes app
	const note = '<div class="notes_note">' +
				'<div class="notes_container">' +
					'<div class="notes_title">' + title + '</div>' +
					'<div class="notes_body">' + content + '</div>' +
					'<div class="notes_update">' + new Date().toLocaleString() + '</div>' +
					'<button class="deleteButton"><i class="fa fa-trash"></i></button>' +
				'</div>' +
		'</div>';
	//select the first element with a class of notes_side in the HTML document and assigns it to the notesContainer variable.
	const notesContainer = document.querySelector('.notes_side');
	notesContainer.innerHTML += note;
	document.getElementById('text1').value = '';
	document.getElementById('output').value = '';
});
// Delete note
const notesContainer = document.querySelector('.notes_side');
notesContainer.addEventListener('click', function(event) {
  // check if the clicked element has the deleteButton class
  if (event.target.classList.contains('deleteButton')) {
    // find the closest parent element with a notes_note class and remove it
    const note = event.target.closest('.notes_note');
    note.remove();
  }
});

//function to delete
    notesContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('deleteButton')) {
	  e.target.closest('.notes_note').remove();
	} else if (e.target.classList.contains('notes_container')) {
	  const title = e.target.querySelector('.notes_title').textContent;
	  const body = e.target.querySelector('.notes_body').textContent;
	  showNoteDetails(title, body);
	}
  });
//show
function showNoteDetails(title, body) {
	const noteDetails = document.querySelector('.note-details');
	noteDetails.querySelector('.note-title').textContent = title;
	noteDetails.querySelector('.note-body').textContent = body;
	noteDetails.classList.add('show');
  }
  ///
  function hideNoteDetails() {
	const noteDetails = document.querySelector('.note-details');
	noteDetails.classList.remove('show');
  }
///
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', hideNoteDetails);
