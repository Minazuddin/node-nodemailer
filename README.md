Nodemailer
----------

# PLAIN

=> Generate app password: https://support.google.com/mail/answer/185833?hl=en

App passwords help you sign into your Google Account on older apps and services that don’t support modern security standards.

App passwords are less secure than using up-to-date apps and services that use modern security standards.

For OAuth2 authentication type,

=> Configure Google and OAuth2,

# OAuth2

https://stackoverflow.com/questions/51933601/what-is-the-definitive-way-to-use-gmail-with-oauth-and-nodemailer

1. Go to https://console.cloud.google.com create a new project

2. Add Gmail API and create credentials. Select application type as web application. Mention the redirect uri as https://developers.google.com/oauthplayground.

3. Go to https://developers.google.com/oauthplayground to get the access token and refresh token for the client.

APIs & Services -> Credentials -> Create Credentials -> OAuth Client ID 



