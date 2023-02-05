import { supabase } from "./supabaseClient";

const authProvider = {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    // console.log({ username, password });
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
    if (session) {
      supabase.auth.setSession(session.refresh_token);
      return Promise.resolve();
    } else {
      console.error(error)
      return Promise.reject();
    }
  },

  // called when the user clicks on the logout button
  logout: async () => {
    await supabase.auth.signOut();
    return Promise.resolve();
  },

  // called when the API returns an error
  checkError: ({ status }) => {
    // if (status === 401 || status === 403) {
    //   localStorage.removeItem("username");
    //   return Promise.reject();
    // }
    // return Promise.resolve();
  },

  // called when the user navigates to a new location, to check for authentication
  checkAuth: async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    // console.log({ checkAuthSession: session, checkAuthError: error });
    if (session) {
      return Promise.resolve();
    }
    console.error(error)
    return Promise.reject();
  },

  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),

  // getIdentity: async (user) => {
  //   console.log({ user });
  //   const { data, error } = await supabase
  //     .from("userProfiles")
  //     .select("id, first_name, last_name")
  //     .match({ email: user.email })
  //     .single();

  //   if (!data || error) {
  //     throw new Error();
  //   }

  //   return {
  //     id: data.id,
  //     fullName: `${data.first_name} ${data.last_name}`,
  //   };
  // },
};

export default authProvider;
