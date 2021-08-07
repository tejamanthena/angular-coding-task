Steps to run the project:

1. Install the dependencies using `npm install` on the root of project.

2. Run `ng serve --proxy-config src/proxy.conf.json` which opens the development server at `http://localhost:4200/`. 

*Proxy configuration is set in `src/proxy.conf.json` to route the backend API calls from port 8080 to local dev port running at 4200.

3. Dev server automatically gets hot reloaded after making changes and saving the file.

4. Run `ng test` to execute the unit tests via Karma test-runner.
