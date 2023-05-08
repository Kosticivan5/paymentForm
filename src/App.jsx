import "./index.css";
import { AiOutlineLock, AiOutlinePlusCircle } from "react-icons/ai";

function App() {
  return (
    <main>
      <form className="form">
        <article className="info">
          <h2 className="title title__info">info</h2>
          <p>Enter your email address</p>
          <input type="email" placeholder="team@checkforpatent.com" />
          <h2 className="title">Product 1</h2>
          <p>Enter main keyword for the product</p>
          <input type="text" placeholder="for example, sylicon wine cup" />
          <p>Enter link to the similar product as a reference</p>
          <input type="text" placeholder="https://..." />
        </article>
        <article className="form-control">
          <button className="add-products-btn">
            Add more products <AiOutlinePlusCircle />
          </button>
          <p>We offer discount up to 36% for multiple checks</p>
          <button className="submit-btn">Submit and Pay 24.99 USD</button>
          <h4>
            <AiOutlineLock />
            Secure payment with Stripe
          </h4>
        </article>
      </form>
    </main>
  );
}

export default App;
