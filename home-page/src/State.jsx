import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const getState = async () => {
  const csrf = await import("state/csrf");
  const apollo = await import("state/apollo");
  return {
    csrf,
    apollo
  }
};

const State = () => {
  const [profile, setProfile] = useState({});
  const [csrfToken, setCsrfToken] = useState('');
  const [updatedCsrfToken, setUpdatedCsrfToken] = useState('');
  const [updatedProfile, setUpdatedProfile] = useState({})

  const resetState = async () => {
    const { csrf, apollo } = await getState();
    setCsrfToken(csrf.getCSRFToken());
    setProfile(apollo.getProfile());
  }

  useEffect(async () => {
    resetState();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { csrf, apollo } = await getState();
    csrf.setCSRFToken(updatedCsrfToken);
    await apollo.mutateProfileInformation(updatedProfile);
    resetState();
  }

  return (
    <>
      <h1>This is a Page Imports My Shared State and Removes My Remote App</h1>
      <div>firstname: {profile?.firstName}</div>
      <div>lastname: {profile?.lastName}</div>
      <div>favoritecolor: {profile?.favoriteColor}</div>
      <div>csrfToken: {csrfToken}</div>
      <br />
      <form onSubmit={onSubmit}>
        <div>
          FirstName:
          <input
            onChange={(e) => {
              setUpdatedProfile({
                ...updatedProfile,
                firstName: e.target.value,
              });
            }}
          />
        </div>
        <div>
          LastName:
          <input
            onChange={(e) =>
              setUpdatedProfile({ ...updatedProfile, lastName: e.target.value })
            }
          />
        </div>
        <div>
          Favorite Color:
          <input
            onChange={(e) =>
              setUpdatedProfile({
                ...updatedProfile,
                favoriteColor: e.target.value,
              })
            }
          />
        </div>
        <div>
          CSRF Token:
          <input onChange={(e) => setUpdatedCsrfToken(e.target.value)} />
        </div>
        <button type="submit">Submit Updated Remote State</button>
      </form>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/todo">Todo</Link>
    </>
  );
}

export default State;