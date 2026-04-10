📋 Changelog 📋

📅 April 10, 2026 — Version 1.0.9

🆕 Chat Window: Copy last button

🆕 Vision support in Chat \& RAG

🐛 Bugfix: Intent Engine
🐛 Bugfix: Tool Call: Graceful fallback

🐛 Bugfix: Model Manager: Auto-Discovery

🐛 Bugfix: Intent Engine - File tool detection
🐛 Bugfix: Tool Call: Source Path

🐛 Bugfix: Chat Window Rendering

📅 April 9, 2026 — Version 1.0.8

🐛 Bugfix: Intent Engine: Tool Call
🐛 Bugfix: Tool Call: Graceful fallback
🐛 Bugfix: 4-Tier Memory: Fallback
🐛 Bugfix: Chat Window: Sidebar
🐛 Bugfix: Config Path
🐛 Bugfix: MCP Server toggle

🐛 Bugfix: Model Manager: Auto-Discovery

📅 April 5, 2026 — Version 1.0.7

🌐 Global Memory Storage — A personal AI that learns and shares! Memories are stored globally and available to ALL agents, creating a unified knowledge base
🔄 Memory Sync Hub — Import/Export memories between projects, share knowledge across agents, full control over your AI's memory
🔄 Dynamic Mid-Term Memory — Smarter conversation compression with configurable thresholds, better control over memory transitions
🆕 Model Manager — 2-pane window with 🍋 Lemonade Backend: Chat models (upper pane) and Embedding models (bottom pane) side by side for simultaneous multi-model support. (🍋 Lemonade only)
🆕 MCP Manager — Visual interface for managing MCP servers. Enable/disable, configure, and monitor servers without editing config files.
🆕 Gmail MCP Server — Full agentic Gmail control: list, get, send, label, trash, and archive emails. Archive command saves emails in 3 formats (JSON, EML, MBOX) — perfect for backups.
🧠 4-Tier Memory Improvements — Profile-First retrieval (61% token savings), conversation compaction (93% token reduction), auto-extraction from conversations.
🔀 Intelligent Router \& Intent Engine — Smart tool call routing, intent classification (memory search, tool call, document query), max 3 tool calls per request (loop prevention).
💬 Chat History Awareness — Agent remembers from your last conversation. Prompts augmented with semantic memories + episodic summaries.
📊 Live Session Stats — Real-time token usage, tokens/sec, and time-to-first-token displayed in the chat window. Monitor AI performance: input/output tokens, prompt tokens, and response speed. (🍋 Lemonade backend only)
🐛 Bugfix: 4-Tier Memory \& RAG improvements
🐛 Bugfix: MCP server tool calls
🐛 Bugfix: Chat engine stability

📅 March 29, 2026 — Version 1.0.6

🐛 Bugfix: MCP tool calls
🐛 Bugfix: UI/UX

📅 March 26, 2026 — Version 1.0.5

🐛 Bugfix: MCP tool calls
🐛 Bugfix: 4-tier memory
🐛 Bugfix: Storage

📅 March 26, 2026 — Version 1.0.4

🐛 Bugfix: Chat History

📅 March 15, 2026 — Version 1.0.2 - 1.0.3

💬 Chat History — all your past conversations in a sidebar. Search, reload, delete. Nothing gets lost.
🧠 Memory that stacks — short-term, summaries, long-term (personas, facts, preferences), and document search. Each layer builds on the last.
☁️ Google Gemini support — add your API key and it works, including free tier models.
🔍 Works without AI hardware — document search falls back to text-based retrieval if no NPU is available. 15 languages supported, auto-detected.
⚡ RAG opens 40x faster — startup went from 4s to under 0.1s.
🗃️ All data stored in a single .sorana/ folder. Existing installs migrate automatically.

📅 March 15, 2026 — Version 1.0.1

• Major: AI core completely rewritten — now powered by Pith SDK
• Scalable batch processing: handles thousands of items (no single-prompt limits)
• Smart prompt tiers optimized for 1B, 8B, and 30B models
• Breakthrough: Small models (1B, 8B) achieve now accurate grouping \& categorization
• Major: Externalized Llama.cpp with automatic download \& caching
• Major: Much smaller binary
• Major: New "Append to Workspace" button
• Internal: Core engine refactored for improved stability
• Bugfix: UI buttons rebuilt and refreshed for a cleaner experience
• Bugfix: Context Menu rebuilt and cleaned up
• Bugfix: Grid-points
• Bugfix: Model Manager select and activate model
• Bugfix: Splash screen freeze
• Bugfix: ssl certificate

📅 March 2026 - Version 1.0.0 - Initial Release

• AI-powered browser tab organization
• Tab screenshots with visual preview
• Chat with websites functionality
• AI Research Agents
• Canvas ↔ Browser bidirectional sync
• MCP Server for browser operations
• Chrome Extension integration
• Layout save/load to .sorana\_browser.json
• Mindmap generation
• No-code agent orchestration

