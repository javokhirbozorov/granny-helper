const React = require('react');
const Layout = require('./Layout');

function GrandchildMain({ img }) {
  console.log('IMG', img[0]);
  return (
    <Layout>
      <h1>Grand Child</h1>
      {img.map((el) => (
        <div key={el.id} className="card" style={{ width: '18rem' }}>
          <img src={el.imglink} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">ID нашей бабули ===> {el.id}</p>
          </div>
        </div>
      ))}
    </Layout>
  );
}

module.exports = GrandchildMain;
