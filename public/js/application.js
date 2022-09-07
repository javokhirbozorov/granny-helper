const formimg = document.getElementById('formimg');

formimg.addEventListener('submit', async (event) => {
  try {
    console.log(event.target, '<========>');
    event.preventDefault();
    const img = event.target.imglink;
    console.log(img, '<====img>');
    const obj = { img };
    const response = await fetch('/GrannyTest', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', // Мы указываем, что тип контента это JSON
      },
      body: JSON.stringify(obj), // В body мы указываем что это объект в JSON - в строке, что бы потом можно было его распарсить
    });
    const result = await response.json(); // распарсиваем obj
    console.log('result ====>', result);
    const text = document.createElement('p');
    text.innerHTML = `
        <div class="card-body">
        <h5 class="card-imglink">${result.imglink}</h5>
        <h6 class="card-title">${result.grannyId}</h6>
        </button>
        <button type="button" href="#" class="btn btn-danger" id={result.id}>
        Воспроизвести
        </button>
      </div>
      `;
  } catch (error) {
    console.log('Ошибка в application', error);
  }
});
