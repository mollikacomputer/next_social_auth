import Link from "next/link";

const login = () => {
  return (
      <div className="card w-96 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <Link href="/"> Back to Home page </Link>
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn">Login With Google</button>
            <button className="btn"> Login With Github </button>
            <button className="btn">Login wigh Facebook </button>
          </div>
        </div>
      </div>
  );
};

export default login;
