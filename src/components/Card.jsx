import Bottom from "./Bottom";
import Top from "./Top";
import user from "./../data.js";

export default function Card() {
  return (
    <div className="card">
      <Top user={user} />
      <Bottom />
    </div>
  );
}
