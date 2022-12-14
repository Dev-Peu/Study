import "./styles.css";
import { auth } from "../../firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const ddd = "+55";
  const [phone, setPhone] = useState(ddd);

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

  async function submit(e) {
    e.preventDefault();
    if (phone.length >= 12) {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirm) => {
          console.log(confirm);
          window.confirmationResult = confirm;
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
          4 dígitos:
          <input type="tel" maxLength={4} />
        </label>
        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
}
