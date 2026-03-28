🚀 TabNeuron - Spatial Tab Management & AI Research Workspace 🚀

TabNeuron is an AI-powered desktop workspace that transforms browser tabs into an interactive research environment. It breaks your tabs out of the browser and maps them onto an infinite 2D spatial canvas.

You can chat with websites and the internet, deploy AI agents for automated research, and sync your visual layouts bidirectionally with your browser.

✨ The Desktop Advantage ✨
We live in our browsers, but traditional tabs are dead ends. They don't talk to each other. TabNeuron provides a native desktop canvas that transforms passive tabs into an active research workspace. The application is portable and keeps data strictly under user control.

🔑 Core Capabilities
* Visual Canvas Editor: 2D spatial organization with drag & drop tools.
🧠 Advanced Model Management: Connect to multiple cloud, on-prem and local LLM backends including OpenAI, Mistral, Lemonade, Llamacpp, LM Studio, Ollama and mnany other compatible services. The model manager lists all available models and allows users to activate or deactivate models as needed for specific tasks.
es:
  • Local and On-Prem Services: Lemonade, Llamacpp, LM Studio, Ollama and other self-hosted LLM solutions
  • Cloud Services: OpenAI, Mistral, Gemini and other cloud-based AI platforms
  • Flexible Configuration: Easily switch between different AI backends based on your needs, privacy requirements, and performance considerations
* Mindmap Overview: Generates a structural overview of your groups and tabs.
* Validated Browser Sync: Real-time bidirectional sync between the canvas and Chrome Tab Groups.
* Tab Screenshots: Automatic screenshots provide a scaled preview on the canvas.
* Deep Metadata: Extracts title, URL, description, and Open Graph tags for semantic analysis.
* Configurable Extraction: Pulls between 500 and 10000 characters of main content, stripping ads.
* Internet chat: Talk directly to the internet.
  Examples: "What's the weather in Berlin?", "Compare iPhone 16 vs Samsung S25", "Find best wireless earbuds under 100",
            "Extract all product links from Amazon search", "Check if website is down"
* Tab Chat: Natural language interface to ask questions across single or multiple selected pages simultaneously.
  Examples: "Summarize this article", "Compare the technical specifications across these 4 review tabs.",
            "Extract all Python code blocks from this tutorial and format them.",
            "Read these 5 news articles and summarize the overarching timeline."
* Data Persistence: Layouts automatically save to a local .sorana_browser.json file on close.
* Built-in MCP Server: Native Model Context Protocol server for file and web operations:
  • File Operations: read_file, read_file_from_line, write_file, list_directory, create_directory, move_file, search_files, get_file_info, edit_file, get_filesystem_info
  • Web Content Tools: web_fetch_content, web_scrape_page, web_extract_links, web_search, web_get_metadata, web_save_snapshot
* 4-Tier AI Memory System: Short-term memory, conversation summaries, long-term memory (personas, facts, preferences), and document search.
* Chat History: All past conversations stored in a sidebar. Search, reload, delete — nothing gets lost.
* Document OCR: Extract text from PDFs, images, and web pages. Tesseract OCR support for scanned content.
* Google Gemini Support: Add your API key and use Gemini models including free tier options.
* Centralized Data Storage: All data stored in a single .sorana/ folder.

🤖 AI Agents & Pipeline Builder
TabNeuron features a no-code agent builder for automated research workflows.
* Connect agents by holding CTRL+ALT and clicking an Agent title to get a green arrow.
* Point the green arrow to a parent agent to establish a connection.
* In the child Agent configuration, enable 'Auto' and 'Passthrough' to create a collaborative pipeline.

🔌 MCP Server Usage Guide
TabNeuron includes a built-in MCP server for advanced file and web operations through AI agents.

To use:
1. Create an agent in the workspace
2. Right-click on the agent title and select "Chat"
3. Interact directly with files, folders, and web content

