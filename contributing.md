# Contribution Guidelines

Thank you for contributing to `awesome-opencode`! Add your entries via YAML files—no need to edit README.md directly.

## How to Add an Entry

### Step 1: Fork & Clone

```bash
git clone https://github.com/YOUR-USERNAME/awesome-opencode.git
cd awesome-opencode
```

### Step 2: Create YAML File

Create a YAML file in the appropriate category folder under `data/`:
- `data/plugins/` - OpenCode plugins and extensions
- `data/themes/` - Color schemes and visual themes
- `data/agents/` - AI agents and subagents
- `data/projects/` - Tools, GUIs, integrations, and utilities
- `data/resources/` - Guides, templates, and configurations

**Filename:** kebab-case (e.g., `my-plugin.yaml`)

### Step 3: Add YAML Content

```yaml
name: Your Plugin Name
repo: https://github.com/owner/repo-name
tagline: Short punchy summary (max 120 chars, shown in collapsed view)
description: Longer description explaining what it does and why it's useful.
min_version: "1.0.0"  # optional
```

**Version support:** OpenCode V1 and V2 plugins are not interchangeable. Say which major versions your project supports in the description (for example, "OpenCode V1 and V2" or "OpenCode V2 only"). If it needs a specific version or newer, set `min_version` to the lowest release that works. V2-first projects are welcome.

### Step 4: Submit PR

```bash
git checkout -b add-my-plugin
git add data/plugins/my-plugin.yaml
git commit -m "docs: add my-plugin to plugins"
git push origin add-my-plugin
```

Open a Pull Request on GitHub.

## Entry Requirements

Every PR is checked against these rules. A PR that fails any rule is closed.

1. **Format** - One valid YAML file in the right `data/` folder. Do not edit README.md. README is generated.
2. **Relevant** - OpenCode is a real, documented target. We say no to "also works with OpenCode" tools with no OpenCode setup docs.
3. **Public** - The repo is public and works. No dead links.
4. **Maintained** - The repo is not archived and has a commit in the last 90 days.
5. **Traction** - At least 25 stars, and the repo is at least 30 days old.
6. **Unique** - Not already in the list and not a duplicate of another open PR.
7. **Complete** - All required fields are present and the tagline is 120 characters or less.

## List Maintenance

We audit the whole list from time to time. An entry is removed when the repo is deleted, archived, or has no commits for 90 days.

This keeps the list useful. It is not a judgement on the project. If your project is active again, feel free to submit it once more.

## What Happens After PR?

1. **Validation runs** - Automated checks verify YAML format
2. **Maintainer review** - Content and relevance verified
3. **Merge** - Once approved
4. **README auto-generates** - List updates automatically

No need to edit README.md—it regenerates from YAML files.
