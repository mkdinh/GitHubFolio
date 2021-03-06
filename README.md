# GitHubFolio

```sh
# To run the full stack application in development
$ npm run dev

# To run only the backend api server and mongo database in development
$ npm run dev-server
```

Sample `.env`

```sh
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
GITHUB_CALLBACK_URL=...
EXPRESS_SESSION_SECRET=...
AWS_S3_BUCKET=...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
```

## Heroku Deploy Checklist

* add `.env` variables
* provision redis, mongolab
* update homepage and callback url on GitHub developer settings
* remove `/build` from `.gitignore` file
* then, add/commit and deploy