import supabase from "./SupaSetup.mjs";

function loginFormTemplate() {
  return `<form name="login">
  <p>
    <label for="email">Email</label>
    <input id="email" name="email" value="st83440@gmail.com" />
  </p>
  <p>
    <label for="password">Password</label>
    <input id="password" name="password" type="password" />
  </p>
  <button id="register" type="button">Sign Up</button>
  <button id="signIn" type="button">Sign In</button>
</form>`;
}

function getCreds() {
  return {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value
  };
}

export default class Auth {
  constructor(overlaySelector, action) {
    this.overlay = document.querySelector(overlaySelector);

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (event === "SIGNED_IN") {
        this.hideLogin();
        action();
      }
      if (event === "SIGNED_OUT") {
        this.showLogin();
      }
    });
  }
  async signUp(user) {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          full_name: "John"
        }
      }
    });
    this.hideLogin();
  }
  async signIn(creds) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: creds.email,
      password: creds.password
    });
    return data;
  }
  showLogin() {
    this.overlay.innerHTML = loginFormTemplate();
    this.overlay.classList.add("show-overlay");
    document.querySelector("#register").addEventListener("click", (e) => {
      this.signUp(getCreds());
    });
    document.querySelector("#signIn").addEventListener("click", (e) => {
      this.signIn(getCreds());
    });
  }
  hideLogin() {
    this.overlay.innerHTML = "";
    this.overlay.classList.remove("show-overlay");

    document.querySelector("#logout").addEventListener("click", (e) => {
      e.preventDefault();
      this.signOut();
    });
  }
  async checkAuth() {
    try {
      const { data: session, error } = await supabase.auth.getSession();
      console.log("check");
      if (error) {
        throw error;
      }
      if (session.session) {
        this.hideLogin();
      } else {
        this.showLogin();
      }
      return session.session ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async signOut() {
    const { error } = await supabase.auth.signOut();
  }
}
