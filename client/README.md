# github-stats
Search for Github users and view their statistics


### Prerequisites
- nodeJS at least v6.2.2

### Installation
Run `cd client && npm install` at the root of the project

### Environment
- Create a `.env` file at the root of the project with the following:
```
REACT_APP_CLIENT_SECRET=<client-secret-from-your-github-account>
REACT_APP_CLIENT_ID=<client-id-from-your-github-account>
```

### Usage
Run `cd client && npm start` at the root of the project to start. You can now search for Github users by their usernames.
I'm the default user but you can easily change that in `client/src/defaultData`.
