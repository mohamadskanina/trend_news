# 🚀 How to Deploy Your Project on GitHub Pages

This guide will walk you through deploying your Trend News App website to GitHub Pages.

## Step 1: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Trend News App website"
```

## Step 2: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository (e.g., `trend-news-site`)
4. **DO NOT** initialize with README, .gitignore, or license (you already have these)
5. Click **"Create repository"**

## Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Click **Save**

## Step 5: Deploy!

The GitHub Actions workflow will automatically deploy your site when you push code.

1. **First deployment**: The workflow will run automatically after you push
2. **View your site**: Go to Settings → Pages to see your site URL
   - Format: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Step 6: Update Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

The site will automatically update within 1-2 minutes!

## 🔧 Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

1. In GitHub repository Settings → Pages
2. Select **Source**: `Deploy from a branch`
3. Select **Branch**: `main` / `root`
4. Click **Save**

**Note:** For manual deployment, you may need to move files from `public/` to root or adjust paths.

## 📝 Important Notes

- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- Changes may take 1-2 minutes to appear after pushing
- The GitHub Actions workflow automatically handles the deployment
- Make sure your repository is **public** (or upgrade to GitHub Pro for private repos with Pages)

## 🐛 Troubleshooting

### Site not loading?
- Wait 2-3 minutes after first push
- Check the **Actions** tab in your GitHub repo for any errors
- Verify the workflow completed successfully (green checkmark)

### Styles/CSS not loading?
- Check browser console for 404 errors
- Verify file paths in HTML files are correct
- Clear browser cache

### Need help?
- Check GitHub Pages documentation: https://docs.github.com/en/pages
- Review the Actions tab for error messages

---

**Your site will be live at:** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

Happy deploying! 🎉