File Operations Examples:
• "List the first 10 files in the current directory" (list_directory)
• "Read document.txt and summarize" (read_file)
• "Move report.docx to archive/" (move_file)
• "Write the summary to output.txt" (write_file)

Web Content Tools Examples:
• "What's the weather in Berlin?" (web_fetch_content)
• "Find best wireless earbuds under 100€" (web_search)
• "Extract all links from this page" (web_extract_links)
• "Fetch product specs and save to file" (combined workflow)

🤖 Connecting Agents 🤖

To connect agents in TabNeuron:
🔘 Hold CTRL+ALT and click on an Agent title to get a green arrow
🔗 Point the green arrow to the parent agent to establish the connection
⚙️ In the child Agent configuration, enable 'Auto' (puts agent in orchestration mode to receive instructions from parent agent) and 'Passthrough' (allows the agent to also pass documents).
🤝 This creates a pipeline where agents can pass insights and collaborate on complex tasks


🧠 AI Model Configuration & Hardware Requirements
TabNeuron is backend-agnostic. You can use local models for privacy or cloud models for performance.
* Built-in Model: A lightweight 806MB model downloads on the first run and works fully offline.
* Cloud Services: Connect to OpenAI, Mistral, Lemonade, and others without local hardware limits.
* Local & On-Prem: Connect to Lemonade, LM Studio, Ollama or Llama.cpp. Download and run models locally (only Llama.cpp)
* The Model Manager is a powerful tool that allows you to manage AI models for TabNeuron. 
  It provides a centralized interface for activating, deactivating, and configuring both local and cloud-based AI models.
• Cloud Model Integration: Connect to OpenAI, Mistral, Gemini and other cloud services

* IMPORTANT HARDWARE NOTE: Running 8B parameter models locally requires at least 8 GB RAM or 8 GB VRAM for smooth operation.

💡 Tips for Model Selection:

For Quick Tasks:
• Use smaller models (1B-3B parameters)
• Fast responses for simple tab organization
• Lower RAM requirements

For Complex Analysis:
• Larger models (8B+ parameters)
• Better accuracy for tab content analysis
• Recommended: Llama 3.1 8B Instruct or higher

For Privacy:
• Local models (Lemonade, Ollama, Llama.cpp)
• Your data stays on your machine
• No internet connection required

For Best Quality:
• Cloud models (OpenAI, Mistral, Claude)
• State-of-the-art performance
• Requires API key and internet

Optimization Strategies:

• Shorter content (500-2K chars) = faster processing
  
💻 System Requirements
* Operating System: Windows 10/11 (64-bit)
* Browser: Google Chrome (required for Extension)
* RAM: Minimum 4 GB (8 GB+ recommended)
* Storage: Minimum 1 GB (application + model)

📦 Browser Extension Installation
TabNeuron requires a lightweight bridge extension to communicate with Chrome.
1. Open Chrome and navigate to chrome://extensions/
2. Enable "Developer mode"
3. Click "Load unpacked" and select the chrome-extension/ folder
4. Click the extension icon and configure Host to "localhost" and Port to "5555"
5. Click "▶️ Start" to begin the 2s polling API

🚀 Quick Start 🚀

1. Download TabNeuron.exe and run it
2. Load Chrome Extension (see Installation section below)
3. Configure AI backend (built-in model or connect your own)
4. Click "🌐 Organize Tabs" in the app to load tabs
5. AI automatically groups tabs by content
6. Create an agent. Add a tab to the agent. Try "Chat" (right-click agent) to ask questions
8. Organize tabs on canvas, click Apply to sync to browser
9. Browser Tab Groups update automatically
10. Click save to backup all the groups and tabs.

🤖 AI Model Hardware Requirements:
  • Built-in Models: Range from 1B parameter (806MB) to 20B parameter (12-16GB)
  • Recommended 8B Models (e.g., Llama 3.1 8b Instruct): Minimum 12 GB RAM or 8 GB VRAM for smooth operation
  • Hardware Requirements Increase with Model Size: Larger models with more parameters require higher specifications
  • Cloud Models: No local hardware requirements (requires internet connection)

