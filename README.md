# TravelGenie

TravelGenie is a Next.js web application designed to enhance travel experiences by providing personalized travel recommendations and planning tools. This project is built using modern web technologies and is focused on delivering a fast, responsive, and intuitive user experience.

## Features

- Personalized travel recommendations based on user preferences.
- Integrated maps for exploring travel destinations.
- Easy-to-use trip planning tools.
- User-friendly and responsive design.
- Fast performance using Next.js and server-side rendering (SSR).

## Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation.
- **React** - Component-based UI library.
- **CSS Modules** - Scoped and modular CSS styling.
- **Axios** - Promise-based HTTP client for API calls.
- **React Query** - Data fetching and caching for React apps.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Google Gemini** - Gemini for Personalized travel plan.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Here’s a step-by-step guide you can add to your GitHub repository to help others run your **Team TravelGenie** project locally:

## End-to-End Documentation: How to Run the TravelGenie Project Locally

### Prerequisites

Before you begin, ensure you have the following installed on your local system:

1. **Node.js** (Latest LTS version recommended)  
   Download and install from [here](https://nodejs.org/).
2. **Git**  
   Install Git by following the instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
3. **Text Editor** (VS Code, Sublime Text, etc.)  
   [VS Code](https://code.visualstudio.com/) is recommended.

### Steps to Run the Project

#### 1. Clone the Repository

To get started, you need to clone the project repository from GitHub.

```bash
git clone https://github.com/Sumithsigtia/Fwc-genai-hackathon--Team-TravelGenie.git
```

#### 2. Navigate to the Project Directory

After cloning, navigate into the project directory using the terminal:

```bash
cd Fwc-genai-hackathon--Team-TravelGenie
```

#### 3. Install Dependencies

The project uses **Next.js** and other dependencies that are managed by **npm**. To install all necessary dependencies, run the following command:

```bash
npm install
```

This will install all the required Node.js packages as defined in the `package.json` file.

#### 4. Set Up Environment Variables (if required)

If the project relies on any environment variables (e.g., API keys), make sure to set them up.

1. Create a `.env.local` file in the root of your project directory.
2. Add necessary environment variables in this file NEXT_PUBLIC_GOOGLE_API_KEY=your gemini api key and NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your unsplash api key.

#### 5. Run the Development Server

Once everything is set up, start the development server by running:

```bash
npm run dev
```

This will launch the application locally on `http://localhost:3000`. You can open this URL in your browser to access the app.

#### 6. Explore the Application

Now you can explore the **TravelGenie** app and see how it dynamically generates personalized travel itineraries using Generative AI.

#### 7. Building the Project for Production (Optional)

If you want to build the project for production, you can use the following command:

```bash
npm run build
```

This command optimizes the project for deployment.

### Contribution

If you'd like to contribute to this project, please follow the [contribution guidelines](#contribution) in the repository.

### Contact

If you have any questions or need further assistance, feel free to reach out to the team.
