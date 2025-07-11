# Event Scheduler Structure

Main request at: https://learn.wbscodingschool.com/courses/full-stack-web-app/lessons/module-project-event-scheduler/topic/%f0%9f%9b%a0%ef%b8%8f-project-guidelines-and-requirements-6/

```bash
Component01.jsx
├──
├──
└──

Page01.jsx
├──
├──
└──

Utils
├──
├──
└──

```

## Log changes

### July 08.

| Request | Main                             | Description                                                                     | Done by  |
| :------ | :------------------------------- | :------------------------------------------------------------------------------ | -------- |
| FR001   | Public GitHub Repository         | Keep all code in a single public repo; do not add instructors as collaborators. | Jialiang |
| FR002   | Incremental Development with PRs | Merge every change into main exclusively via Pull Requests.                     | Team     |
| FR003   | React + Vite Front-End           | Scaffold and run the app with Vite using React.                                 | Daniel   |
| FR004   | TailwindCSS Styling              | Style the UI with TailwindCSS (may augment with DaisyUI)                        | Daniel   |
| FR005   | React Router Setup               | Configure routing with React Router, including protected routes                 | Daniel   |

### July 09.

| Request | Main | Description | Done by |
| :------ | :--- | :---------- | ------- |
|         |      |             |         |

## Pending

| Request | Main                        | Description                                                                                                              | Done by |
| :------ | :-------------------------- | :----------------------------------------------------------------------------------------------------------------------- | ------- |
| FR006   | State & Effects Management  | Use React hooks (useState, useEffect, etc.) to manage UI state and side-effects.                                         |         |
| FR007   | Run Local Events API        | Clone, install and run the provided Events API locally for development.                                                  |         |
| FR008   | Home Page – Event List      | Fetch events (GET /api/events) and render them as cards sorted chronologically.                                          |         |
| FR009   | Event Card Navigation       | Clicking an event card navigates to /events/:id with React Router.                                                       |         |
| FR010   | Event Details Page          | Fetch and display full event data by ID (GET /api/events/:id).                                                           |         |
| FR011   | Sign-Up Page                | Render registration form; send POST /api/users; on success redirect to Sign-In.                                          |         |
| FR012   | Sign-In Page                | Render login form; send POST /api/auth/login; on success store API token and redirect to Home.                           |         |
| FR013   | API Key Persistence         | Store/retrieve the user’s API token in localStorage.                                                                     |         |
| FR014   | Protected Route Layout      | Wrap routes that require authentication (e.g., Create Event) in a guard that redirects unauthenticated users to Sign-In. |         |
| FR015   | Create Event Page           | Provide a form that sends POST /api/events with the token; block access and submission if no valid token.                |         |
| FR016   | Token Injection in Requests | Automatically attach the stored token to request headers                                                                 |         |
| FR017   | Error Handling & Feedback   | Gracefully display API or network errors (e.g., auth failure, 404) to the user.                                          |         |
| FR018   | Responsive Design           | Ensure the UI remains usable across mobile and desktop break-points.                                                     |         |
| FR019   | Static-Site Deployment      | Build the React app and deploy the static output to Render.                                                              |         |