⚠️ IMPORTANT HARDWARE NOTE: Running larger 8B parameter models locally requires sufficient hardware - ideally 16 GB RAM or 8 GB VRAM - to function smoothly. If hardware is limited, the app includes a smaller portable model (which works fully offline but may classify complex files as "Miscellaneous") or allows connection to cloud-based LLMs for high accuracy without the local hardware cost.

📥 Downloads 📥

🔹 Latest version: TabNeuron.exe v1.0.5
🔢 MD5 Checksum (.exe): 8c77fd846a76f80d476116f8910ec78b
🔹 Chrome Extension: chrome-extension.crx
🌐 Website: http://tetramatrix.github.io/TabNeuron
💬 Discord: https://discord.gg/4QkQSfSATF



📋 Changelog 📋

📅 March 26, 2027 — Version 1.0.5

Bugfix: mcp tool calls
Bugfix: 4-tier memory
Bugfix: storage

📅 March 26, 2026 — Version 1.0.4

Bugfix: Chat History

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
  • Breakthrough: Small models (1B, 8B) achieve now accurate grouping & categorization                                              
• Major: Externalized Llama.cpp with automatic download & caching
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
• Layout save/load to .sorana_browser.json
• Mindmap generation
• No-code agent orchestration




❤️ Support the Development ❤️

If you find TabNeuron useful, please consider donating to support ongoing development!
☕ Buy us a coffee or support via PayPal or Bitcoin Cash!

💰 Bitcoin Cash (BCH): bitcoincash:qrvhk77ujevd9n7jse4jewm99eg95at7tvc6m9v2vv

💳 PayPal: paypal.me/Gigamegs

Thank you for your support!


🚀 Discover our Spaceship! 🚀

🎮 Retro Arcade 2d side-scroller bullet-hell shmup game: Spaceship

🌐 https://tetramatrix.github.io/spaceship/
🎮 https://www.indiedb.com/games/new-spaceship
🎮 https://tetramatrix.itch.io/old-school-retro-mini-game-spaceship

🔧 Discover our RyzenZPilot! 🔧

💻 RyzenZPilot - AMD Ryzen Power Management Tool

RyzenZPilot is a powerful tool for managing AMD Ryzen processor power settings on Windows.
It allows users to adjust CPU performance, power limits, and thermal configurations
for optimal performance and efficiency.

🌐 Website: http://tetramatrix.github.io/RyzenZPilot
💬 Discord: https://discord.gg/4QkQSfSATF

🖥️ Discover our Aicono - AI intelligent desktop icon autopilot 🖥️

Aicono organizes a cluttered Windows desktop automatically by grouping icons with AI and arranging them into a neat, overlap-free layout with a live visual preview. It runs portable with sane defaults out of the box, and can operate fully offline via manual JSON configuration when AI services are unavailable.

🌐 Website: http://tetramatrix.github.io/Aicono
📰 Softpedia: https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Aicono.shtml
🏪 Microsoft Store: https://apps.microsoft.com/detail/xp8lnkj7h4b1ws
💻 Chip: https://www.chip.de/downloads/Aicono_186527264.html
💬 Discord: https://discord.gg/4QkQSfSATF

# 🚀 Sorana - Visual AI Workspace

🧠 Sorana is an AI-powered visual workspace that transforms how you organize and interact with digital files. Using semantic AI analysis, it automatically groups related files and folders onto a spatial 2D canvas, replacing traditional hierarchies with intuitive visual layouts. Build drag-and-drop workspaces and no-code agent pipelines, connect to on-prem or cloud AI backends (OpenAI, Mistral, LLamacpp, Lemonade, Ollama), and keep your data under your control.

🌐 Website: https://tetramatrix.github.io/Sorana/
📰 Softpedia: https://www.softpedia.com/get/System/File-Management/Sorana.shtml
💬 Discord: https://discord.gg/4QkQSfSATF