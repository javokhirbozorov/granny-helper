const React = require('react');
const Layout = require('./Layout');

function GrannyMainPage({ cards }) {
  return (
    <>
      <h1>Granny Main Page</h1>
      <img>Some img</img>
      <p>some text</p>
      <button>play souund for text</button>
      {/* {cards.map((el) => (
        <div className="mainDivOfGMP">
          <div className="gmp-body">
            <p>ID from db: {el.id}</p>
            <hr />
            <h5 className="img-link">{el.imglink}</h5>
            <hr />
            <h5 className="grannyId">{el.grannyId}</h5>
            <hr />
            <h4>{el.createdAt.toLocaleDateString()}</h4>
            <button href="#" className="card-sound">
              play sound from text
            </button>
          </div>
        </div>
      ))} */}
    </>
  );
}

module.exports = GrannyMainPage;
