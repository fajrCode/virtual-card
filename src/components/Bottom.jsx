/* eslint-disable react/prop-types */
export default function Bottom({ user }) {
  return (
    <>
      <div className="bottom">
        <div className="desc">
          <p>{user.desc.intro}</p>
          <p>{user.desc.about}</p>
        </div>
        <div className="buttons">
          {user.skills.map((item, index) => (
            <button
              key={index}
              onClick={() => window.open(item.link, "_blank")}
            >
              <i className={`fa fa-${item.icon}`}></i>
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
