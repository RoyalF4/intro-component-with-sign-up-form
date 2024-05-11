export default function App() {
  return (
    <main className="main">
      <h1 className="heading">Learn to code by watching others</h1>
      <p className="subtext">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
      <a href="#">Try it free 7 days then $20/mo. thereafter</a>
      <form action="" className="form">
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="input-field"
        />
        <input
          type="text"
          name="secondName"
          id="secondName"
          className="input-field"
        />
        <input type="email" name="email" id="email" className="input-field" />
        <input
          type="password"
          name="password"
          id="password"
          className="input-field"
        />
        <a href="#">Claim your free trial </a>
        <span className="disclaimer">
          By clicking the button, you are agreeing to our Terms and Services
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
