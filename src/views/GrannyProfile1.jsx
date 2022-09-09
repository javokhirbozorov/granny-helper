const React = require('react');
const Layout = require('./Layout');

function GrannyProfile1() {
  return (
    <Layout>
      <form id="formimg" action="/GrannyTest" method="POST">
        {/* <!-- селект для выбора языка --> */}
        <select id="langs">
          <option value="rus">Русский</option>
          <option value="eng">English</option>
        </select>

        {/* <!-- инпут для загрузки файла изображения --> */}
        <input type="text" id="file" name="imglink" />

        {/* <!-- лог процесса обработки и вывод результата --> */}
        <div id="log" />

        {/* <!-- кнопка Начать обработку --> */}
        <button type="submit" id="start">
          Начать обработку
        </button>
      </form>
    </Layout>
  );
}

module.exports = GrannyProfile1;
