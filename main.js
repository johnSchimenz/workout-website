// Add exercise to DOM
const addNewExercise = document.querySelector('#add-exercise');
const selectWorkoutContainer = document.querySelector('#workout-container')
addNewExercise.addEventListener('click', () => {

    // Create <form> element
    const createFormElement = document.createElement('form');
    createFormElement.setAttribute('id', 'form');
    selectWorkoutContainer.appendChild(createFormElement);

    // Create <fieldset> element
    const selectFormElement = document.querySelector('#form');
    const createFieldsetElement = document.createElement('fieldset');
    createFieldsetElement.setAttribute('id', 'fieldset');
    selectFormElement.appendChild(createFieldsetElement);
    
    // Create <label> and <input> element for Exercise Name
    const selectFieldsetElement = document.querySelector('#fieldset');
    const createLabelElement = document.createElement('label');
    createLabelElement.setAttribute('for', 'exercise-name');
    createLabelElement.textContent = 'Exercise Name';
    selectFieldsetElement.appendChild(createLabelElement);

    const createInputElement = document.createElement('input');
    createInputElement.setAttribute('type', 'text');
    createInputElement.setAttribute('id', 'exercise-name');
    createInputElement.setAttribute('name', 'exercise-name');
    selectFieldsetElement.appendChild(createInputElement);

    // Create <label> and <input> element for Sets
    createLabelElement.setAttribute('for', 'sets');
    createLabelElement.textContent = 'Sets';
    selectFieldsetElement.appendChild(createLabelElement);

    createInputElement.setAttribute('type', 'number');
    createInputElement.setAttribute('id', 'sets');
    createInputElement.setAttribute('name', 'sets');
    selectFieldsetElement.appendChild(createInputElement);
    
    // Create <label> and <input> element for Reps
    createLabelElement.setAttribute('for', 'reps');
    createLabelElement.textContent = 'Reps';
    selectFieldsetElement.appendChild(createLabelElement);

    createInputElement.setAttribute('type', 'number');
    createInputElement.setAttribute('id', 'reps');
    createInputElement.setAttribute('name', 'reps');
    selectFieldsetElement.appendChild(createInputElement);

    // Create <label> and <input> element for Load
    createLabelElement.setAttribute('for', 'load');
    createLabelElement.textContent = 'Load';
    selectFieldsetElement.appendChild(createLabelElement);

    createInputElement.setAttribute('type', 'number');
    createInputElement.setAttribute('id', 'load');
    createInputElement.setAttribute('name', 'load');
    selectFieldsetElement.appendChild(createInputElement);

    // Create <label> and <input> element for Comments
    createLabelElement.setAttribute('for', 'comments');
    createLabelElement.textContent = 'Comments (optional)';
    selectFieldsetElement.appendChild(createLabelElement);

    createInputElement.setAttribute('type', 'text');
    createInputElement.setAttribute('id', 'comments');
    createInputElement.setAttribute('name', 'comments');
    selectFieldsetElement.appendChild(createInputElement);
})
