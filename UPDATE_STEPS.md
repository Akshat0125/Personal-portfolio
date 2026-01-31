# How to Update Your Site

Since you have already deployed your site, follow these steps whenever you make changes (like we just did).

## 1. Verify Locally
Always check that everything looks good on your machine first:
```bash
npm run dev
```

## 2. Push to GitHub
When you are ready to send changes to the live site, run these 3 commands in your terminal:
```bash
git add .
git commit -m "Updated portfolio links and footer layout"
git push
```

## 3. Automatic Deployment
**That's it!** 
Vercel is connected to your GitHub repository. As soon as you run `git push`, Vercel will automatically detect the changes, build the new version, and update your live website within 1-2 minutes.

You don't need to do anything on the Vercel dashboard.
