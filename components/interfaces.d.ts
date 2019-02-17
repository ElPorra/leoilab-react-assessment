/// <reference path="../typings/tsd.d.tsx" />

interface SearchFormProps {
  getUser(name: string): void;
}

interface SignInFormProps {
  singIn(email: string, password: string): void;
}

interface UserInfoProps {
  user: User;
  repos: Repo[];
  followers: User[];
}

interface UsersListProps {
  users: User[];
}

interface ReposListProps {
  repos: Repo[];
}

interface TabBarIconsProps {
  name: string;
  focused: boolean;
}
