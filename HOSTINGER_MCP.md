# Hostinger Model Context Protocol (MCP) Integration

This project is configured with the official **Hostinger MCP Server** (`hostinger-api-mcp`).

The Hostinger MCP server allows AI assistants (such as Antigravity, Cursor, Claude Code, Windsurf, or VS Code) to interact directly with your Hostinger hosting account to manage deployments, DNS, VPS, WordPress installations, and more directly from your chat interface.

---

## Configuration Files Added

The following configuration files have been created in your workspace:

- `mcp.json` (Root of `iwnt-next/`): Defines the `hostinger-api-mcp` server using `npx`.

---

## Setup Instructions

Your Hostinger API Token from the previous project configuration was automatically migrated over.

The token has been directly set in `mcp.json`:
```json
{
  "mcpServers": {
    "hostinger": {
      "command": "npx",
      "args": [
        "-y",
        "hostinger-api-mcp@latest"
      ],
      "env": {
        "HOSTINGER_API_TOKEN": "your_actual_token_here"
      }
    }
  }
}
```

---

## Supported Features

Once authenticated, your AI assistant can help you with:
- **Deployments:** Upload and manage static site or Next.js builds on Hostinger.
- **Domains & DNS:** Search domains, update DNS records, and configure SSL/HTTPS.
- **VPS Control:** Start, stop, restart Virtual Private Servers, manage SSH keys and firewalls.
- **WordPress Management:** Manage WordPress plugins, themes, and core updates if using Hostinger WP hosting.
- **Billing & Account Overview:** Inspect subscriptions and account details.

---

## How to Test
Once your token is configured, test by asking your AI assistant:
> *"List my Hostinger domains"* or *"Check my Hostinger hosting status"*
