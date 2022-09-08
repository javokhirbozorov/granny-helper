console.log('CLIENT');

// const formimg = document.getElementById('formimg');

// formimg?.addEventListener('submit', async (event) => {
//   try {
//     console.log(event.target, '<========>');
//     event.preventDefault();
//     const img = event.target.imglink;
//     console.log(img, '<====img>');
//     const obj = { img };
//     const response = await fetch('/GrannyTest', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json', // Мы указываем, что тип контента это JSON
//       },
//       body: JSON.stringify(obj), // В body мы указываем что это объект в JSON - в строке, что бы потом можно было его распарсить
//     });
//     const result = await response.json(); // распарсиваем obj
//     console.log('result ====>', result);
//     const text = document.createElement('p');
//     text.innerHTML = `
//         <div class="card-body">
//         <h5 class="card-imglink">${result.imglink}</h5>
//         <h6 class="card-title">${result.grannyId}</h6>
//         </button>
//         <button type="button" href="#" class="btn btn-danger" id={result.id}>
//         Воспроизвести
//         </button>
//       </div>
//       `;
//   } catch (error) {
//     console.log('Ошибка в application', error);
//   }
// })

const { body } = document;

const addImgform = document.getElementById('addImgForm');
console.log(body);
const addImgFormInput = addImgform.elements[0];
const postsList = document.querySelector('.postsList');

addImgform.addEventListener('submit', async (e) => {
  e.preventDefault();

  const imgUrl = addImgFormInput.value;

  const regExp = /^https?:\/\/.{1,}.(jpg|png)$/i;

  const URL_IS_VALID = regExp.test(imgUrl);

  if (URL_IS_VALID) {
    const res = await fetch('/grandChildProfile', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ imgUrlInput: imgUrl }),
    });

    if (res.ok) {
      const data = await res.json();
      const imgCard = cardTemplate(data);

      postsList.insertAdjacentHTML('afterbegin', imgCard);
    } else {
      console.log(res);
    }
  } else {
    addImgFormInput.style.border = '1px solid red';
    addImgFormInput.style.color = 'red';
    addImgFormInput.value = 'Invalid url';

    setTimeout(() => {
      addImgFormInput.style.border = '';
      addImgFormInput.style.color = '';
      addImgFormInput.value = '';
    }, 1000);
  }
});

function cardTemplate(data) {
  return `
  <div class="col-6 card m-3 p-0" key={grannyPost.id} style={{ width: '30rem' }}>
    <img src="${data.imglink}" class="card-img-top h-3" alt="Granny Post" style={{ width: '30rem', height: '12rem' }} />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/" class="btn btn-success btn-lg">Play</a>
    </div>
  </div>
  `;
}

const addGrannyBtn = document.querySelector('.addGrannyBtn');
const grannyDeleteBtn = document.querySelectorAll('.grannyDeleteBtn');

addGrannyBtn.addEventListener('click', (e) => {
  const background = document.createElement('div');
  background.classList.add('background');

  const grannniesCounter = document.querySelector('.counter');

  const closeGrannyWindow = document.querySelector('.closeGrannyWindow');
  const grannyWindow = document.querySelector('.addGrannyWindow');

  const grannyUserList = document.querySelector('.usersList');
  const usersListItem = document.querySelector('.usersListItem');

  const grannySearchInputBtn = document.querySelector('.grannySearchInputBtn');
  const grannySearchInput = document.querySelector('.grannySearchInput');

  body.prepend(background);
  grannyWindow.style.display = 'block';

  grannySearchInputBtn.addEventListener('click', async (e) => {
    const inputValue = grannySearchInput.value;

    if (inputValue.length > 1) {
      const res = await fetch('/grandChildProfile/addGranny', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email: inputValue }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);

        const granny = `
        <div class="alert alert-secondary usersListItem" role="alert">
          ${data.email}
          <button type="button" class="btn btn-danger sm-0 grannyDeleteBtn">Удалить</button>
        </div>
        `;
        grannyUserList.insertAdjacentHTML('afterbegin', granny);
        grannniesCounter.textContent = +grannniesCounter.textContent + 1;
      } else {
        console.log(res);
      }
    }
  });

  grannyDeleteBtn.forEach((el) => {
    el.addEventListener('click', async (e) => {
      console.log(e);
      const res = await fetch('/grandChildProfile/deleteGranny', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id: e.target.dataset.id }),
      });

      usersListItem.remove();
      grannniesCounter.textContent = +grannniesCounter.textContent - 1;
    });
  });

  closeGrannyWindow.addEventListener('click', () => {
    grannyWindow.style.display = 'none';
    background.remove();
  });
});

function addGrannyWindowTemplate() {
  return `
  <div class="addGrannyWindow">
    <div class='closeGrannyWindow'></div>
    <div class="input-group">
      <input type="text" class="form-control grannySearchInput" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary grannySearchInputBtn" type="button">Добавить</button>
      </div>
    </div>
 
    <div class="usersList">
      <div class="alert alert-secondary usersListItem" role="alert">
        Марья Петровна
        <button type="button" class="btn btn-danger sm-0">Удалить</button>
      </div>
    </div>
  </div>
  `;
}
