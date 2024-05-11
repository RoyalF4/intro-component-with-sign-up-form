export default function App() {
  return (
    <main className="main">
      <div className="main__text">
        <h1 className="main__heading">Learn to code by watching others</h1>
        <p className="main__subtext">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <p className="main__trial">
        <span className="fw-700">Try it free 7 days</span> then $20/mo.
        thereafter
      </p>

      <form action="" className="main__form">
        <div className="form__input">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="input-field"
            placeholder="First Name"
          />
          <img src="/images/icon-error.svg" alt="" className="icon-error" />
        </div>
        <div className="form__input">
          <input
            type="text"
            name="secondName"
            id="secondName"
            className="input-field"
            placeholder="Last Name"
          />
          <img src="/images/icon-error.svg" alt="" className="icon-error" />
        </div>
        <div className="form__input">
          <input
            type="email"
            name="email"
            id="email"
            className="input-field"
            placeholder="Email"
          />
          <img src="/images/icon-error.svg" alt="" className="icon-error" />
        </div>
        <div className="form__input">
          <input
            type="password"
            name="password"
            id="password"
            className="input-field"
            placeholder="Password"
          />
          <img src="/images/icon-error.svg" alt="" className="icon-error" />
        </div>
        <a href="#" className="form__submit">
          Claim your free trial
        </a>
        <span className="disclaimer">
          By clicking the button, you are agreeing to our
          <a href="#" className="link-important">
            {` Terms and Services`}
          </a>
        </span>
      </form>
    </main>
  );
}

/* 
  Learn to code by watching others

  See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable. 

  Try it free 7 days then $20/mo. thereafter

  First Name 
  Last Name 
  Email Address
  Password

  Claim your free trial 

  By clicking the button, you are agreeing to our Terms and Services
*/
