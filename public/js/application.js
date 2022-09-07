const addImgBtn = document.getElementById('addImgBtn');

addImgBtn.addEventListener('click', async (event) => {
  console.log('btn click', event.target.id);
  await fetch('/granny.com/profile');
});
