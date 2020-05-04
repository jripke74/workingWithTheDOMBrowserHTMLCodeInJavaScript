const addMovieModalEl = document.getElementById('add-modal');
const startAddMovieButtonEl = document.querySelector('header button');
const backdropEl = document.getElementById('backdrop');
const cancelAddMovieButtonEl = addMovieModalEl.querySelector('.btn--passive');
const confirmAddMovieButtonEl = cancelAddMovieButtonEl.nextElementSibling;
const userInputs = addMovieModalEl.querySelectorAll('input');
const entryTextSectionEl = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSectionEl.style.display = 'block';
  } else {
    entryTextSectionEl.style.display = 'none';
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdropEl.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModalEl.classList.toggle('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButtonEl.addEventListener('click', toggleMovieModal);
backdropEl.addEventListener('click', backdropClickHandler);
cancelAddMovieButtonEl.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButtonEl.addEventListener('click', addMovieHandler);
