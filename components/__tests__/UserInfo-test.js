import 'react-native';
import React from 'react';
import UserInfo from '../UserInfo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const userData = {
        "login": "adegano",
        "id": "29756043",
        "avatar_url": "https://avatars1.githubusercontent.com/u/29756043?v=4",
        "name": "adegano",
      }
  const tree = renderer.create(<UserInfo user = {userData}></UserInfo>).toJSON();

  expect(tree).toMatchSnapshot();
});
