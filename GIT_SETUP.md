# Git Access Token Setup Guide

## Step 1: Create GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "StackSens Website")
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

## Step 2: Switch Remote to HTTPS

If your remote is currently using SSH, switch it to HTTPS:

```bash
git remote set-url origin https://github.com/stacksens/stacksens.github.io.git
```

## Step 3: Authenticate with Token

### Option A: Use Token in URL (One-time)

When Git prompts for credentials:
- **Username**: Your GitHub username
- **Password**: Paste your personal access token (NOT your GitHub password)

### Option B: Store Token Securely (Recommended)

#### macOS/Linux - Using Git Credential Helper:

```bash
# Configure Git to use macOS Keychain (macOS)
git config --global credential.helper osxkeychain

# Or use cache (stores for 15 minutes)
git config --global credential.helper cache

# Or use store (stores permanently in plain text - less secure)
git config --global credential.helper store
```

Then when you push/pull, enter:
- Username: your GitHub username
- Password: your personal access token

#### Store Token in URL (Less Secure):

```bash
git remote set-url origin https://YOUR_TOKEN@github.com/stacksens/stacksens.github.io.git
```

⚠️ **Warning**: This stores the token in plain text in `.git/config`

### Option C: Use Environment Variable

```bash
# Set token as environment variable
export GITHUB_TOKEN=your_token_here

# Or add to ~/.zshrc or ~/.bashrc for persistence
echo 'export GITHUB_TOKEN=your_token_here' >> ~/.zshrc
```

## Step 4: Test Authentication

```bash
# Test by fetching (doesn't change anything)
git fetch origin

# Or try pushing
git push origin main
```

## Troubleshooting

### If you get "Authentication failed":
- Make sure you're using the **token**, not your GitHub password
- Check that the token has the `repo` scope
- Verify the token hasn't expired

### If you get "Permission denied":
- Ensure the token has access to the repository
- Check if the repository is private and your token has the right permissions

### Reset stored credentials (macOS):
```bash
# Remove from keychain
git credential-osxkeychain erase
host=github.com
protocol=https
[Press Enter twice]
```

## Security Best Practices

1. ✅ Use tokens with minimal required scopes
2. ✅ Set token expiration dates
3. ✅ Use credential helper (osxkeychain) instead of storing in URL
4. ✅ Rotate tokens regularly
5. ❌ Never commit tokens to Git
6. ❌ Don't share tokens publicly

