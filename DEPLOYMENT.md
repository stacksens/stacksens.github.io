# Deployment Guide - StackSens Website

This guide covers deploying the StackSens website to GitHub Pages.

## Prerequisites

1. ✅ GitHub repository: `stacksens/stacksens.github.io`
2. ✅ Git configured with access token (see `GIT_SETUP.md`)
3. ✅ Node.js and npm installed

## Method 1: Automatic Deployment (Recommended) 🚀

This uses GitHub Actions to automatically deploy on every push to `main`.

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/stacksens/stacksens.github.io`
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Step 2: Install Dependencies (if not done)

```bash
npm install
```

### Step 3: Commit and Push Your Code

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: StackSens marketing website"

# Push to GitHub
git push origin main
```

### Step 4: Monitor Deployment

1. Go to **Actions** tab in your GitHub repository
2. You'll see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once green ✅, your site will be live at: `https://stacksens.github.io`

**That's it!** Every time you push to `main`, the site will automatically redeploy.

---

## Method 2: Manual Deployment using gh-pages

If you prefer manual control or want to deploy immediately:

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Build and Deploy

```bash
npm run deploy
```

This will:
1. Build your site (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve from that branch

### Step 3: Configure GitHub Pages Source

1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **gh-pages** branch and **/ (root)** folder
4. Click **Save**

Your site will be live at: `https://stacksens.github.io`

---

## Method 3: Manual Build and Push

If you want full control:

### Step 1: Build

```bash
npm run build
```

This creates a `dist` folder with your production-ready site.

### Step 2: Deploy to gh-pages Branch

```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy
npx gh-pages -d dist
```

Or manually:

```bash
# Create orphan branch (if first time)
git checkout --orphan gh-pages
git rm -rf .

# Copy dist contents
cp -r dist/* .

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Switch back to main
git checkout main
```

---

## Quick Start Commands

```bash
# First time setup
npm install

# Automatic deployment (after enabling GitHub Actions)
git add .
git commit -m "Deploy website"
git push origin main

# Manual deployment
npm run deploy
```

---

## Troubleshooting

### Site shows 404 or blank page

1. **Check GitHub Pages settings:**
   - Go to Settings → Pages
   - Ensure source is set correctly (GitHub Actions or gh-pages branch)

2. **Check base path in vite.config.js:**
   - Should be `base: '/'` for `username.github.io` repositories
   - Should be `base: '/repository-name/'` for project pages

3. **Wait a few minutes:**
   - GitHub Pages can take 1-5 minutes to update after deployment

### Build fails

1. **Check for errors:**
   ```bash
   npm run build
   ```

2. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### GitHub Actions workflow fails

1. Check the **Actions** tab for error messages
2. Common issues:
   - Missing dependencies in `package.json`
   - Build errors in your code
   - Permission issues

### Assets not loading

- Make sure `vite.config.js` has correct `base` path
- Check that all asset paths are relative
- Clear browser cache

---

## Updating Your Site

### Automatic (Recommended)

Just push to `main`:
```bash
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy.

### Manual

```bash
npm run deploy
```

---

## Custom Domain (Optional)

To use a custom domain (e.g., `stacksens.com`):

1. Add a `CNAME` file in `public/` folder:
   ```
   stacksens.com
   ```

2. Configure DNS:
   - Add CNAME record pointing to `stacksens.github.io`

3. Update GitHub Pages settings:
   - Settings → Pages → Custom domain
   - Enter your domain

---

## Environment-Specific Builds

If you need different configs for dev/prod:

1. Create `.env.production`:
   ```
   VITE_API_URL=https://api.stacksens.com
   ```

2. Access in code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

---

## Need Help?

- Check GitHub Actions logs in the **Actions** tab
- Review build output: `npm run build`
- Verify GitHub Pages settings
- Check repository permissions

---

**Your site will be live at:** `https://stacksens.github.io` 🎉

