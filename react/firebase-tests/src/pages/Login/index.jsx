import "./styles.css";
import { auth } from "../../firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const ddd = "+55";
  const [phone, setPhone] = useState(ddd);
  const [otp, setOtp] = useState("");

  function generateRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  }

  function verifyOtp(e) {
    if (otp.length === 6) {
      //verify otp
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }
  }

  async function submit(e) {
    e.preventDefault();
    if (phone.length >= 12) {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          console.log(confirmationResult);
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="container">
      <form onSubmit={submit}>
        <div id="recaptcha-container"></div>
        <label>
          seu número:
          <input
            type="tel"
            id="inputPhone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button id="submit" type="submit">
          Enviar
        </button>
        <label>
          dígitos:
          <input
            type="tel"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="button" onClick={() => verifyOtp()}>
            send
          </button>
        </label>
        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
}
