export const selectUserData = (state) => state.users.user;
export const selectUserIsSignIn = (state) => state.users.isSignin;
export const selectUsersError = (state) => state.users.error;
export const selectUsersIsLoading = (state) => state.users.isLoading;

//   user: { email: '', name: '', avatarURL: '' },
//   isSignin: false,
//   error: '',
//   isLoading: false,
