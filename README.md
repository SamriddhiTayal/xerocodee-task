Xerocodee Task:-

Project Name: Xerocodee 

Description: Xerocodee is a React-based application build using vite with the frontend deployed on Netlify. It provides users with a comprehensive task management experience. You can access the live application at https://xerocodee-task.netlify.app/.

Installation:
To run this project locally, follow these steps:

1. Clone the repository: git clone https://github.com/SamriddhiTayal/xerocodee-task
2. Navigate to the project directory: cd xerocode-task
3. Install dependencies: npm install
4. Start the development server: npm run dev
5. Ctrl+ click on the url provided in the terminal 

Technologies Used:
1. ReactJS
2. HTML
3. CSS
4. Tailwind CSS
5. Firebase Authentication

2D Architecture of the Project:
Xerocodee Task follows a 2D architecture:

Frontend: The user interface is built using ReactJS, HTML, CSS, and Tailwind CSS. It provides an interactive dashboard for managing tasks.

Authentication: Firebase Authentication is integrated for secure user login and management.

## Login
Currently, the project supports login using Google accounts.
In the future, I plan to implement login functionality using GitHub and email IDs as well.
Upon successful login, the user will be redirected to the dashboard, and their name will be displayed on the welcome message.

## Dashboard Features:
The dashboard offers a variety of features to help the user manage their tasks and progress:

## Progress Tracking
You can choose from various tasks for each steps, and the progress bar will update accordingly.
The user interface will display the chosen options for enhanced clarity.

## Routing
Currently, routing between the login page and the dashboard is set up.
In the future, I will update and implement routes for additional pages and features for additional pages.

## Additional Pages
I can access other pages of the application directly using the following URLs:

Signup Page: https://xerocodee-task.netlify.app/signup
Dashboard: https://xerocodee-task.netlify.app/dashboard
Onboarding Forms:
1. Purpose: https://xerocodee-task.netlify.app/purpose (Choosing an option on the Purpose page will open the relevant form accordingly.)
2. Deployment: https://xerocodee-task.netlify.app/deployment


## Persistent User Data
To enhance the user experience, user data is stored in local storage. This means that if a user revisits the website, they will be directed to the dashboard directly without going through the login process again.