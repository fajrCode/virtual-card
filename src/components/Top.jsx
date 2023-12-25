export default function Top() {
  return (
    <>
      <div className="top">
        <div className="social-buttons">
          <button>
            <i className="fa fa-facebook"></i>
          </button>
          <button>
            <i className="fa fa-instagram"></i>
          </button>
          <button>
            <i className="fa fa-twitter"></i>
          </button>
        </div>
        <div className="social-buttons right">
          <button>
            <i className="fa fa-linkedin"></i>
          </button>
          <button>
            <i className="fa fa-github"></i>
          </button>
        </div>
        <div className="text">
          <div className="title">
            <h2>Fajri Arvandi</h2>
          </div>
          <div className="name-wrapper">
            <small>Back-End Developer</small>
          </div>
        </div>
        <button className="like">
          <i className="fa fa-heart"></i>
        </button>
      </div>
    </>
  );
}
