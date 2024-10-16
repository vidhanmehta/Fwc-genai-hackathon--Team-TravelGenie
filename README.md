---

# TravelGenie

**TravelGenie** is a web application built with **Next.js** that aims to enhance travel experiences by offering personalized travel recommendations and seamless trip planning tools. It leverages modern web technologies to deliver a fast, responsive, and intuitive user experience.

## Key Features

- **Personalized Travel Recommendations**: Tailored suggestions based on user preferences.
- **Interactive Maps**: Explore travel destinations with integrated maps.
- **Trip Planning Tools**: Simple and effective tools to plan your trips.
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Fast Performance**: Built using Next.js with Server-Side Rendering (SSR) for optimal performance.

## Technologies Used

- **Next.js**: React framework for Server-Side Rendering (SSR) and Static Site Generation (SSG).
- **React**: A JavaScript library for building user interfaces.
- **CSS Modules**: Scoped and modular CSS for styling components.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Query**: For data fetching, caching, and synchronization in React applications.
- **Tailwind CSS**: Utility-first CSS framework for efficient and scalable styling.
- **Google Gemini API**: Integrated for generating personalized travel plans.

This project is a [Next.js](https://nextjs.org) application, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## End-to-End Documentation: Running TravelGenie Locally

### Prerequisites

Ensure you have the following tools installed before proceeding:

1. **Node.js** (Latest LTS version recommended):  
   Download from [here](https://nodejs.org/).
   
2. **Git**:  
   Installation instructions can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
   
3. **Text Editor** (e.g., VS Code):  
   [VS Code](https://code.visualstudio.com/) is highly recommended.

---

### Steps to Run the Project

#### 1. Clone the Repository

To begin, clone the repository from GitHub:

```bash
git clone https://github.com/Sumithsigtia/Fwc-genai-hackathon--Team-TravelGenie.git
```

#### 2. Navigate to the Project Directory

Change to the project's directory:

```bash
cd Fwc-genai-hackathon--Team-TravelGenie
```

#### 3. Install Dependencies

Use npm to install the project's dependencies:

```bash
npm install
```

This will install all required Node.js packages listed in the `package.json` file.

#### 4. Set Up Environment Variables

The project may require certain environment variables such as API keys. To set these up:

1. Create a `.env.local` file in the root of the project.
2. Add the required environment variables in the following format:

```bash
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_gemini_api_key
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

#### 5. Run the Development Server

To start the application locally, run:

```bash
npm run dev
```

Once the server is up, you can access the app at `http://localhost:3000` in your browser.

#### 6. Explore the Application

After launching, you can interact with the **TravelGenie** app and test its features, including personalized travel itinerary generation using Generative AI.

#### 7. Build for Production (Optional)

If you wish to build the project for production, run:

```bash
npm run build
```

This will optimize the application for deployment.

---

### Contribution Guidelines

We welcome contributions! If you'd like to contribute, please check the repository's contribution guidelines [here](#contribution).

---
### Contact

If you need any assistance or have questions, feel free to reach out to our team.

---
