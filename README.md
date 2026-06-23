<!-- HEADER -->
<div align="center">

<br>
<!-- LOGO -->
<img src="https://github.com/user-attachments/assets/aced1e8e-e6be-485a-9015-b822d01ab064" alt="Awesome Opencode" />
<br><br>

<!-- TITLE -->
<h1>Awesome Opencode</h1>

<!-- BADGES -->
<p>
<a href="https://github.com/sindresorhus/awesome"><img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" height="28" alt="Awesome" /></a>
&nbsp;&nbsp;
<a href="https://github.com/anomalyco/opencode"><img src="https://img.shields.io/github/stars/anomalyco/opencode?style=social" height="28" alt="Opencode Stars" /></a>
</p>

<br>

<!-- DESCRIPTION -->
<h3>A curated list of plugins, themes, agents, and resources for <a href="https://opencode.ai/">Opencode</a>.</h3>
<h3>The AI coding agent for the terminal, built by the team at <a href="https://github.com/anomalyco">Anomaly</a>.</h3>

<br>

[**OFFICIAL**](#official) • [**PLUGINS**](#plugins) • [**THEMES**](#themes) • [**AGENTS**](#agents) • [**PROJECTS**](#projects) • [**RESOURCES**](#resources)

<br>
<hr>

</div>

<!-- CONTENT -->

<div id="official"></div>

<h3>⭐️ Official Repositories</h3>

| Project | Stars | Description |
| :--- | :--- | :--- |
| **[opencode](https://github.com/anomalyco/opencode)** | ![Stars](https://badgen.net/github/stars/anomalyco/opencode) | The official opencode AI coding agent. |
| **[opencode-sdk-js](https://github.com/anomalyco/opencode-sdk-js)** | ![Stars](https://badgen.net/github/stars/anomalyco/opencode-sdk-js) | Official JavaScript/TypeScript SDK for opencode. |
| **[opencode-sdk-go](https://github.com/anomalyco/opencode-sdk-go)** | ![Stars](https://badgen.net/github/stars/anomalyco/opencode-sdk-go) | Official Go SDK for opencode. |
| **[opencode-sdk-python](https://github.com/anomalyco/opencode-sdk-python)** | ![Stars](https://badgen.net/github/stars/anomalyco/opencode-sdk-python) | Official Python SDK for opencode. |

<br>

<div id="plugins"></div>

<details open>
<summary><strong>🧩 PLUGINS</strong></summary>
<br>

<details>
  <summary><b>@bluelovers/opencode-arise</b> <img src="https://badgen.net/github/stars/bluelovers/opencode-arise" height="14"/> - <i>「⚔️ ARISE!」　A Solo Leveling themed orchestrator harness for OpenCode</i></summary>
  <blockquote>
    A lightweight, token-efficient orchestrator layer. Enables parallel background task execution in OpenCode. Launch AI agents to work simultaneously on exploration and research while continuing with other tasks. Allows specifying custom models for each_agent via configuration.
    <br><br>
    <a href="https://github.com/bluelovers/opencode-arise">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>aerovato/opencode-quotes-plugin</b> <img src="https://badgen.net/github/stars/aerovato/opencode-quotes-plugin" height="14"/> - <i>Display inspirational quotes instead of tips</i></summary>
  <blockquote>
    Replaces the default home-page tips with inspirational quotes for a more motivating OpenCode experience.
    <br><br>
    <a href="https://github.com/aerovato/opencode-quotes-plugin">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Agent Identity</b> <img src="https://badgen.net/github/stars/gotgenes/opencode-agent-identity" height="14"/> - <i>Agent self-identity and per-message attribution for multi-agent sessions</i></summary>
  <blockquote>
    Two plugins that improve agent identity awareness. AgentSelfIdentityPlugin injects a one-liner into the system prompt so the model knows which agent it's operating as. AgentAttributionToolPlugin exposes a tool for querying per-message agent attribution via the SDK, useful for agents that review multi-agent sessions.
    <br><br>
    <a href="https://github.com/gotgenes/opencode-agent-identity">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Agent Memory</b> <img src="https://badgen.net/github/stars/joshuadavidthomas/opencode-agent-memory" height="14"/> - <i>Letta-inspired memory</i></summary>
  <blockquote>
    Gives the agent persistent, self-editable memory blocks inspired by Letta agents.
    <br><br>
    <a href="https://github.com/joshuadavidthomas/opencode-agent-memory">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Agent Skills (JDT)</b> <img src="https://badgen.net/github/stars/joshuadavidthomas/opencode-agent-skills" height="14"/> - <i>Dynamic skills loader</i></summary>
  <blockquote>
    Dynamic skills loader that discovers skills from project, user, and plugin directories.
    <br><br>
    <a href="https://github.com/joshuadavidthomas/opencode-agent-skills">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Antigravity Auth</b> <img src="https://badgen.net/github/stars/NoeFabris/opencode-antigravity-auth" height="14"/> - <i>Google Antigravity models</i></summary>
  <blockquote>
    Use Gemini and Anthropic models for free via Google Antigravity IDE authentication.
    <br><br>
    <a href="https://github.com/NoeFabris/opencode-antigravity-auth">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Antigravity Multi-Auth</b> <img src="https://badgen.net/github/stars/theblazehen/opencode-antigravity-multi-auth" height="14"/> - <i>Multiple Google accounts</i></summary>
  <blockquote>
    Fork of opencode-antigravity-auth that allows using multiple Google accounts with automatic rotation when rate limited.
    <br><br>
    <a href="https://github.com/theblazehen/opencode-antigravity-multi-auth">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Autotitle</b> <img src="https://badgen.net/github/stars/pawelma/opencode-autotitle" height="14"/> - <i>AI-powered automatic session naming</i></summary>
  <blockquote>
    Two-phase session titling - instant keyword titles on user message, refined AI titles after response. Auto-selects cheapest model (flash/haiku/fast), respects custom titles, zero configuration needed.
    <br><br>
    <a href="https://github.com/pawelma/opencode-autotitle">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Background</b> <img src="https://badgen.net/github/stars/zenobi-us/opencode-background" height="14"/> - <i>Background process management</i></summary>
  <blockquote>
    Background process management plugin for opencode.
    <br><br>
    <a href="https://github.com/zenobi-us/opencode-background">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Background Agents</b> <img src="https://badgen.net/github/stars/kdcokenny/opencode-background-agents" height="14"/> - <i>Async agent delegation</i></summary>
  <blockquote>
    Claude Code-style background agents with async delegation and context persistence.
    <br><br>
    <a href="https://github.com/kdcokenny/opencode-background-agents">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Beads Plugin</b> <img src="https://badgen.net/github/stars/joshuadavidthomas/opencode-beads" height="14"/> - <i>Beads issue tracker integration</i></summary>
  <blockquote>
    Integration for Steve Yegge's beads issue tracker with /bd-* commands.
    <br><br>
    <a href="https://github.com/joshuadavidthomas/opencode-beads">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>BRHP</b> <img src="https://badgen.net/github/stars/ZanzyTHEbar/brhp" height="14"/> - <i>Persistent planning state</i></summary>
  <blockquote>
    Structured, persistent planning for OpenCode with local session state, /brhp commands, bounded planner history, and a TUI sidebar.
    <br><br>
    <a href="https://github.com/ZanzyTHEbar/brhp">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>CC Safety Net</b> <img src="https://badgen.net/github/stars/kenryu42/claude-code-safety-net" height="14"/> - <i>Safety net catching destructive commands</i></summary>
  <blockquote>
    A Claude Code plugin that acts as a safety net, catching destructive git and filesystem commands before they execute.
    <br><br>
    <a href="https://github.com/kenryu42/claude-code-safety-net">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Claude Code Switch (CCS) OpenCode Sync</b> <img src="https://badgen.net/github/stars/JasonLandbridge/opencode-ccs-sync" height="14"/> - <i>Claude Code Switch (CCS) to OpenCode sync</i></summary>
  <blockquote>
    An OpenCode plugin that reads your Claude Code Switch (CCS) configuration and automatically syncs the providers into your OpenCode config.
    <br><br>
    <a href="https://github.com/JasonLandbridge/opencode-ccs-sync">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Command Inject</b> <img src="https://badgen.net/github/stars/shihyuho/opencode-command-inject" height="14"/> - <i>Auto-inject project commands into OpenCode</i></summary>
  <blockquote>
    Automatically discovers and injects Makefile targets, npm/pnpm/yarn/bun scripts, and local skills at startup. Type / to see and run all project commands.
    <br><br>
    <a href="https://github.com/shihyuho/opencode-command-inject">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Context Analysis</b> <img src="https://badgen.net/github/stars/IgorWarzocha/Opencode-Context-Analysis-Plugin" height="14"/> - <i>Token usage analysis</i></summary>
  <blockquote>
    An opencode plugin that provides detailed token usage analysis for your AI sessions.
    <br><br>
    <a href="https://github.com/IgorWarzocha/Opencode-Context-Analysis-Plugin">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>CrewBee</b> <img src="https://badgen.net/github/stars/CrewBeeLab/CrewBee" height="14"/> - <i>Task-specific Agent Teams for OpenCode</i></summary>
  <blockquote>
    CrewBee is an independent Agent Team framework for OpenCode. It lets users define reusable task/project-specific Agent Teams, project them into OpenCode agents, and switch between single-agent execution and multi-agent collaboration based on task complexity. It also includes built-in Team templates such as a Coding Team with review flow and completion criteria.
    <br><br>
    <a href="https://github.com/CrewBeeLab/CrewBee">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Devcontainers</b> <img src="https://badgen.net/github/stars/athal7/opencode-devcontainers" height="14"/> - <i>Multi-branch devcontainers</i></summary>
  <blockquote>
    Plugin for running multiple devcontainer instances with auto-assigned ports and branch-based isolation.
    <br><br>
    <a href="https://github.com/athal7/opencode-devcontainers">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Direnv</b> <img src="https://badgen.net/github/stars/simonwjackson/opencode-direnv" height="14"/> - <i>Load direnv variables</i></summary>
  <blockquote>
    Automatically loads direnv environment variables at session start. Perfect for Nix flakes.
    <br><br>
    <a href="https://github.com/simonwjackson/opencode-direnv">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Dynamic Context Pruning</b> <img src="https://badgen.net/github/stars/Tarquinen/opencode-dynamic-context-pruning" height="14"/> - <i>Optimize token usage</i></summary>
  <blockquote>
    Plugin that optimises token usage by pruning obsolete tool outputs from conversation context.
    <br><br>
    <a href="https://github.com/Tarquinen/opencode-dynamic-context-pruning">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Envsitter Guard</b> <img src="https://badgen.net/github/stars/boxpositron/envsitter-guard" height="14"/> - <i>Prevent .env leaks</i></summary>
  <blockquote>
    OpenCode plugin that prevents agents/tools from reading or editing sensitive .env* files, while still allowing safe inspection via EnvSitter (keys + deterministic fingerprints; never values).
    <br><br>
    <a href="https://github.com/boxpositron/envsitter-guard">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>FlowDeck</b> <img src="https://badgen.net/github/stars/DVNghiem/FlowDeck" height="14"/> - <i>AI-powered multi-agent workflow orchestration with built-in safety intelligence</i></summary>
  <blockquote>
    FlowDeck adds a structured, multi-agent development workflow to OpenCode. It coordinates 25 specialist agents through a four-phase cycle — discuss, plan, execute, review — with persistent state that survives session restarts.

Key features:
- 25 specialist agents (architect, planner, coder, reviewer, tester, debugger, risk-analyst, policy-enforcer, and more)
- 24 reusable workflow skills (TDD, security scan, deploy check, code review, and more)
- 17 workflow commands for all project operations
- 15 pre-built orchestration flows including Spec-Driven Development (SDD)
- Persistent state via `.planning/STATE.md` — resume exactly where you left off
- Wave-based parallel execution for independent tasks
- AI Safety layer: patch trust scoring, edit gates, phase gating, arch constraint enforcement, failure replay, and regression prediction
- Deep System Hooks: context monitoring, session idle summaries, shell environment injection
- Built-in MCPs: Context7 (docs), Exa (web search), Grep.app (code search)
- Ensemble Reasoning via `/fd-council` for synthesized consensus from multiple agents
- Persistent Memory with SQLite for tool executions and session summaries

    <br><br>
    <a href="https://github.com/DVNghiem/FlowDeck">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Froggy</b> <img src="https://badgen.net/github/stars/smartfrog/opencode-froggy" height="14"/> - <i>Hooks and specialized agents</i></summary>
  <blockquote>
    Plugin providing Claude Code-style hooks, specialized agents, and tools like gitingest.
    <br><br>
    <a href="https://github.com/smartfrog/opencode-froggy">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Gemini Auth</b> <img src="https://badgen.net/github/stars/jenslys/opencode-gemini-auth" height="14"/> - <i>Google account auth</i></summary>
  <blockquote>
    Authenticate the Opencode CLI with your Google account so you can use your existing Gemini plan.
    <br><br>
    <a href="https://github.com/jenslys/opencode-gemini-auth">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>GitHub Release</b> <img src="https://badgen.net/github/stars/amestsantim/opencode-github-release" height="14"/> - <i>Automated GitHub releases</i></summary>
  <blockquote>
    Create and publish GitHub releases with semantic versioning, tag management, and auto-generated release notes.
    <br><br>
    <a href="https://github.com/amestsantim/opencode-github-release">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Google AI Search</b> <img src="https://badgen.net/github/stars/IgorWarzocha/Opencode-Google-AI-Search-Plugin" height="14"/> - <i>Query Google AI Mode (SGE)</i></summary>
  <blockquote>
    An opencode plugin that exposes a native tool for querying Google AI Mode (SGE).
    <br><br>
    <a href="https://github.com/IgorWarzocha/Opencode-Google-AI-Search-Plugin">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>GoopSpec</b> <img src="https://badgen.net/github/stars/hffmnnj/opencode-goopspec" height="14"/> - <i>Spec-driven development workflow</i></summary>
  <blockquote>
    Transforms AI-assisted coding with spec-driven workflows. Features 5-phase workflow (Plan, Research, Specify, Execute, Accept), contract gates for user confirmation, 12 specialized subagents, persistent memory system, wave-based execution with atomic commits, and deviation rules for handling unexpected situations.
    <br><br>
    <a href="https://github.com/hffmnnj/opencode-goopspec">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Handoff</b> <img src="https://badgen.net/github/stars/joshuadavidthomas/opencode-handoff" height="14"/> - <i>Session handoff prompts</i></summary>
  <blockquote>
    Creates focused handoff prompts for continuing work in a new session.
    <br><br>
    <a href="https://github.com/joshuadavidthomas/opencode-handoff">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Harness Memory</b> <img src="https://badgen.net/github/stars/smc2315/harness-memory" height="14"/> - <i>Persistent project memory - 73 percent fewer tokens than CLAUDE.md, with human review</i></summary>
  <blockquote>
    Auto-captures evidence from tool interactions and materializes memories through a multi-gate pipeline. 4-layer activation engine selects the right memories per context. Replaces CLAUDE.md with structured, searchable, reviewable project memory. Local-first (sql.js WASM), zero cloud dependency.
    <br><br>
    <a href="https://github.com/smc2315/harness-memory">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>hiai-opencode</b> <img src="https://badgen.net/github/stars/HiAi-gg/hiai-opencode" height="14"/> - <i>Canonical 12-agent model with bundled skills, MCP, LSP, and ralph-loop</i></summary>
  <blockquote>
    Unified plugin shipping 10 visible agents (Bob, Coder, Strategist, Critic, Guard, Researcher, Designer, Manager, Brainstormer, Vision) plus hidden Sub and Agent Skills. Bundles MCP wiring (playwright, stitch, sequential-thinking, firecrawl, rag, mempalace, context7, websearch, grep_app), LSP, skill materialization, and a multi-layer continuation system (todo enforcer, ralph-loop, ULTRAWORK auto-start) in one install.
    <br><br>
    <a href="https://github.com/HiAi-gg/hiai-opencode">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Honcho</b> <img src="https://badgen.net/github/stars/plastic-labs/opencode-honcho" height="14"/> - <i>AI-native long-term memory for OpenCode</i></summary>
  <blockquote>
    Give OpenCode persistent memory that survives context wipes, session restarts, and fresh chats. Honcho remembers what you're working on, durable preferences, and prior context across projects. Supports cloud and self-hosted deployments with configurable session strategies.
    <br><br>
    <a href="https://github.com/plastic-labs/opencode-honcho">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>kibi-opencode</b> <img src="https://badgen.net/github/stars/Looted/kibi" height="14"/> - <i>Repo-local, branch-scoped knowledge and traceability for OpenCode</i></summary>
  <blockquote>
    Plugin-first entry point into the Kibi stack for OpenCode users. It adds context-aware
guidance, routes durable code comments toward Kibi artifacts, runs non-blocking background
sync and targeted validation checks, and helps keep repo knowledge branch-local and queryable.

    <br><br>
    <a href="https://github.com/Looted/kibi">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Kilo Gateway Auth</b> <img src="https://badgen.net/github/stars/JungHoonGhae/opencode-kilo-auth" height="14"/> - <i>Kilo Gateway provider</i></summary>
  <blockquote>
    Adds Kilo Gateway provider support to OpenCode.
    <br><br>
    <a href="https://github.com/JungHoonGhae/opencode-kilo-auth">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Lemma</b> <img src="https://badgen.net/github/stars/xenitV1/lemma" height="14"/> - <i>Persistent memory layer for LLMs via MCP - local, zero-dependency, works on all clients</i></summary>
  <blockquote>
    Biological memory model for AI coding agents. Features confidence decay/boost, Fuse.js fuzzy dedup, guide system with usage tracking, cross-references, cumulative backup, virtual session tracking, and universal memory injection via tool descriptions (works on Claude Desktop, Cursor, VS Code, Gemini CLI, opencode, and any MCP client). No API keys, no cloud, fully local JSONL storage. 20 MCP tools, 110 tests, MIT licensed.

    <br><br>
    <a href="https://github.com/xenitV1/lemma">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Magic Context</b> <img src="https://badgen.net/github/stars/cortexkit/opencode-magic-context" height="14"/> - <i>Lossless context management with background compression</i></summary>
  <blockquote>
    Cache-aware context management that keeps long sessions productive. Background historian compresses old conversation into structured compartments while you keep working. Includes cross-session project memory, unified search across history/memories/facts, overnight dreamer for memory maintenance, and prompt-cache-safe deferred operations.
    <br><br>
    <a href="https://github.com/cortexkit/opencode-magic-context">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Manage Skills</b> <img src="https://badgen.net/github/stars/Randroids-Dojo/ManageSkills" height="14"/> - <i>Wizard-driven skills management for OpenCode.</i></summary>
  <blockquote>
    Modal-based skill install, remove, list, and update workflow that avoids ANSI prompts while wrapping the skills CLI inside OpenCode.
    <br><br>
    <a href="https://github.com/Randroids-Dojo/ManageSkills">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Micode</b> <img src="https://badgen.net/github/stars/vtemian/micode" height="14"/> - <i>Brainstorm-Plan-Implement workflow</i></summary>
  <blockquote>
    Structured workflow with session continuity, subagent orchestration, git worktree isolation, and AST-aware tools.
    <br><br>
    <a href="https://github.com/vtemian/micode">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Model Announcer</b> <img src="https://badgen.net/github/stars/ramarivera/opencode-model-announcer" height="14"/> - <i>Model self-awareness</i></summary>
  <blockquote>
    Automatically injects the current model name into the chat context so the LLM is self-aware.
    <br><br>
    <a href="https://github.com/ramarivera/opencode-model-announcer">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Morph Fast Apply</b> <img src="https://badgen.net/github/stars/JRedeker/opencode-morph-fast-apply" height="14"/> - <i>10,500+ tokens/sec code editing</i></summary>
  <blockquote>
    Integrates Morph's Fast Apply API for faster code editing with lazy edit markers and unified diff output.
    <br><br>
    <a href="https://github.com/JRedeker/opencode-morph-fast-apply">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>oc-mnemoria</b> <img src="https://badgen.net/github/stars/one-bit/oc-mnemoria" height="14"/> - <i>Persistent shared memory (hive mind) for OpenCode agents across sessions</i></summary>
  <blockquote>
    Gives all OpenCode agents a shared persistent memory store where every agent can read and write. Each entry is tagged with the creating agent (plan, build, ask, review) so no context is lost between roles. Powered by the mnemoria Rust engine with hybrid BM25 + semantic search, CRC32 checksum chains, and an append-only binary format. Includes 7 tools and /mn-* slash commands.
    <br><br>
    <a href="https://github.com/one-bit/oc-mnemoria">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Oh My Opencode</b> <img src="https://badgen.net/github/stars/code-yeongyu/oh-my-opencode" height="14"/> - <i>Agents & Pre-built tools</i></summary>
  <blockquote>
    Background agents, pre-built tools (LSP/AST/MCP), curated agents, and a Claude Code compatible layer.
    <br><br>
    <a href="https://github.com/code-yeongyu/oh-my-opencode">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Oh My Opencode Slim</b> <img src="https://badgen.net/github/stars/alvinunreal/oh-my-opencode-slim" height="14"/> - <i>Lightweight agent orchestration with reduced token usage</i></summary>
  <blockquote>
    Slimmed-down fork of oh-my-opencode focused on core agent orchestration. Features specialized sub-agents (Explorer, Oracle, Librarian, Designer, etc.), background task management, LSP/AST tools, tmux integration for live agent visibility, and MCP servers. Optimized to consume significantly fewer tokens.
    <br><br>
    <a href="https://github.com/alvinunreal/oh-my-opencode-slim">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Omniroute Auth</b> <img src="https://badgen.net/github/stars/Alph4d0g/opencode-omniroute-auth" height="14"/> - <i>Omniroute authentication provider</i></summary>
  <blockquote>
    Connect and automatically fetch models from your Omniroute instance
    <br><br>
    <a href="https://github.com/Alph4d0g/opencode-omniroute-auth">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Open Conclave</b> <img src="https://badgen.net/github/stars/martinzokov/open-conclave" height="14"/> - <i>Multi-agent debates, moderated by a captain agent until they reach consensus</i></summary>
  <blockquote>
    In the style of Grok 4.20, multiple agents are dispatched to answer the same query. Each one has a different system prompt (logical, creative, research-focused) and have to reach a consensus for the final output. The user can specify which provider/model they want to use and override the system prompt of each agent via config.
    <br><br>
    <a href="https://github.com/martinzokov/open-conclave">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>open-plan-annotator</b> <img src="https://badgen.net/github/stars/ndom91/open-plan-annotator" height="14"/> - <i>Annotate LLM plans like a Google Doc!</i></summary>
  <blockquote>
    A fully local agentic coding plugin that intercepts plan mode and opens an annotation UI in your browser. Select text to strikethrough, replace, insert, or comment — then approve the plan or request changes
    <br><br>
    <a href="https://github.com/ndom91/open-plan-annotator">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenAI Codex Auth</b> <img src="https://badgen.net/github/stars/numman-ali/opencode-openai-codex-auth" height="14"/> - <i>ChatGPT Plus/Pro OAuth</i></summary>
  <blockquote>
    This plugin enables opencode to use OpenAI's Codex backend via ChatGPT Plus/Pro OAuth authentication.
    <br><br>
    <a href="https://github.com/numman-ali/opencode-openai-codex-auth">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Adaptive Thinking</b> <img src="https://badgen.net/github/stars/ian-pascoe/opencode-adaptive-thinking" height="14"/> - <i>Adaptive reasoning-effort control</i></summary>
  <blockquote>
    OpenCode plugin that lets agents actively adjust model reasoning effort during a session, with configurable system guidance and a tool for switching between valid reasoning-effort variants.
    <br><br>
    <a href="https://github.com/ian-pascoe/opencode-adaptive-thinking">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Agent Tmux</b> <img src="https://badgen.net/github/stars/AnganSamadder/opencode-agent-tmux" height="14"/> - <i>Real-time tmux panes for OpenCode agents with auto-launch, streaming, and cleanup.</i></summary>
  <blockquote>
    Smart tmux integration for OpenCode that auto-spawns panes to stream agent output, supports flexible layouts and multi-port setups, and cleans up when sessions finish.
    <br><br>
    <a href="https://github.com/AnganSamadder/opencode-agent-tmux">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Agents Sidebar</b> <img src="https://badgen.net/github/stars/Mark1708/opencode-agents-sidebar" height="14"/> - <i>Browse configured OhMyOpenAgent agents in the TUI</i></summary>
  <blockquote>
    OpenCode sidebar plugin that displays configured OhMyOpenAgent agents with lifecycle-based categories, collapsible sections, descriptions, and model information.
    <br><br>
    <a href="https://github.com/Mark1708/opencode-agents-sidebar">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Canvas</b> <img src="https://badgen.net/github/stars/mailshieldai/opencode-canvas" height="14"/> - <i>Interactive terminal canvases in tmux splits</i></summary>
  <blockquote>
    Interactive terminal canvases (calendars, documents, flight booking) in tmux splits. Port of claude-canvas for OpenCode.
    <br><br>
    <a href="https://github.com/mailshieldai/opencode-canvas">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Hooks Plugin</b> <img src="https://badgen.net/github/stars/romain325/opencode-hooks-plugin" height="14"/> - <i>Claude code compatible hooks</i></summary>
  <blockquote>
    Use Claude code hooks definition and hook them to opencode hooks.
    <br><br>
    <a href="https://github.com/romain325/opencode-hooks-plugin">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Host Notify Bridge</b> <img src="https://badgen.net/github/stars/Zaradacht/opencode-host-notify-bridge" height="14"/> - <i>Devcontainer notifications bridged back to the host</i></summary>
  <blockquote>
    OpenCode plugin and host helper that forward permission, question, and idle notifications from devcontainers to the host machine for desktop alerts and sound.
    <br><br>
    <a href="https://github.com/Zaradacht/opencode-host-notify-bridge">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Ignore</b> <img src="https://badgen.net/github/stars/lgladysz/opencode-ignore" height="14"/> - <i>Ignore files based on pattern</i></summary>
  <blockquote>
    Plugin to ignore directory/file based on pattern.
    <br><br>
    <a href="https://github.com/lgladysz/opencode-ignore">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode LiteLLM</b> <img src="https://badgen.net/github/stars/yuseferi/opencode-litellm" height="14"/> - <i>Auto-discover models from a LiteLLM proxy</i></summary>
  <blockquote>
    Drop-in LiteLLM provider for OpenCode with zero configuration. Auto-detects a running
LiteLLM proxy on common ports (4000, 8000, 8080), pulls every model from /v1/models,
and registers them in OpenCode automatically — no model lists to hand-maintain. Smart
name formatting, modality categorization (chat/embedding/image/audio), provider
extraction, optional API-key auth, and a 5-second timeout so a slow proxy never blocks
startup.

    <br><br>
    <a href="https://github.com/yuseferi/opencode-litellm">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Log Sanitizer</b> <img src="https://badgen.net/github/stars/errhythm/opencode-log-sanitizer" height="14"/> - <i>Sanitizes pasted logs by redacting long strings, JWTs, bcrypt hashes, and base64 blobs</i></summary>
  <blockquote>
    Sanitizes pasted logs before sending them to AI by redacting long quoted strings, JWT tokens, bcrypt hashes, and base64 blobs to reduce token usage and remove irrelevant noise.
    <br><br>
    <a href="https://github.com/errhythm/opencode-log-sanitizer">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Mem</b> <img src="https://badgen.net/github/stars/tickernelz/opencode-mem" height="14"/> - <i>Persistent memory with vector database</i></summary>
  <blockquote>
    A persistent memory system for AI coding agents that enables long-term context retention across sessions using local vector database technology. Features dual memory scopes, web interface, auto-capture system, and multi-provider AI support.
    <br><br>
    <a href="https://github.com/tickernelz/opencode-mem">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Mission Control</b> <img src="https://badgen.net/github/stars/nigel-dev/opencode-mission-control" height="14"/> - <i>Command center for parallel agents — worktree isolation, DAG plans, merge train, PRs</i></summary>
  <blockquote>
    Orchestrates parallel OpenCode agents in tmux-isolated git worktrees with live inspection (capture/attach/diff), a dashboard overview, agent status reporting, and in-chat notifications. Supports DAG-based plans with autopilot/copilot/supervisor modes and a merge train with test gating and automatic rollback.
    <br><br>
    <a href="https://github.com/nigel-dev/opencode-mission-control">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Models Discovery</b> <img src="https://badgen.net/github/stars/yuhp/opencode-models-discovery" height="14"/> - <i>Configurable model discovery and filtering without long manual config</i></summary>
  <blockquote>
    OpenCode plugin for discovering models from OpenAI-compatible providers and API gateways, with provider and model filtering so users can avoid maintaining large configs or loading every model at once.
    <br><br>
    <a href="https://github.com/yuhp/opencode-models-discovery">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Notify</b> <img src="https://badgen.net/github/stars/kdcokenny/opencode-notify" height="14"/> - <i>Native OS notifications</i></summary>
  <blockquote>
    Native OS notifications for OpenCode - know when tasks complete.
    <br><br>
    <a href="https://github.com/kdcokenny/opencode-notify">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode ntfy.sh</b> <img src="https://badgen.net/github/stars/lannuttia/opencode-ntfy.sh" height="14"/> - <i>Push notifications to keep you in the know, even when you're on the go.</i></summary>
  <blockquote>
    An OpenCode plugin that adds push notifications through ntfy.sh.
    <br><br>
    <a href="https://github.com/lannuttia/opencode-ntfy.sh">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Plan Manager</b> <img src="https://badgen.net/github/stars/yurihbm/opencode-plan-manager" height="14"/> - <i>AI-Native Implementation Planning for Modern Agentic Workflows</i></summary>
  <blockquote>
    High-performance, minimalist plugin designed to bridge the gap between complex implementation strategies and autonomous execution. Selective context loading, zero-hallucination schemas, visible filesystem kanban.
    <br><br>
    <a href="https://github.com/yurihbm/opencode-plan-manager">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Provider Alias</b> <img src="https://badgen.net/github/stars/baranwang/opencode-provider-alias" height="14"/> - <i>Alias and curate OpenCode providers with model metadata from models.dev.</i></summary>
  <blockquote>
    Lets users define local OpenCode provider and model aliases hydrated from existing models.dev metadata.
    <br><br>
    <a href="https://github.com/baranwang/opencode-provider-alias">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Quota</b> <img src="https://badgen.net/github/stars/slkiser/opencode-quota" height="14"/> - <i>Quota toasts and token tracking</i></summary>
  <blockquote>
    Track quota and token usage across providers via automatic toasts and slash commands.
    <br><br>
    <a href="https://github.com/slkiser/opencode-quota">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Roadmap</b> <img src="https://badgen.net/github/stars/IgorWarzocha/Opencode-Roadmap" height="14"/> - <i>Strategic planning</i></summary>
  <blockquote>
    Strategic roadmap planning and multi-agent coordination plugin. Provides project-wide planning capabilities.
    <br><br>
    <a href="https://github.com/IgorWarzocha/Opencode-Roadmap">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Sessions</b> <img src="https://badgen.net/github/stars/malhashemi/opencode-sessions" height="14"/> - <i>Session management</i></summary>
  <blockquote>
    Session management plugin for OpenCode with multi-agent collaboration support.
    <br><br>
    <a href="https://github.com/malhashemi/opencode-sessions">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Snippets</b> <img src="https://badgen.net/github/stars/JosXa/opencode-snippets" height="14"/> - <i>Instant inline text expansion</i></summary>
  <blockquote>
    Instant inline text expansion for OpenCode. Type #snippet anywhere in your message and watch it transform. Brings DRY principles to prompt engineering with composable, shell-enabled snippets.
    <br><br>
    <a href="https://github.com/JosXa/opencode-snippets">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Swarm</b> <img src="https://badgen.net/github/stars/zaxbysauce/opencode-swarm" height="14"/> - <i>Verification-gated swarm with architect, review, test, and security agents</i></summary>
  <blockquote>
    Verification-gated OpenCode swarm with architect planning, independent review, test engineering, security checks, and resumable evidence.
    <br><br>
    <a href="https://github.com/zaxbysauce/opencode-swarm">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Synced</b> <img src="https://badgen.net/github/stars/iHildy/opencode-synced" height="14"/> - <i>Sync configs across machines</i></summary>
  <blockquote>
    Enables syncing global opencode configurations across machines with public/private visibility options.
    <br><br>
    <a href="https://github.com/iHildy/opencode-synced">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Throughput</b> <img src="https://badgen.net/github/stars/Howardzhangdqs/opencode-throughput" height="14"/> - <i>Real-time LLM performance monitoring</i></summary>
  <blockquote>
    Real-time LLM performance monitoring plugin for OpenCode. Tracks TTFT, TPS, latency, token usage, and cost per model with toast notifications and a TUI sidebar display.
    <br><br>
    <a href="https://github.com/Howardzhangdqs/opencode-throughput">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Token Tracker</b> <img src="https://badgen.net/github/stars/eserete/opencode-token-tracker" height="14"/> - <i>Real-time token usage, cost, and latency tracking for every AI request in OpenCode</i></summary>
  <blockquote>
    Displays a toast after each AI response with input/output tokens, cache hits, reasoning tokens, response latency, per-message cost, cumulative session cost, model identifier, and request count. Automatically aggregates tokens from subagent sessions spawned via the Task tool. Zero config — drop the file in and it works.
    <br><br>
    <a href="https://github.com/eserete/opencode-token-tracker">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode TTS</b> <img src="https://badgen.net/github/stars/StefanoChiodino/opencode-tts" height="14"/> - <i>Voice summaries for idle responses</i></summary>
  <blockquote>
    Speaks assistant responses aloud when a session goes idle, with summary or full-text modes and local TTS backends.
    <br><br>
    <a href="https://github.com/StefanoChiodino/opencode-tts">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode update notifier</b> <img src="https://badgen.net/github/stars/tim-hilde/opencode-update-notifier" height="14"/> - <i>Notify about plugin updates.</i></summary>
  <blockquote>
    Checks if your pinned plugins have newer versions available and shows a notification.
    <br><br>
    <a href="https://github.com/tim-hilde/opencode-update-notifier">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Visualizer</b> <img src="https://badgen.net/github/stars/psinetron/opencode-visualiser" height="14"/> - <i>2D pixel-art office for AI agents</i></summary>
  <blockquote>
    Turning raw OpenCode terminal logs into cozy 2D pixel office chaos. Watch your agents work, idle, and celebrate success in a bustling virtual office.
    <br><br>
    <a href="https://github.com/psinetron/opencode-visualiser">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Workaholic</b> <img src="https://badgen.net/github/stars/RoderickQiu/opencode-workaholic" height="14"/> - <i>Enforce mandatory working time and prevents premature "done" responses</i></summary>
  <blockquote>
    - AI has an early-exit problem: it says "done" at 30 seconds while edge cases are untested, bugs remain, and docs are missing. 
- Workaholic enforces mandatory working time for AI until the timer hits zero.
- Blocks premature "done" responses until timer expire, and require AI to call checkout() to end the task.

    <br><br>
    <a href="https://github.com/RoderickQiu/opencode-workaholic">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Workspace</b> <img src="https://badgen.net/github/stars/kdcokenny/opencode-workspace" height="14"/> - <i>Multi-agent orchestration</i></summary>
  <blockquote>
    Bundled multi-agent orchestration harness with 16 components in one install.
    <br><br>
    <a href="https://github.com/kdcokenny/opencode-workspace">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Worktree</b> <img src="https://badgen.net/github/stars/kdcokenny/opencode-worktree" height="14"/> - <i>Zero-friction git worktrees</i></summary>
  <blockquote>
    Zero-friction git worktrees for OpenCode. Auto-spawns terminals, syncs files, cleans up on exit.
    <br><br>
    <a href="https://github.com/kdcokenny/opencode-worktree">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>opencode-ascii</b> <img src="https://badgen.net/github/stars/d3vv3/opencode-ascii" height="14"/> - <i>Strip unicode characters from output and replace them by their ASCII equivalents</i></summary>
  <blockquote>
    Substitute unicode characters for ASCII. Em-dash (—) and en-dash (–) for hyphens (-); right arrow (→) for (->) and so on.
    <br><br>
    <a href="https://github.com/d3vv3/opencode-ascii">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>opencode-bmad-workflow</b> <img src="https://badgen.net/github/stars/Alex-stack-cell/opencode-bmad-workflow" height="14"/> - <i>BMAD workflow plugin — automates epic, feature, sprint and code review workflows using specialized AI agents</i></summary>
  <blockquote>
    Brings the BMAD (Breakthrough Method of Agile AI-Driven Development) methodology to OpenCode. Provides specialized agents for product management, architecture, development, and QA roles. Automates epic planning, feature breakdown, sprint workflows, and code reviews through a structured multi-agent pipeline.
    <br><br>
    <a href="https://github.com/Alex-stack-cell/opencode-bmad-workflow">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>opencode-mystatus</b> <img src="https://badgen.net/github/stars/vbgate/opencode-mystatus" height="14"/> - <i>Check AI subscription quotas</i></summary>
  <blockquote>
    Check all your AI subscription quotas in one command. Supports OpenAI (Plus/Pro/Codex, etc.), Zhipu AI, Google Antigravity, and more.
    <br><br>
    <a href="https://github.com/vbgate/opencode-mystatus">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>opencode-personality</b> <img src="https://badgen.net/github/stars/joostvanwollingen/opencode-personality" height="14"/> - <i>A configurable personality and mood system plugin for OpenCode.</i></summary>
  <blockquote>
    Give your AI assistant a distinct personality with customizable moods that drift over time.
    <br><br>
    <a href="https://github.com/joostvanwollingen/opencode-personality">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>opencode-plugin-otel</b> <img src="https://badgen.net/github/stars/DEVtheOPS/opencode-plugin-otel" height="14"/> - <i>OpenTelemetry telemetry exporter for opencode sessions, mirroring Claude Code monitoring signals</i></summary>
  <blockquote>
    Exports metrics, logs, and traces from opencode sessions via OTLP/gRPC to any OpenTelemetry-compatible backend (Datadog, Honeycomb, Grafana Cloud, etc.). Instruments session lifecycle, token usage, cost, tool durations, and git commits — mirroring the same signals as Claude Code's monitoring.
    <br><br>
    <a href="https://github.com/DEVtheOPS/opencode-plugin-otel">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>opencode-snip</b> <img src="https://badgen.net/github/stars/VincentHardouin/opencode-snip" height="14"/> - <i>OpenCode plugin that prefixes shell commands with snip to reduce LLM token consumption by 60-90%</i></summary>
  <blockquote>
    Automatically prefixes supported shell commands (git, go, cargo, npm, docker, etc.) with snip to filter output before it reaches your LLM context window.
    <br><br>
    <a href="https://github.com/VincentHardouin/opencode-snip">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenHax Codex</b> <img src="https://badgen.net/github/stars/open-hax/codex" height="14"/> - <i>OAuth authentication</i></summary>
  <blockquote>
    OAuth authentication plugin for personal coding assistance with ChatGPT Plus/Pro subscriptions.
    <br><br>
    <a href="https://github.com/open-hax/codex">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Openskills</b> <img src="https://badgen.net/github/stars/numman-ali/openskills" height="14"/> - <i>Alternative skills manager</i></summary>
  <blockquote>
    Alternative skills management plugin for opencode with enhanced features.
    <br><br>
    <a href="https://github.com/numman-ali/openskills">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenSpec</b> <img src="https://badgen.net/github/stars/Octane0411/opencode-plugin-openspec" height="14"/> - <i>Add Architecture planning and specification agent for OpenSpec</i></summary>
  <blockquote>
    An OpenCode plugin that integrates OpenSpec, providing a dedicated agent for planning and specifying software architecture.
    <br><br>
    <a href="https://github.com/Octane0411/opencode-plugin-openspec">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Optimal Model Temps</b> <img src="https://badgen.net/github/stars/Lyapsus/opencode-optimal-model-temps" height="14"/> - <i>Optimal sampling temperatures</i></summary>
  <blockquote>
    Minimal plugin that nudges specific models to their preferred sampling temperature.
    <br><br>
    <a href="https://github.com/Lyapsus/opencode-optimal-model-temps">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Pilot</b> <img src="https://badgen.net/github/stars/athal7/opencode-pilot" height="14"/> - <i>Automation daemon</i></summary>
  <blockquote>
    Automation daemon that polls for work from GitHub issues and Linear tickets.
    <br><br>
    <a href="https://github.com/athal7/opencode-pilot">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Plannotator</b> <img src="https://badgen.net/github/stars/backnotprop/plannotator" height="14"/> - <i>Interactive plan review UI</i></summary>
  <blockquote>
    Plan review UI with visual annotation, private/offline sharing, and Obsidian/Bear integration.
    <br><br>
    <a href="https://github.com/backnotprop/plannotator">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Plugin Template</b> <img src="https://badgen.net/github/stars/zenobi-us/opencode-plugin-template" height="14"/> - <i>CICD setup for plugins</i></summary>
  <blockquote>
    Focuses on providing the CICD setup with generator script, release please, bun publish, npm trusted publishing, and mise tasks.
    <br><br>
    <a href="https://github.com/zenobi-us/opencode-plugin-template">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Pocket Universe</b> <img src="https://badgen.net/github/stars/spoons-and-mirrors/pocket-universe" height="14"/> - <i>A subagent driven pocket universe for your primary agent</i></summary>
  <blockquote>
    Async agents can be powerful, but orchestration is at best finicky; they fire and forget, orphan work, lose context, waste time... and tokens. This plugin extends the native opencode subagent paradigm to provide closed loop, resilient, async agents, blocking main thread execution. A "pocket universe". This ships with three tools creating a robust system for parallel subagents to communicate and coordinate work
    <br><br>
    <a href="https://github.com/spoons-and-mirrors/pocket-universe">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>PR Auto-Signature</b> <img src="https://badgen.net/github/stars/arttttt/opencode-pr-signature" height="14"/> - <i>Automatically adds AI model signature to PRs, Issues, and Commits</i></summary>
  <blockquote>
    Plugin that automatically appends AI model signature to Pull Requests, Issues, and git commit messages. Supports GitHub MCP tools, git CLI, and gh CLI. Recognizes 90+ AI models including Claude, GPT, Gemini, DeepSeek, Llama, Mistral, and more.
    <br><br>
    <a href="https://github.com/arttttt/opencode-pr-signature">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Ralph Wiggum</b> <img src="https://badgen.net/github/stars/Th0rgal/opencode-ralph-wiggum" height="14"/> - <i>Self-correcting agent loops</i></summary>
  <blockquote>
    Iterative AI development loops with self-correcting agents based on the Ralph Wiggum technique.
    <br><br>
    <a href="https://github.com/Th0rgal/opencode-ralph-wiggum">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Research Papers</b> <img src="https://badgen.net/github/stars/saim-x/opencode-research-papers" height="14"/> - <i>Search arXiv and OpenAlex for research papers with recency and citation filtering</i></summary>
  <blockquote>
    OpenCode plugin that adds a research_papers tool for searching scholarly literature. Uses arXiv for fresh preprints and OpenAlex for broader metadata, citation counts, and open-access links. Supports filtering by latest, trending, or top-cited papers.
    <br><br>
    <a href="https://github.com/saim-x/opencode-research-papers">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Ring a Bell Example</b> - <i>Simple terminal bell plugin</i></summary>
  <blockquote>
    A simple plugin to ring the terminal bell once a request is complete.
    <br><br>
    <a href="https://gist.github.com/ahosker/267f375a65378bcb9a867fd9a195db1e">🔗 <b>View Gist</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Shell Strategy</b> <img src="https://badgen.net/github/stars/JRedeker/opencode-shell-strategy" height="14"/> - <i>Avoid interactive shell hangs</i></summary>
  <blockquote>
    Instructions file that teaches LLMs how to avoid interactive shell commands that hang in non-TTY environments.
    <br><br>
    <a href="https://github.com/JRedeker/opencode-shell-strategy">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Simple Memory</b> <img src="https://badgen.net/github/stars/cnicolov/opencode-plugin-simple-memory" height="14"/> - <i>Git-based memory</i></summary>
  <blockquote>
    Simple plugin to manage memory inside a git repo that can be committed and reviewed by team members.
    <br><br>
    <a href="https://github.com/cnicolov/opencode-plugin-simple-memory">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Simple Notify</b> <img src="https://badgen.net/github/stars/Yusuzhan/opencode-simple-notify" height="14"/> - <i>Native desktop notifications with near-zero dependencies</i></summary>
  <blockquote>
    Lightweight desktop notification plugin for OpenCode. Sends native OS notifications via dbus (Linux) and osascript (macOS) when sessions complete, error, need approval, or wait for input. Shows project name, elapsed time, and message preview.
    <br><br>
    <a href="https://github.com/Yusuzhan/opencode-simple-notify">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Smart Title</b> <img src="https://badgen.net/github/stars/Tarquinen/opencode-smart-title" height="14"/> - <i>Auto-generate session titles</i></summary>
  <blockquote>
    Auto-generates meaningful session titles using AI.
    <br><br>
    <a href="https://github.com/Tarquinen/opencode-smart-title">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Smart Voice Notify</b> <img src="https://badgen.net/github/stars/MasuRii/opencode-smart-voice-notify" height="14"/> - <i>Intelligent voice notifications</i></summary>
  <blockquote>
    Smart voice notification plugin with multiple TTS engines (ElevenLabs, Edge TTS, SAPI) and intelligent reminder system.
    <br><br>
    <a href="https://github.com/MasuRii/opencode-smart-voice-notify">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Subagent Reporter</b> <img src="https://badgen.net/github/stars/raisbecka/opencode-subagent-output" height="14"/> - <i>See exactly what your subagents are up to (in the terminal) when invoked during an `opencode run _____` session.</i></summary>
  <blockquote>
    When opencode run <prompt> is invoked normally, the actions of the primary agent are visible in the terminal, but subagent actions are not. This makes it difficult to follow progress on the prompt, and makes it very difficult to use `opencode run` as part of an unattended process or script. This plugin pipes subagent actions/events directly to stdout, prefixes them with the subagents name, and enumerates subagents when run in parallel for easy identification. This allows the user to follow along in realtime when subagents are running, and effectively trace execution at a later time.
    <br><br>
    <a href="https://github.com/raisbecka/opencode-subagent-output">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Subtask2</b> <img src="https://badgen.net/github/stars/spoons-and-mirrors/subtask2" height="14"/> - <i>Orchestration system</i></summary>
  <blockquote>
    Extend opencode /commands into a powerful orchestration system with granular flow control.
    <br><br>
    <a href="https://github.com/spoons-and-mirrors/subtask2">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Swarm Plugin</b> <img src="https://badgen.net/github/stars/joelhooks/opencode-swarm-plugin" height="14"/> - <i>Swarm intelligence</i></summary>
  <blockquote>
    Swarm plugin for opencode enabling swarm-based agent coordination.
    <br><br>
    <a href="https://github.com/joelhooks/opencode-swarm-plugin">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>System Prompt Logger</b> <img src="https://badgen.net/github/stars/tlinhart/opencode-system-prompt-logger" height="14"/> - <i>System prompt logger</i></summary>
  <blockquote>
    OpenCode plugin that intercepts the system prompt before it's sent to the LLM and logs it.
    <br><br>
    <a href="https://github.com/tlinhart/opencode-system-prompt-logger">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Token Monitor</b> <img src="https://badgen.net/github/stars/Ainsley0917/opencode-token-monitor" height="14"/> - <i>Token analysis & cost tracking with budgets, trends, and per-project analytics</i></summary>
  <blockquote>
    Track token usage (input/output/reasoning/cache), estimate costs, view daily trends with ASCII charts, set budget alerts, and export data. Supports per-agent breakdown, agent×model cross-analysis, and project-scoped analytics.
    <br><br>
    <a href="https://github.com/Ainsley0917/opencode-token-monitor">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Tokenscope</b> <img src="https://badgen.net/github/stars/ramtinJ95/opencode-tokenscope" height="14"/> - <i>Token analysis & cost tracking</i></summary>
  <blockquote>
    Tokenscope, Comprehensive token usage analysis and cost tracking for opencode sessions.
    <br><br>
    <a href="https://github.com/ramtinJ95/opencode-tokenscope">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>toon-config</b> <img src="https://badgen.net/github/stars/mmynsted/opencode-toon-config-plugin" height="14"/> - <i>Loads TOON based, AGENTS.toon rather than Markdown</i></summary>
  <blockquote>
    Use TOON based agent instructions. Command to analyize and improve agent instructions.
    <br><br>
    <a href="https://github.com/mmynsted/opencode-toon-config-plugin">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>TypeUI</b> <img src="https://badgen.net/github/stars/bergside/typeui" height="14"/> - <i>Design systems, UI prompts, and layout variation guidance</i></summary>
  <blockquote>
    Open-source design layer for OpenCode that provides curated design skills, UI prompts, and layout variation guidance so agents can generate more consistent interfaces. Includes an <a href="https://www.typeui.sh/docs/guides/opencode">OpenCode setup guide</a>.
    <br><br>
    <a href="https://github.com/bergside/typeui">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>UNMOJI</b> - <i>Strip emojis from output</i></summary>
  <blockquote>
    A simple plugin that strips ALL emojis from agent outputs in Opencode.
    <br><br>
    <a href="https://codeberg.org/bastiangx/opencode-unmoji">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Vibe Coding Slack Notifier</b> <img src="https://badgen.net/github/stars/Wangmerlyn/vibe-coding-slack-notifier" height="14"/> - <i>Slack DM alerts for OpenCode task completion</i></summary>
  <blockquote>
    OpenCode-compatible Slack notifier plugin and toolkit for Codex, OpenCode, Claude Code, and Gemini workflows.
    <br><br>
    <a href="https://github.com/Wangmerlyn/vibe-coding-slack-notifier">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>WakaTime</b> <img src="https://badgen.net/github/stars/angristan/opencode-wakatime" height="14"/> - <i>WakaTime integration</i></summary>
  <blockquote>
    WakaTime integration plugin for tracking coding activity in opencode sessions.
    <br><br>
    <a href="https://github.com/angristan/opencode-wakatime">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Warcraft Notifications</b> <img src="https://badgen.net/github/stars/pantheon-org/opencode-warcraft-notifications" height="14"/> - <i>Fun sound notifications</i></summary>
  <blockquote>
    Notification plugin with Warcraft sounds for opencode completion alerts.
    <br><br>
    <a href="https://github.com/pantheon-org/opencode-warcraft-notifications">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>With Context MCP</b> <img src="https://badgen.net/github/stars/boxpositron/with-context-mcp" height="14"/> - <i>Project-specific markdown notes</i></summary>
  <blockquote>
    MCP server for managing project-specific markdown notes with templates, batch edits, and ignore patterns.
    <br><br>
    <a href="https://github.com/boxpositron/with-context-mcp">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Worktree Memory Sync</b> <img src="https://badgen.net/github/stars/Edison-A-N/opencode-worktree-memory-sync" height="14"/> - <i>Auto-sync memory to git worktrees</i></summary>
  <blockquote>
    Automatically copies .opencode/memory/ from the main repository into new git worktrees on session init. Detects worktrees via the .git file, resolves the main repo, and syncs memory files only when the destination is empty — so it never overwrites your changes.
    <br><br>
    <a href="https://github.com/Edison-A-N/opencode-worktree-memory-sync">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Xquik</b> <img src="https://badgen.net/github/stars/Xquik-dev/x-twitter-scraper" height="14"/> - <i>X/Twitter data skill & MCP server</i></summary>
  <blockquote>
    X/Twitter data skill — MCP server, REST API, 20 extraction tools. Works with Claude Code, Cursor, Codex, and 40+ agents.
    <br><br>
    <a href="https://github.com/Xquik-dev/x-twitter-scraper">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Zellij Namer</b> <img src="https://badgen.net/github/stars/24601/opencode-zellij-namer" height="14"/> - <i>Auto-rename Zellij sessions</i></summary>
  <blockquote>
    Keeps your Zellij session name in sync with your work.
    <br><br>
    <a href="https://github.com/24601/opencode-zellij-namer">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<br>
<a href="https://github.com/awesome-opencode/awesome-opencode/blob/main/contributing.md"><b>➕ Add a Plugin via PR</b></a>
</details>

<br>

<div id="themes"></div>

<details>
<summary><strong>🎨 THEMES</strong></summary>
<br>

<details>
  <summary><b>Ayu Dark</b> <img src="https://badgen.net/github/stars/postrednik/opencode-ayu-theme" height="14"/> - <i>Port of the popular Ayu Dark color scheme with golden yellow accent.</i></summary>
  <blockquote>
    Port of the popular Ayu Dark color scheme with golden yellow accent.
    <br><br>
    <a href="https://github.com/postrednik/opencode-ayu-theme">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Charcoal</b> <img src="https://badgen.net/github/stars/VyomJain6904/charcoal-theme" height="14"/> - <i>Deep-black grayscale theme for OpenCode — no hues, all shades of gray</i></summary>
  <blockquote>
    Charcoal is a pure grayscale theme for OpenCode with a near-black (#0d0d0d) background.
All 56 theme color keys use shades of gray — no hues anywhere. Designed to match a
minimal dark terminal aesthetic.

Also available for bat and Ghostty in the same repository.

    <br><br>
    <a href="https://github.com/VyomJain6904/charcoal-theme">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Lavi</b> <img src="https://badgen.net/github/stars/b0o/lavi" height="14"/> - <i>A soft and sweet colorscheme for Opencode and 15+ other apps</i></summary>
  <blockquote>
    A soft, sweet dark theme for Opencode with rich purple tones and carefully tuned syntax and diff colors. Part of the Lavi colorscheme family, which also provides matching themes for Neovim, Alacritty, Ghostty, Kitty, Wezterm, Zellij, and other tools, with Nix flake and home-manager support.
    <br><br>
    <a href="https://github.com/b0o/lavi/tree/main/contrib/opencode">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Moonlight</b> <img src="https://badgen.net/github/stars/brunogabriel/opencode-moonlight-theme" height="14"/> - <i>A moonlight color theme for OpenCode based on the popular moonlight-vscode-theme.</i></summary>
  <blockquote>
    A moonlight color theme for OpenCode based on the popular moonlight-vscode-theme by atomiks. Features a dark, cool-toned palette inspired by moonlight aesthetics.
    <br><br>
    <a href="https://github.com/brunogabriel/opencode-moonlight-theme">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Light Themes</b> <img src="https://badgen.net/github/stars/fatihtoprakk/opencode-light-themes" height="14"/> - <i>A curated collection of 21 light color themes for OpenCode</i></summary>
  <blockquote>
    The largest collection of light themes for OpenCode. Includes 21 carefully crafted light themes converted from popular VS Code themes — scaefy-light (Atom One Light), Solarized Light, Vivid Light, Coffee Cream, GitHub Light, Quiet Light, Bluloco Light, Brackets Light Pro, NetBeans Light, Ysgrifennwr, Hop Light, GitHub Plus, Classic Light, HC Flurry, all Milkshake variants, and more. Bilingual (EN/TR) documentation and one-command install script included.
    <br><br>
    <a href="https://github.com/fatihtoprakk/opencode-light-themes">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Poimandres Theme</b> <img src="https://badgen.net/github/stars/ajaxdude/opencode-ai-poimandres-theme" height="14"/> - <i>Poimandres theme</i></summary>
  <blockquote>
    Poimandres theme for opencode.
    <br><br>
    <a href="https://github.com/ajaxdude/opencode-ai-poimandres-theme">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>VS Code Themes</b> <img src="https://badgen.net/github/stars/regen45t/opencode-vscode-themes" height="14"/> - <i>Ports of all built-in VS Code themes (Modern, Plus, VS, High Contrast).</i></summary>
  <blockquote>
    OpenCode ports of all built-in VS Code themes from the vscode.theme-defaults extension. Includes vscode-modern, vscode-plus, vscode-vs, and vscode-hc with automatic dark/light variant selection. One-line install script included.
    <br><br>
    <a href="https://github.com/regen45t/opencode-vscode-themes">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<br>
<a href="https://github.com/awesome-opencode/awesome-opencode/blob/main/contributing.md"><b>➕ Add a Theme via PR</b></a>
</details>

<br>

<div id="agents"></div>

<details>
<summary><strong>🤖 AGENTS</strong></summary>
<br>

<details>
  <summary><b>Agentic</b> <img src="https://badgen.net/github/stars/Cluster444/agentic" height="14"/> - <i>Modular AI agents</i></summary>
  <blockquote>
    Modular AI agents and commands for structured software development with opencode.
    <br><br>
    <a href="https://github.com/Cluster444/agentic">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Claude Subagents</b> <img src="https://badgen.net/github/stars/VoltAgent/awesome-claude-code-subagents" height="14"/> - <i>Claude Code subagents</i></summary>
  <blockquote>
    Comprehensive reference repository for production-ready Claude Code subagents.
    <br><br>
    <a href="https://github.com/VoltAgent/awesome-claude-code-subagents">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Agents</b> <img src="https://badgen.net/github/stars/darrenhinde/opencode-agents" height="14"/> - <i>Enhanced workflows</i></summary>
  <blockquote>
    A set of opencode configurations, prompts, agents, and plugins for enhanced development workflows.
    <br><br>
    <a href="https://github.com/darrenhinde/opencode-agents">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Python Expert Agent for OpenCode</b> <img src="https://badgen.net/github/stars/amrahman90/python-expert-agent" height="14"/> - <i>Python Expert Agent toolkit for OpenCode with subagents and skills</i></summary>
  <blockquote>
    A custom configurable agent toolkit includes 1 Primary Custom Agent python-expert with intelligent skill loading, Predefined Specialized Subagents for Code generation, review, testing, and exploration, On-Demand Skills for Python development projects, Context Files for Standards, patterns, and security guidelines.
    <br><br>
    <a href="https://github.com/amrahman90/python-expert-agent">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Redstone</b> <img src="https://badgen.net/github/stars/BackGwa/Redstone" height="14"/> - <i>AI-built Minecraft plugins</i></summary>
  <blockquote>
    an Opencode agent that simplifies Minecraft plugin development and deployment.
    <br><br>
    <a href="https://github.com/BackGwa/Redstone">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>server-manager</b> <img src="https://badgen.net/github/stars/workdocyeye/server-manager" height="14"/> - <i>Non-blocking background server management — start, track, and stop local dev servers without blocking your AI session.</i></summary>
  <blockquote>
    Start, track, and stop local dev servers in the background — without blocking your AI conversation. Supports Node.js, Python, Go, .NET, Java, Rust, PHP and any framework that runs a dev server. JSON state persistence, per-project log files, HTTP health checks, and log tail/grep for debugging.
    <br><br>
    <a href="https://github.com/workdocyeye/server-manager">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<br>
<a href="https://github.com/awesome-opencode/awesome-opencode/blob/main/contributing.md"><b>➕ Add an Agent via PR</b></a>
</details>

<br>

<div id="projects"></div>

<details>
<summary><strong>🛠 PROJECTS</strong></summary>
<br>

<details>
  <summary><b>Agent of Empires</b> <img src="https://badgen.net/github/stars/njbrake/agent-of-empires" height="14"/> - <i>Multi-session TUI for OpenCode</i></summary>
  <blockquote>
    A terminal UI for managing multiple OpenCode sessions in tmux with git worktree integration and Docker sandboxing.
    <br><br>
    <a href="https://github.com/njbrake/agent-of-empires">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>agent-dotfiles</b> <img src="https://badgen.net/github/stars/saqibameen/agent-dotfiles" height="14"/> - <i>Write AI coding rules once, sync to every agent</i></summary>
  <blockquote>
    Write AI coding rules once, sync to every agent. Supports Command Code, Claude Code, Cursor, Copilot, Codex, and OpenCode.
    <br><br>
    <a href="https://github.com/saqibameen/agent-dotfiles">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>agent-harness</b> <img src="https://badgen.net/github/stars/ar27111994/agent-harness" height="14"/> - <i>Reusable agent asset lifecycle for OpenCode workspaces</i></summary>
  <blockquote>
    A Node.js CLI for discovering, curating, staging, activating, and wiring reusable AI-agent assets into developer workspaces, including OpenCode.
    <br><br>
    <a href="https://github.com/ar27111994/agent-harness">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>AgentDeals</b> <img src="https://badgen.net/github/stars/robhunter/agentdeals" height="14"/> - <i>MCP server aggregating free tiers, credits, and referral codes across 1,500+ developer tools</i></summary>
  <blockquote>
    Remote MCP server that surfaces free tiers, credits, trials, and referral codes for developer infrastructure — Railway, Vercel, Fly, OpenAI, Anthropic, and 1,500+ other vendors. Exposes four tools (search_deals, plan_stack, compare_vendors, track_changes) so an agent can find the cheapest way to ship a given stack. Works with opencode via remote URL (https://agentdeals-production.up.railway.app/mcp). Also tracks pricing changes over time.
    <br><br>
    <a href="https://github.com/robhunter/agentdeals">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>agenttrace</b> <img src="https://badgen.net/github/stars/luoyuctl/agenttrace" height="14"/> - <i>Local TUI for OpenCode session cost, health, and trace reports</i></summary>
  <blockquote>
    Local-first Bubble Tea TUI and report CLI for inspecting OpenCode and other AI coding-agent logs with cost, tokens, latency, tool failures, anomalies, health gates, diffs, and reports.
    <br><br>
    <a href="https://github.com/luoyuctl/agenttrace">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Beads</b> <img src="https://badgen.net/github/stars/steveyegge/beads" height="14"/> - <i>Project task management</i></summary>
  <blockquote>
    Steve Yegge's project/task management system for agents (with beads_viewer UI).
    <br><br>
    <a href="https://github.com/steveyegge/beads">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>brood-box</b> <img src="https://badgen.net/github/stars/stacklok/brood-box" height="14"/> - <i>Hardware-isolated microVMs for coding agents</i></summary>
  <blockquote>
    Run AI coding agents (Claude Code, Codex, OpenCode) inside hardware-isolated microVMs with snapshot isolation, egress control, and MCP authorization.
    <br><br>
    <a href="https://github.com/stacklok/brood-box">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>bx</b> <img src="https://badgen.net/github/stars/holtwick/bx-mac" height="14"/> - <i>macOS file-system sandbox for AI coding agents</i></summary>
  <blockquote>
    Launch OpenCode, VSCode, Claude Code, or any command in a macOS sandbox (sandbox-exec). Dynamically blocks access to everything except the project directory — no containers, no VMs, just one command.
    <br><br>
    <a href="https://github.com/holtwick/bx-mac">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>CLI Proxy API</b> <img src="https://badgen.net/github/stars/router-for-me/CLIProxyAPI" height="14"/> - <i>Multi-model proxy</i></summary>
  <blockquote>
    A proxy server providing compatible API interfaces for multiple model CLIs.
    <br><br>
    <a href="https://github.com/router-for-me/CLIProxyAPI">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>CodeWalk</b> <img src="https://badgen.net/github/stars/verseles/codewalk" height="14"/> - <i>Native cross-platform Flutter client for OpenCode server mode</i></summary>
  <blockquote>
    A fast, native Flutter client for OpenCode server mode with realtime streaming chat, speech-to-text on all platforms, multi-server profiles, model selection, and a Material 3 responsive UI for Linux, macOS, Windows, Web, and Android.
    <br><br>
    <a href="https://github.com/verseles/codewalk">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Codex Proxy Server</b> <img src="https://badgen.net/github/stars/unluckyjori/Codex-Proxy-Server" height="14"/> - <i>Local API proxy</i></summary>
  <blockquote>
    A proxy server that provides a local API proxy for Codex/ChatGPT-like models.
    <br><br>
    <a href="https://github.com/unluckyjori/Codex-Proxy-Server">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Comfanion Workflow</b> <img src="https://badgen.net/github/stars/Comfanion/workflow" height="14"/> - <i>AI-assisted development workflow with agents, skills, and semantic search</i></summary>
  <blockquote>
    Complete workflow system for AI-assisted development. Includes specialized agents (analyst, PM, architect, developer), reusable skills, slash commands, semantic code search with local vectorizer, and sprint management with Jira integration.
    <br><br>
    <a href="https://github.com/Comfanion/workflow">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Cupcake</b> <img src="https://badgen.net/github/stars/eqtylab/cupcake" height="14"/> - <i>Policy enforcement layer</i></summary>
  <blockquote>
    A native policy-layer for AI coding agents built on OPA/Rego with native OpenCode plugin support.
    <br><br>
    <a href="https://github.com/eqtylab/cupcake">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Deck</b> <img src="https://badgen.net/github/stars/cofy-x/deck" height="14"/> - <i>Local cockpit for OpenCode-powered autonomous agents with secure sandboxes and live desktop visibility.</i></summary>
  <blockquote>
    Open-source desktop cockpit that runs OpenCode-integrated agents in isolated Docker sandboxes with chat plus live noVNC desktop monitoring, tool permission controls, and a Pilot bridge suite for orchestrating agents from Telegram, Slack, WhatsApp, and more.
    <br><br>
    <a href="https://github.com/cofy-x/deck">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Gemini CLI to API</b> <img src="https://badgen.net/github/stars/gzzhongqi/geminicli2api" height="14"/> - <i>Gemini proxy</i></summary>
  <blockquote>
    A proxy that converts the Gemini CLI tool into OpenAI-compatible endpoints.
    <br><br>
    <a href="https://github.com/gzzhongqi/geminicli2api">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>GolemBot</b> <img src="https://badgen.net/github/stars/0xranx/golembot" height="14"/> - <i>Unified AI assistant framework for multiple Coding Agent CLIs</i></summary>
  <blockquote>
    Wraps Claude Code, Cursor, OpenCode, and Codex behind a single API with a Skill system, IM channel adapters (Feishu/Slack/Telegram/Discord), fleet mode, and an interactive onboard wizard.
    <br><br>
    <a href="https://github.com/0xranx/golembot">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Handy</b> <img src="https://badgen.net/github/stars/cjpais/Handy" height="14"/> - <i>Speech to Text</i></summary>
  <blockquote>
    Easy Open Source Speech to Text.
    <br><br>
    <a href="https://github.com/cjpais/Handy">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>hcom</b> <img src="https://badgen.net/github/stars/aannoo/hcom" height="14"/> - <i>Let AI agents message, watch, and spawn each other across terminals</i></summary>
  <blockquote>
    Claude Code, Gemini CLI, Codex CLI, and OpenCode agents in separate terminals can message each other, detect file edit collisions, read transcripts, view terminal screens, subscribe to activity, and spawn/fork/resume agents. First-class OpenCode support with native plugin. Includes TUI dashboard, cross-device relay, Python API, and multi-agent workflow scripts. pip installable, MIT licensed.
    <br><br>
    <a href="https://github.com/aannoo/hcom">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>jailoc</b> <img src="https://badgen.net/github/stars/seznam/jailoc" height="14"/> - <i>Sandboxed Docker environments for OpenCode agents</i></summary>
  <blockquote>
    CLI tool that wraps OpenCode agents in isolated Docker Compose environments with file isolation (bind-mounted workspaces only), network isolation (private subnets blocked by default with host allowlisting), and a per-workspace DinD sidecar. Zero config to start.

    <br><br>
    <a href="https://github.com/seznam/jailoc">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Kimaki</b> <img src="https://badgen.net/github/stars/remorses/kimaki" height="14"/> - <i>Discord bot controller</i></summary>
  <blockquote>
    A Discord bot to control opencode sessions on any computer via Discord.
    <br><br>
    <a href="https://github.com/remorses/kimaki/">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>MCP Voice Interface</b> <img src="https://badgen.net/github/stars/shantur/mcp-voice-interface" height="14"/> - <i>Talk to AI assistants</i></summary>
  <blockquote>
    Talk to AI assistants using your voice through a web browser. Compatible with Claude Desktop and opencode.
    <br><br>
    <a href="https://github.com/shantur/mcp-voice-interface">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OC Context (occtx)</b> <img src="https://badgen.net/github/stars/hungthai1401/occtx" height="14"/> - <i>Switch contexts quickly</i></summary>
  <blockquote>
    A command-line tool for switching between different opencode contexts quickly.
    <br><br>
    <a href="https://github.com/hungthai1401/occtx">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OC Manager</b> <img src="https://badgen.net/github/stars/kcrommett/oc-manager" height="14"/> - <i>Metadata TUI</i></summary>
  <blockquote>
    Terminal UI for inspecting, filtering, and pruning OpenCode metadata stored on disk.
    <br><br>
    <a href="https://github.com/kcrommett/oc-manager">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OC Monitor Share</b> <img src="https://badgen.net/github/stars/Shlomob/ocmonitor-share" height="14"/> - <i>CLI monitoring tool</i></summary>
  <blockquote>
    A CLI tool for monitoring and analysing opencode AI coding usage.
    <br><br>
    <a href="https://github.com/Shlomob/ocmonitor-share">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Octto</b> <img src="https://badgen.net/github/stars/vtemian/octto" height="14"/> - <i>Interactive browser UI for AI brainstorming</i></summary>
  <blockquote>
    Interactive browser UI for AI brainstorming with multi-question forms, parallel exploration branches, and visual feedback.
    <br><br>
    <a href="https://github.com/vtemian/octto">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OCX</b> <img src="https://badgen.net/github/stars/kdcokenny/ocx" height="14"/> - <i>OpenCode package manager</i></summary>
  <blockquote>
    The missing package manager for OpenCode extensions - ShadCN model with Ghost Mode.
    <br><br>
    <a href="https://github.com/kdcokenny/ocx">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Open Agent</b> <img src="https://badgen.net/github/stars/Th0rgal/openagent" height="14"/> - <i>Self-hosted control plane</i></summary>
  <blockquote>
    Self-hosted control plane for OpenCode agents with isolated Linux workspaces (systemd-nspawn), git-backed Library configuration, and multi-platform dashboards (Next.js web, SwiftUI iOS).
    <br><br>
    <a href="https://github.com/Th0rgal/openagent">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Open Dispatch</b> <img src="https://badgen.net/github/stars/bobum/open-dispatch" height="14"/> - <i>Control agents from Slack, Teams, or Discord — locally or via Fly.io Sprites</i></summary>
  <blockquote>
    Bridge app connecting chat platforms (Slack/Teams/Discord) to AI coding assistants. Run agents locally or spin up isolated Fly.io Sprites for parallel execution. Supports 75+ AI providers via OpenCode, Claude CLI, real-time output streaming, session persistence, and smart message routing.
    <br><br>
    <a href="https://github.com/bobum/open-dispatch">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenChamber</b> <img src="https://badgen.net/github/stars/btriapitsyn/openchamber" height="14"/> - <i>GUI for OpenCode</i></summary>
  <blockquote>
    A fan-made web and desktop interface for OpenCode with VS Code extension, multiple sessions, and git worktrees management.
    <br><br>
    <a href="https://github.com/btriapitsyn/openchamber">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode A2A</b> <img src="https://badgen.net/github/stars/Intelligent-Internet/opencode-a2a" height="14"/> - <i>Full A2A Protocol support for OpenCode.</i></summary>
  <blockquote>
    A production-ready A2A Protocol implementation that exposes OpenCode as a standardized Agent-to-Agent service, enabling seamless cross-agent collaboration and automated workflows.
    <br><br>
    <a href="https://github.com/Intelligent-Internet/opencode-a2a">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Chat Export</b> <img src="https://badgen.net/github/stars/jjserenity/opencode-chat-export" height="14"/> - <i>MCP server to export chat history to Markdown</i></summary>
  <blockquote>
    MCP server that exports OpenCode chat history to Markdown files with tool calls, reasoning, and cost summaries. Export current session, specific sessions by ID, or bulk exports. pip installable.
    <br><br>
    <a href="https://github.com/jjserenity/opencode-chat-export">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode DDEV</b> <img src="https://badgen.net/github/stars/JUVOJustin/opencode-ddev" height="14"/> - <i>DDEV container wrapper</i></summary>
  <blockquote>
    Wraps bash commands to execute inside the DDEV container (Docker-based PHP development environments).
    <br><br>
    <a href="https://github.com/JUVOJustin/opencode-ddev">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode History Search</b> <img src="https://badgen.net/github/stars/joeyism/opencode-history-search" height="14"/> - <i>Search OpenCode conversations with keyword, regex, and fuzzy search</i></summary>
  <blockquote>
    Search through your OpenCode conversation history with powerful keyword, regex, and fuzzy search capabilities. Features date filtering, multiple match types (titles, messages, tools, file paths), and fast performance (<50ms queries).
    <br><br>
    <a href="https://github.com/joeyism/opencode-history-search">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Neovim</b> <img src="https://badgen.net/github/stars/NickvanDyke/opencode.nvim" height="14"/> - <i>Neovim plugin</i></summary>
  <blockquote>
    Neovim plugin for making convenient editor-aware prompts.
    <br><br>
    <a href="https://github.com/NickvanDyke/opencode.nvim">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Profile Router</b> <img src="https://badgen.net/github/stars/leolaurindo/opencode-profile-router" height="14"/> - <i>Profile router for auth and selective config isolation</i></summary>
  <blockquote>
    Shell wrapper for OpenCode that selects named profiles by path and can isolate provider login state, config directories, and data roots selectively and independently per profile.
    <br><br>
    <a href="https://github.com/leolaurindo/opencode-profile-router">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Session Manager</b> <img src="https://badgen.net/github/stars/GNITOAHC/opencode-session" height="14"/> - <i>Session viewer & manager</i></summary>
  <blockquote>
    View & Manage sessions for opencode, also detect orphan sessions for deletion
    <br><br>
    <a href="https://github.com/GNITOAHC/opencode-session">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Sessions</b> <img src="https://badgen.net/github/stars/malhashemi/opencode-sessions" height="14"/> - <i>Session tracker</i></summary>
  <blockquote>
    Session management tool for opencode to track and organise coding sessions.
    <br><br>
    <a href="https://github.com/malhashemi/opencode-sessions">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Skills</b> <img src="https://badgen.net/github/stars/malhashemi/opencode-skills" height="14"/> - <i>Skills management</i></summary>
  <blockquote>
    Skills management system for organising and tracking opencode capabilities.
    <br><br>
    <a href="https://github.com/malhashemi/opencode-skills">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Telegram Bot</b> <img src="https://badgen.net/github/stars/grinev/opencode-telegram-bot" height="14"/> - <i>Telegram bot client for OpenCode CLI</i></summary>
  <blockquote>
    Run and monitor AI coding tasks from your phone while everything runs locally on your machine.
    <br><br>
    <a href="https://github.com/grinev/opencode-telegram-bot">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenCode Vim</b> <img src="https://badgen.net/github/stars/leohenon/opencode-vim" height="14"/> - <i>OpenCode fork with built-in Vim mode</i></summary>
  <blockquote>
    An unofficial OpenCode fork that adds Vim motions, navigation, and editing directly to the OpenCode TUI.
    <br><br>
    <a href="https://github.com/leohenon/opencode-vim">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Web</b> <img src="https://badgen.net/github/stars/kcrommett/opencode-web" height="14"/> - <i>Browser-based access</i></summary>
  <blockquote>
    Web interface for opencode - browser-based access to AI coding agent.
    <br><br>
    <a href="https://github.com/kcrommett/opencode-web">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>opencode-kanban</b> <img src="https://badgen.net/github/stars/qrafty-ai/opencode-kanban" height="14"/> - <i>Kanban-style task management for opencode</i></summary>
  <blockquote>
    Kanban tool that allows you to stay in terminal.
    <br><br>
    <a href="https://github.com/qrafty-ai/opencode-kanban">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenSpec</b> <img src="https://badgen.net/github/stars/Fission-AI/OpenSpec" height="14"/> - <i>Spec-driven development</i></summary>
  <blockquote>
    Spec-driven development with opencode - structured specification management.
    <br><br>
    <a href="https://github.com/Fission-AI/OpenSpec">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>OpenWork</b> <img src="https://badgen.net/github/stars/different-ai/openwork" height="14"/> - <i>Desktop GUI for OpenCode workflows</i></summary>
  <blockquote>
    Open-source alternative to Claude Cowork built on top of OpenCode. Provides a polished desktop UI for sessions, skills, plugins, and templates.
    <br><br>
    <a href="https://github.com/different-ai/openwork">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>P4OC (Pocket for OpenCode)</b> <img src="https://badgen.net/github/stars/theblazehen/P4OC" height="14"/> - <i>Android client for OpenCode</i></summary>
  <blockquote>
    Native Android app for controlling OpenCode from your phone. Chat with AI, manage sessions, browse files with syntax highlighting, view diffs, and use an embedded terminal — all styled with a terminal UI aesthetic. Available on Google Play.
    <br><br>
    <a href="https://github.com/theblazehen/P4OC">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Qwen Code OAI Proxy</b> <img src="https://badgen.net/github/stars/aptdnfapt/qwen-code-oai-proxy" height="14"/> - <i>Qwen model proxy</i></summary>
  <blockquote>
    An OpenAI-Compatible Proxy Server for Qwen models.
    <br><br>
    <a href="https://github.com/aptdnfapt/qwen-code-oai-proxy">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>supamem</b> <img src="https://badgen.net/github/stars/dzmitrys-dev/supamem" height="14"/> - <i>Project-agnostic dual-memory MCP CLI for OpenCode</i></summary>
  <blockquote>
    Adds semantic memory (Qdrant tuned hybrid retrieval — RRF fusion of dense MiniLM + sparse BM25) and structural memory hooks to OpenCode via MCP. Ships an installer that wires `qdrant-find` / `qdrant-store` tools and a snapshot hook into your project's OpenCode config. Python 3.12+, MIT, on PyPI as `supamem`.
    <br><br>
    <a href="https://github.com/dzmitrys-dev/supamem/">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>SwarmClaw</b> <img src="https://badgen.net/github/stars/swarmclawai/swarmclaw" height="14"/> - <i>Self-hosted multi-agent runtime with first-class OpenCode delegation</i></summary>
  <blockquote>
    Self-hosted runtime for autonomous AI agents with heartbeats, schedules, delegation, memory, runtime skills, and reviewed conversation-to-skill learning. Orchestrates OpenCode alongside Claude Code, Codex, Gemini CLI, Copilot CLI, Cursor Agent, Goose, Qwen Code, Droid, and 20+ LLM providers. Ships as an Electron desktop app, CLI, and Docker image. MCP-native (server and client). MIT, TypeScript.
    <br><br>
    <a href="https://github.com/swarmclawai/swarmclaw">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>SwarmVault</b> <img src="https://badgen.net/github/stars/swarmclawai/swarmvault" height="14"/> - <i>Local-first RAG knowledge base compiler with bundled skill and MCP server</i></summary>
  <blockquote>
    Turns raw docs, research, and code into a persistent markdown wiki, knowledge graph, and hybrid SQLite FTS + embeddings search. Ships a bundled skill (schema-first, graph-query-first conventions) and an MCP server, so it works with OpenCode, Claude Code, and Codex. Offline heuristic provider by default; optional Ollama for local embeddings.
    <br><br>
    <a href="https://github.com/swarmclawai/swarmvault">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Tokscale</b> <img src="https://badgen.net/github/stars/junhoyeo/tokscale" height="14"/> - <i>Token usage tracking CLI</i></summary>
  <blockquote>
    A CLI tool for tracking token usage from OpenCode and other coding agents (Claude Code, Codex, Gemini CLI, and Cursor IDE).
    <br><br>
    <a href="https://github.com/junhoyeo/tokscale">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Universal LLM API Proxy</b> <img src="https://badgen.net/github/stars/Mirrowel/LLM-API-Key-Proxy" height="14"/> - <i>Universal multi-model proxy and library - made with Opencode community</i></summary>
  <blockquote>
    Universal LLM Gateway: One API, every LLM. OpenAI/Anthropic-compatible endpoints with multi-provider translation and intelligent load-balancing. Works with any application that supports custom OpenAI/Anthropic base URLs—no code changes required in your existing tools. Best support for Antigravity/Gemini CLI out of the competition. Deploy anywhere. <a href='https://discord.com/channels/1391832426048651334/1449788759917858959'>Opencode Discord discussion</a>
    <br><br>
    <a href="https://github.com/Mirrowel/LLM-API-Key-Proxy">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Unship</b> <img src="https://badgen.net/github/stars/mbenhard/unship" height="14"/> - <i>Compare AI-made UI variants locally</i></summary>
  <blockquote>
    Local CLI and browser picker for comparing temporary UI variants created by coding agents like OpenCode, then keeping one and cleaning up the rest.
    <br><br>
    <a href="https://github.com/mbenhard/unship">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Vibe Kanban</b> <img src="https://badgen.net/github/stars/BloopAI/vibe-kanban" height="14"/> - <i>Manage AI in parallel</i></summary>
  <blockquote>
    A Kanban board to manage and orchestrate AI coding agents in parallel.
    <br><br>
    <a href="https://github.com/BloopAI/vibe-kanban">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<br>
<a href="https://github.com/awesome-opencode/awesome-opencode/blob/main/contributing.md"><b>➕ Add a Project via PR</b></a>
</details>

<br>

<div id="resources"></div>

<details>
<summary><strong>📚 RESOURCES</strong></summary>
<br>

<details>
  <summary><b>Akephalos</b> <img src="https://badgen.net/github/stars/sunnja69/akephalos" height="14"/> - <i>Local-first markdown passport for portable agent context and memory</i></summary>
  <blockquote>
    A local-first, markdown-first `.akephalos` passport for portable agent preferences, tool notes, rules, project context, and durable memories. It uses plain files and Git so MCP-capable coding-agent workflows can inspect and carry context across tools and machines without hosted sync.
    <br><br>
    <a href="https://github.com/sunnja69/akephalos">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Coding Agent Orchestration</b> <img src="https://badgen.net/github/stars/evermeer/CodingAgentOrchestration" height="14"/> - <i>OpenCode Setup Guide / Orchestration</i></summary>
  <blockquote>
    An opinionated but practical handbook that argues for treating AI coding tools as a composable, multi-agent system rather than a single assistant, and then walks through how to implement that mindset using OpenCode's CLI, configuration system, and ecosystem (agents, tools, skills, and plugins).
    <br><br>
    <a href="https://github.com/evermeer/CodingAgentOrchestration">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Debug Log to Text File</b> - <i>Troubleshooting guide</i></summary>
  <blockquote>
    How to output a debug log from opencode to a text file for troubleshooting.
    <br><br>
    <a href="https://github.com/awesome-opencode/awesome-opencode/discussions/19">🔗 <b>View Discussion</b></a>
  </blockquote>
</details>

<details>
  <summary><b>GoTTY</b> <img src="https://badgen.net/github/stars/sorenisanerd/gotty" height="14"/> - <i>Turn CLI into Web App</i></summary>
  <blockquote>
    A simple command-line tool that turns your CLI tools, like opencode, into web applications.
    <br><br>
    <a href="https://github.com/sorenisanerd/gotty">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>kickstart.opencode</b> <img src="https://badgen.net/github/stars/orionpax1997/kickstart.opencode" height="14"/> - <i>A heavily commented OpenCode starter config that teaches you what everything does.</i></summary>
  <blockquote>
    Inspired by kickstart.nvim. A minimal, well-commented OpenCode configuration designed as a starting point, not a framework. Every decision is explained. Includes free-only models and MCPs, a plan/execute workflow with interview-style clarification, and a careful agent for supervised AI execution. Read it, understand it, make it yours.
    <br><br>
    <a href="https://github.com/orionpax1997/kickstart.opencode">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<details>
  <summary><b>Opencode Config Starter</b> <img src="https://badgen.net/github/stars/jjmartres/opencode" height="14"/> - <i>Flexible config starting point</i></summary>
  <blockquote>
    A powerful custom opencode configuration with agents, commands, rules, skills, and pre-configured MCP server.
    <br><br>
    <a href="https://github.com/jjmartres/opencode">🔗 <b>View Repository</b></a>
  </blockquote>
</details>

<br>
<a href="https://github.com/awesome-opencode/awesome-opencode/blob/main/contributing.md"><b>➕ Add a Resource via PR</b></a>
</details>

<br><br>

<div align="center">
<h3>🤝 Contributing</h3>
Found an Awesome Opencode project? <br>
<a href="https://github.com/awesome-opencode/awesome-opencode/blob/main/contributing.md"><b>Submit a Pull Request</b></a> to add it to the list!
<br><br>
<sub>Released under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0 Universal</a>.</sub>
</div>
