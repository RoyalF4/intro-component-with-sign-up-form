import Form from './Form';

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
      <Form />
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
