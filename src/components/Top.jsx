/* eslint-disable react/prop-types */
import Icon from "./Icon";

export default function Top({user}) {
  return (
    <>
      <div className="top">
        <div className="social-buttons">
          <Icon icon="facebook" />
          <Icon icon="instagram" />
          <Icon icon="twitter" />
        </div>
        <div className="social-buttons right">
          <Icon icon="linkedin" />
          <Icon icon="github" />
        </div>
        <div className="text">
          <div className="name-wrapper">
            <div className="name">{user.name}</div>
          </div>
          <div className="title">{user.title}</div>
        </div>
        <button className="like">
          <i className="fa fa-heart"></i>
        </button>
      </div>
    </>
  );
}
