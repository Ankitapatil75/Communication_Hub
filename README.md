# CommunionHub React Developer Assignment

## Objective
Build a simple two-page React web app with the following pages:

1. **Home Page** - Brief introduction about CommunionHub.
2. **Event Listing Page** - Users can view and add events.

## Features

### Page 1: Home Page (Landing Page)
- Displays a welcome message about the CommunionHub app.
- Brief description, e.g., "Connecting people of all faiths through events and community engagement."
- Header with logo & navigation links (Home, Events, About).
- **Section:**
  - "Connecting People Across Faiths & Interests"
  - Short description about the app’s purpose.
  - **CTA Button:** "Explore Events" (Redirects to Events Page).

### Page 2: Event Listing Page
- Displays a list of events with:
  - **Title**
  - **Date**
  - **Location**
  - **Description**
- Users can filter events by category (e.g., Religious, Social, Charity).
- Users can add new events through a simple form with:
  - **Title**
  - **Date**
  - **Category**

## Live Demo
Host the project on **Vercel**  for deployment.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Ankitapatil75/Communication_Hub.git
   ```
2. Navigate to the project directory:
   ```sh
   cd communionhub
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Deployment
To deploy the project, use either **Vercel** or **Netlify**:

### Deploy on Vercel
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run the deployment command:
   ```sh
   vercel
   ```

### Deploy on Netlify
1. Install Netlify CLI:
   ```sh
   npm install -g netlify-cli
   ```
2. Run the deployment command:
   ```sh
   netlify deploy
   ```

## Project Structure
```
communionhub/
│-- public/               # Static assets
│-- src/
│   ├── components/       # Reusable components (Home, Events) 
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point
│-- .gitignore
│-- package.json
│-- README.md
```


## Submission Format
- Uploaded the project to **GitHub**.
- The project is **responsive** on both **desktop & mobile**.
- Follows **clean & readable code** principles.
- Ensured proper use of **React.js**.
