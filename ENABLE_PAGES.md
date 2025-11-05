# Enable GitHub Pages - Step by Step Guide

## The Issue
The error "Get Pages site failed" occurs because GitHub Pages needs to be enabled manually in your repository settings before the GitHub Actions workflow can deploy.

## Solution: Enable Pages Manually

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: **https://github.com/mohamadskanina/trend_news**
2. Click **Settings** (top menu)
3. Scroll to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

### Step 2: Verify Workflow Permissions

1. Still in **Settings**, go to **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"** (optional)
5. Click **Save**

### Step 3: Remove Custom Domain (If Still There)

1. In **Settings** → **Pages**
2. Scroll to **Custom domain** section
3. **Clear/Remove** any domain field (leave empty)
4. Click **Save**

### Step 4: Push the Updated Workflow

The workflow file has been updated. Push it to trigger the deployment:

```bash
git add .github/workflows/deploy.yml
git commit -m "Update workflow to enable Pages"
git push
```

### Step 5: Check Deployment

1. Go to **Actions** tab in your repository
2. You should see the workflow running
3. Once complete (green checkmark), your site will be live at:
   **https://mohamadskanina.github.io/trend_news/**

## Important Notes

- **Pages MUST be enabled manually first** - GitHub Actions cannot enable it automatically
- The workflow will work AFTER you complete Step 1
- Make sure **Source** is set to **"GitHub Actions"**, not "Deploy from a branch"
- Wait 1-2 minutes after enabling for the first deployment to complete

## Troubleshooting

If you still get errors after enabling Pages:
1. Wait 2-3 minutes and try again
2. Check the **Actions** tab for detailed error messages
3. Verify all steps above were completed correctly
4. Make sure the repository is **public** (or you have GitHub Pro for private repos)

