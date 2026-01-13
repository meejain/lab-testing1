# Lab: Getting Started with Adobe Experience Manager - Edge Delivery Services

This lab walks you through creating and developing a website using Adobe Experience Manager - Edge Delivery Services

## Prerequisites

Before starting this lab, ensure you have:

- A personal GitHub account
- A laptop (Mac or Windows) with an installed IDE — preferably an AI-enabled editor (Cursor is strongly recommended; VS Code is also acceptable)
- Node.js and npm installed on your local system

---

## Exercise 1: Bootstrap a Live Personal Site with Default Blocks

**Objective**: Set up your GitHub repository, configure DA.live, add your personal content, and publish your site.

**Outcome**: You will have a live personal website with default blocks running on AEM Edge Delivery Services.

### Step 1: Create Your Repository from Boilerplate

1. Visit the [Dev Day Boilerplate repository](https://github.com/meejain/zeroto100)
2. Click **"Use this template"** → **"Create a new repository"**
3. Choose your GitHub user/org as the owner
4. Set the repository to **public** (recommended)
5. Set **"Include all branches"** to **On**
6. Click **"Create repository"**

### Step 2: Install AEM Code Sync

1. Visit [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync/installations/new)
2. Under **Repository access**, select **"Only select repositories"**
3. Choose your newly created repository
4. Click **"Save"**

Your site is now live at:
- **Preview**: `https://main--<repo>--<owner>.aem.page/`
- **Production**: `https://main--<repo>--<owner>.aem.live/`

> **Note**: Replace `<repo>` with your repository name and `<owner>` with your GitHub user/org.

### Step 3: Author and Manage Content

1. Navigate to [DA.live](https://da.live/start)
2. Add your newly created github repository link
3. Select the **AEM Boilerplate** option. This will create boilerplate content.
4. Visit https://da.live/apps/import and import the following pages using the **"By URL"** option:
   - `https://main--zeroto100--meejain.aem.live/lab1`
   - `https://main--zeroto100--meejain.aem.live/nav`
   - `https://main--zeroto100--meejain.aem.live/footer`
   
5. In the **Org** field, enter your organization name and in **Site** field, enter your repository name.
   - For example: If your DA.live URL is `https://da.live/#/meejain/zeroto100`, then:
     - **Org**: `meejain`
     - **Site**: `zeroto100`

### Step 4: Preview and Publish Content

1. In DA, Click the **Preview** button to preview your changes.
2. Once satisfied with the preview, click the **Publish** button to make your content live.
3. Your content will now be available on both preview and live URLs.

**Congratulations!** 🎉 You have successfully bootstrapped your live personal website with default blocks on AEM Edge Delivery Services. Your site is now live and accessible on the web!

### Optional: Install AEM Sidekick

For easier content preview and publishing workflow:

1. Install the [AEM Sidekick Chrome Extension](https://chrome.google.com/webstore/search/aem%20sidekick)
2. Pin the extension for easy access
3. Navigate to your site (preview or live URL)
4. Click the Sidekick icon in your browser
5. Use Sidekick to preview and publish content directly from your browser without going to DA.live

---

## Exercise 2: Know the Development Flow for EDS

**Objective**: Set up local development environment, make changes to code, and experience live reload.

**Outcome**: You will understand the local development workflow and see real-time changes reflected in your browser.

### Step 1: Install AEM CLI

```bash
npm install -g @adobe/aem-cli
```

### Step 2: Clone Your Repository

```bash
git clone https://github.com/<owner>/<repo>
cd <repo>
```

> Replace `<owner>` with your GitHub username and `<repo>` with your repository name.

### Step 3: Start Local Development Server

```bash
aem up
```

This starts a local server at `http://localhost:3000/`

Your browser should automatically open. If not, navigate to http://localhost:3000/ manually.

### Step 4: Make a Minor Change and See Live Reload

Let's make a simple CSS change to see live reload in action:

1. Open your project in your IDE (Cursor or VS Code)
2. Navigate to `styles/styles.css`
3. Find the `body` selector and modify a style property. For example, change the background color:

```css
body {
  /* Add or modify this line */
  background-color: black;
}
```

4. Save the file (Ctrl/Cmd + S)
5. Watch your browser automatically reload and display the change!

**Congratulations!** 🎉 You now understand the EDS development flow:
- Make changes locally
- See instant feedback in the browser
- Iterate quickly without waiting for builds or deployments

---

## Exercise 3: Setup AI Tooling (Configure MCP). Build a Block Using AI

**Objective**: Configure AI tooling (MCP servers) and build a block using AI assistance.

**Outcome**: You will be able to leverage AI to accelerate your development work in EDS.

### Step 1: Configure MCP Servers

#### 1.1 Configure Helix MCP Server

**For Cursor IDE:**

1. Open Cursor IDE
2. Go to **Cursor Settings** → **Tools & MCP**
3. Add the following configuration:

```json
"helix-mcp-server": {
  "command": "npx",
  "args": [
    "-y",
    "github:jindaliiita/eds-mcp"
  ],
  "env": {
    "HELIX_ADMIN_API_TOKEN": "{token}"
  }
}
```

**For Visual Studio Code:**

1. Edit the same MCP configuration file and add DA Live Admin to the `mcpServers` object:

```json
{
  "mcpServers": {
    "helix-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "github:jindaliiita/eds-mcp"
      ],
      "env": {
        "HELIX_ADMIN_API_TOKEN": "{token}"
      }
    },
    "da-live-admin": {
      "command": "npx",
      "args": [
        "-y",
        "github:meejain/mcp-da-live-admin"
      ],
      "env": {
        "DA_ADMIN_API_TOKEN": "{token}"
      }
    }
  }
}
```
2. Click on "Configure Tools" icon at the bottom of AI Chat window in VSCode.
<img width="300" alt="image" src="https://github.com/user-attachments/assets/c3107dec-0018-4850-9ac2-e2914e4f23a6" />

3. Enable `da-live-admin` and `helix-mcp-server`
<img width="610" height="501" alt="image" src="https://github.com/user-attachments/assets/8baa6d3a-b2b3-4868-b5b8-281faf2180f7" />

4. Once enabled successfully, the list of tools should appear. 

**Retrieve Access Token (Same for both Cursor and VS Code):**

- Go to https://admin.hlx.page/login
- Use the `login_adobe` address to login with the Adobe identity provider
- You will be forwarded to https://admin.hlx.page/profile
- Open your browser's **Developer Tools** (F12)
- Go to the **Application** tab and **Storage**
- Under **Cookies**, find `auth_token`
- Copy the value of the `auth_token` cookie
- Replace `"{token}"` in the configuration with your actual token

#### 1.2 Configure DA Live Admin MCP Server

**For Cursor IDE:**

1. In Cursor Settings → Tools & MCP, add:

```json
"da-live-admin": {
  "command": "npx",
  "args": [
    "-y",
    "github:meejain/mcp-da-live-admin"
  ],
  "env": {
    "DA_ADMIN_API_TOKEN": "{token}"
  }
}
```

**For Visual Studio Code:**

1. Edit the same MCP configuration file and add DA Live Admin to the `mcpServers` object:

```json
{
  "mcpServers": {
    "helix-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "github:jindaliiita/eds-mcp"
      ],
      "env": {
        "HELIX_ADMIN_API_TOKEN": "{token}"
      }
    },
    "da-live-admin": {
      "command": "npx",
      "args": [
        "-y",
        "github:meejain/mcp-da-live-admin"
      ],
      "env": {
        "DA_ADMIN_API_TOKEN": "{token}"
      }
    }
  }
}
```

**Get your DA Admin API Token using Bookmarklet (Same for both Cursor and VS Code):**

**a) Create the Bookmarklet**

- In your browser, create a new bookmark (Right-click bookmarks bar → Add Page)
- Name: `Get DA Token`
- In the URL/Location field, paste the following code:

```javascript
javascript:(async function(){if(!window.adobeIMS||typeof adobeIMS.getAccessToken!=='function'){alert('adobeIMS not available on this page');return;}try{const r=await adobeIMS.getAccessToken();if(!r||!r.token){alert('Token not found in response');console.log(r);return;}prompt('Adobe IMS Access Token (Ctrl/Cmd + C to copy):',r.token);}catch(e){console.error(e);alert('Failed to get access token');}})();
```

- Save the bookmark

**b) Use the Bookmarklet**

- Navigate to https://da.live
- Click on the **Get DA Token** bookmarklet in your bookmarks bar
- A prompt will appear with your access token
- Copy the token
- Replace `"{token}"` in the DA Live Admin configuration with your actual token

**c) Restart your IDE** (Cursor or VS Code) for the MCP server configurations to take effect

