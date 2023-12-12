// Add exercise
const addNewExercise = document.querySelector('#add-exercise');
const selectWorkoutContainer = document.querySelector('#workout-container')
addNewExercise.addEventListener('click', () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'exercise');
    div.textContent = 'New Exercise';
    selectWorkoutContainer.appendChild(div);
})
