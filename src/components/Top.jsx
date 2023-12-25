/* eslint-disable react/prop-types */
import Icon from "./Icon";

export default function Top({ user }) {
  const middleIndex = Math.round(user.sosmed.length / 2);
  const sosmedLeft = user.sosmed.slice(0, middleIndex);
  const sosmedRight = user.sosmed.slice(middleIndex);
  return (
    <>
      <div className="top">
        <img src={user.image} alt="profile" />
        <div className="social-buttons">
          {sosmedLeft.map((item, index) => (
            <Icon key={index} icon={item.icon} link={item.link} />
          ))}
        </div>
        <div className="social-buttons right">
          {sosmedRight.map((item, index) => (
            <Icon key={index} icon={item.icon} link={item.link} />
          ))}
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
