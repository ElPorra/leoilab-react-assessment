/// <reference path="../typings/tsd.d.tsx" />
interface IAppProps {
  skipLoadingScreen: boolean;
}
interface ISearchFormProps {
  getUser(name: string): void;
}

interface ISignInFormProps {
  singIn(email: string, password: string): void;
}

interface IUserInfoProps {
  user: User;
  repos: Repo[];
  followers: User[];
}

interface IUsersListProps {
  users: User[];
}

interface IReposistProps {
  repos: Repo[];
}

interface ITabBarIconsProps {
  name: string;
  focused: boolean;
}
