const addMovieModalEl = document.getElementById('add-modal');
const startAddMovieButtonEl = document.querySelector('header button');
const backdropEl = document.getElementById('backdrop');
const cancelAddMovieButtonEl = addMovieModalEl.querySelector('.btn--passive');

const toggleBackdrop = () => {
  backdropEl.classList.toggle('visible');
}

const toggleMovieModal = () => {
  addMovieModalEl.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButtonEl.addEventListener('click', toggleMovieModal);
backdropEl.addEventListener('click', backdropClickHandler);
cancelAddMovieButtonEl.addEventListener('click', cancelAddMovie);