### Step 2: Install GitHub CLI and Add Agent Skills

#### 2.1 Install GitHub CLI

**For macOS:**

Using [Homebrew](https://brew.sh/):

```bash
brew install gh
```

> For more installation options on macOS, see the [official installation guide](https://github.com/cli/cli/blob/trunk/docs/install_macos.md#homebrew)

**For Windows:**

Using [WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/):

```pwsh
winget install --id GitHub.cli
```

> **Note**: After installation, you will need to **open a new terminal window** for the changes to take effect. Simply opening a new tab will not be sufficient.

> For more installation options on Windows, see the [official installation guide](https://github.com/cli/cli/blob/trunk/docs/install_windows.md)

#### 2.2 Install gh-upskill Extension

Install the gh-upskill extension for GitHub CLI:

```bash
gh extension install trieloff/gh-upskill
```

#### 2.3 Add AEM Skills to Your Project

Navigate to your project root directory:

```bash
cd <repo>
```

> Replace `<repo>` with your repository name (the folder you cloned in Exercise 2).

Then run:

```bash
gh upskill adobe/helix-website --all
```

This command will add AEM-specific skills to your project, enabling AI agents to better understand and work with AEM Edge Delivery Services patterns and best practices.

### Step 3: Build a Block Using AI

**TODO**

**Congratulations!** 🎉 You can now use AI to accelerate your EDS development:
- MCP servers provide AI with context about your project
- AI assists with code generation following EDS patterns
- You can iterate faster with AI-powered development
