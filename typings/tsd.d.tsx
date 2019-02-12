type User = {
  id: string;
  login: string;
  email?: string;
  name: string;
  avatar_url: string;
};

type Repo = {
  id: string;
  name: string;
  owner: User;
  html_url: string;
  description: string;
};

type TUserInfoState = {
  modalVisible: boolean;
  showRepos: boolean;
  showFollowers: boolean;
};
type TSearchformState = {
  loading: boolean;
  username: string;
  usernameError: boolean;
};
type TSignInFormState = {
  loading: boolean;
  password: string;
  passwordError?: boolean;
  email: string;
  emailError?: boolean;
};

type THomeScreenState = {
  loading: boolean;
  user: User;
  repos: Repo[];
  followers: User[];
  found: boolean;
  params: {};
};
type TSignInScreenState = {
  loading: boolean;
  error: string;
};
