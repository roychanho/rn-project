import axios from "axios";

const API_KEY = "AIzaSyAyqOnAL4ykFT7WU0tkXlZrT31tkvlHpOU";

// mode https://firebase.google.com/docs/reference/rest/auth

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
};

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
