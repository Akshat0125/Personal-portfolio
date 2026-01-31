# Deployment Instructions

## Part 1: Upload to GitHub

1.  **Create a Repository:**
    *   Go to [GitHub.com](https://github.com) and sign in.
    *   Click the **+** icon (top right) -> **New repository**.
    *   Repository name: `portfolio-web` (or any name you like).
    *   Visibility: **Public**.
    *   Do **not** check "Initialize with README" (we already have code).
    *   Click **Create repository**.

2.  **Push Code (Run these commands in your VS Code terminal):**
    
    ```bash
    # Initialize Git
    git init
    
    # Add all files
    git add .
    
    # Commit changes
    git commit -m "Initial portfolio release"
    
    # Rename branch to main
    git branch -M main
    
    # Link to your new GitHub repo
    # REPLACE <YOUR_REPO_URL> below with the link from GitHub (e.g., https://github.com/Akshat0125/portfolio-web.git)
    git remote add origin <YOUR_REPO_URL>
    
    # Push the code
    git push -u origin main
    ```

## Part 2: Deploy on Vercel

1.  **Sign Up / Login:**
    *   Go to [Vercel.com](https://vercel.com).
    *   Log in with **GitHub**.

2.  **Import Project:**
    *   On your Vercel dashboard, click **Add New** -> **Project**.
    *   You should see your new `portfolio-web` repository in the list.
    *   Click **Import**.

3.  **Configure & Deploy:**
    *   **Framework Preset:** It should auto-detect **Next.js**.
    *   **Root Directory:** It should be `./` (default).
    *   **Build Command:** `next build` (default).
    *   **Environment Variables:** You don't need any for this site.
    *   Click **Deploy**.

4.  **Success:**
    *   Wait about a minute. You will see a "Congratulations!" screen.
    *   Click the **Preview** image to see your live site.
    *   Vercel will give you a domain like `portfolio-web-akshat.vercel.app`.
