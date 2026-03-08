🚀 TabNeuron - Spatial Tab Management & AI Research Workspace 🚀

TabNeuron is an AI-powered desktop workspace that transforms browser tabs into an interactive research environment. It breaks your tabs out of the browser and maps them onto an infinite 2D spatial canvas.

You can chat with websites, deploy AI agents for automated research, and sync your visual layouts bidirectionally with your browser.

✨ The Desktop Advantage ✨
We live in our browsers, but traditional tabs are dead ends. They don't talk to each other. TabNeuron provides a native desktop canvas that transforms passive tabs into an active research workspace. The application is portable and keeps data strictly under user control.

🔑 Core Capabilities
* Visual Canvas Editor: 2D spatial organization with drag & drop tools.
* Mindmap Overview: Generates a structural overview of your groups.
* Validated Browser Sync: Real-time bidirectional sync between the canvas and Chrome Tab Groups.
* Tab Screenshots: Automatic screenshots provide a scaled preview on the canvas.
* Deep Metadata: Extracts title, URL, description, and Open Graph tags for semantic analysis.
* Configurable Extraction: Pulls between 500 and 10000 characters of main content, stripping ads.
* Multi-Tab Chat: Natural language interface to ask questions across multiple selected pages simultaneously.
  Examples: "What's the weather in Berlin?", "Find best wireless earbuds under 100", "Get latest Python release", "Compare iPhone 16 vs Samsung S25", "Summarize this article", "Extract all product links from Amazon search", "Check if website is down"
* Data Persistence: Layouts automatically save to a local .sorana_browser.json file on close.

🤖 AI Agents & Pipeline Builder
TabNeuron features a no-code agent builder for automated research workflows.
* Connect agents by holding CTRL+ALT and clicking an Agent title to get a green arrow.
* Point the green arrow to a parent agent to establish a connection.
* In the child Agent configuration, enable 'Auto' and 'Passthrough' to create a collaborative pipeline.

🔧 Built-in MCP Server
The application includes a Model Context Protocol server for direct browser control:
* navigate_to: Open URLs in new tabs
* close_tab: Close specific tabs
* create_group: Create Chrome Tab Groups
* get_tab_content: Extract page content
* sync_layout: Send canvas layout to browser

🧠 AI Model Configuration & Hardware Requirements
TabNeuron is backend-agnostic. You can use local models for privacy or cloud models for performance.
* Built-in Model: A lightweight 806MB model downloads on the first run and works fully offline.
* Cloud Services: Connect to OpenAI, Mistral, Lemonade, and others without local hardware limits.
* Local On-Prem: Connect to Ollama or Llama.cpp.
* IMPORTANT HARDWARE NOTE: Running 8B parameter models locally requires at least 16 GB RAM or 8 GB VRAM for smooth operation.

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

⚙️ Installation & Setup ⚙️

🌐 Website: http://tetramatrix.github.io/TabNeuron
💬 Discord: https://discord.gg/4QkQSfSATF

🚀 Quick Start 🚀

1. Download TabNeuron.exe and run it
2. Load Chrome Extension (see Installation section below)
3. Configure AI backend (built-in model or connect your own)
4. Click "🌐 Organize Tabs" to load tabs with screenshots
5. AI automatically groups tabs by content
6. Try "Chat with Page" (right-click tab) to ask questions
7. Deploy Research Agent for multi-tab analysis
8. Organize tabs on canvas, click "Sync to Browser"
9. Chrome Tab Groups update automatically
10. Layout auto-saved on close

💡 Use Cases 💡

📚 Academic Research:
  • Open 20+ research papers
  • AI extracts key findings from each
  • Research Agent compares methodologies
  • Chat: "What are common limitations?"
  • Save organized layout for later

🛒 Product Research:
  • Open review sites, shops, forums
  • Comparison Agent extracts features/prices
  • Chat: "Best value under $500?"
  • Sync organized groups to Chrome

💻 Code Learning:
  • Open tutorial tabs with code examples
  • Code Agent extracts snippets
  • Chat: "Explain this pattern"
  • Save as "Learned Patterns" group

📰 News Analysis:
  • Open news articles on same topic
  • Fact-Check Agent verifies claims
  • Chat: "Different perspectives?"
  • Mindmap shows bias patterns

🤖 AI Model Hardware Requirements:
  • Built-in Models: Range from 1B parameter (806MB) to 20B parameter (12-16GB)
  • Recommended 8B Models (e.g., Llama 3.1 8b Instruct): Minimum 12 GB RAM or 8 GB VRAM for smooth operation
  • Hardware Requirements Increase with Model Size: Larger models with more parameters require higher specifications
  • Cloud Models: No local hardware requirements (requires internet connection)

⚠️ IMPORTANT HARDWARE NOTE: Running larger 8B parameter models locally requires sufficient hardware - ideally 16 GB RAM or 8 GB VRAM - to function smoothly. If hardware is limited, the app includes a smaller portable model (which works fully offline but may classify complex files as "Miscellaneous") or allows connection to cloud-based LLMs for high accuracy without the local hardware cost.

🧠 Model Manager 🧠

The Model Manager is a powerful tool that allows you to manage AI models for TabNeuron. It provides a centralized interface for activating, deactivating, and configuring both local and cloud-based AI models.

Key Features:
  • Model Activation/Deactivation: Easily enable or disable models as needed
  • Local Model Support: Download and run models locally (Ollama, Llama.cpp, Lemonade)
  • Cloud Model Integration: Connect to OpenAI, Mistral, and other cloud services
  • Model Information: View model details including size, type, and capabilities
  • Quick Activation: One-click model activation for immediate use
  • Model Status: Real-time status indicators showing active/inactive models

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
  • Local models (Ollama, Llama.cpp)
  • Your data stays on your machine
  • No internet connection required

  For Best Quality:
  • Cloud models (OpenAI, Mistral, Claude)
  • State-of-the-art performance
  • Requires API key and internet

⚡ Performance Tips:

  Hardware Requirements:
  • 8B models: ~12-16GB RAM for smooth operation
  • GPU with 8GB+ VRAM significantly speeds up local models
  • More VRAM = better performance for large models

  Optimization Strategies:
  • Process multiple tabs in parallel for better throughput
  • Shorter content (500-2K chars) = faster processing
  • Use built-in model for quick tasks, cloud for complex analysis
  • Batch similar tabs together for efficient processing

🔗 Multi-Service AI Integration 🔗

TabNeuron supports seamless connection to both on-prem and cloud-based AI services:

On-Prem Services:
  • Ollama: Self-hosted LLM runner
  • Llama.cpp: Lightweight C++ implementation
  • Other self-hosted LLM solutions

Cloud Services:
  • OpenAI: GPT models via API
  • Mistral: Mistral AI models
  • Lemonade: Cloud LLM service
  • Other cloud-based AI platforms

Flexible Configuration:
  • Easily switch between different AI backends
  • Choose based on privacy requirements
  • Optimize for performance or cost

🤖 Connecting Agents 🤖

To connect agents in TabNeuron:
🔘 Hold CTRL+ALT and click on an Agent title to get a green arrow
🔗 Point the green arrow to the parent agent to establish the connection
⚙️ In the child Agent configuration, enable 'Auto' (puts agent in orchestration mode to receive instructions from parent agent) and 'Passthrough' (allows the agent to also pass documents).
🤝 This creates a pipeline where agents can pass insights and collaborate on complex tasks

📥 Downloads 📥

🔹 Latest version: TabNeuron.exe v1.0.0
🔹 Chrome Extension: chrome-extension.crx
🔢 MD5 Checksum (.exe): v1.0.0 07d4ba361a3a7ee9aa9859544bdf9c11
🌐 Download: http://tetramatrix.github.io/TabNeuron


📋 Changelog 📋

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

💰 Bitcoin Cash (BCH):
bitcoincash:qrvhk77ujevd9n7jse4jewm99eg95at7tvc6m9v2vv

💳 PayPal:
paypal.me/Gigamegs

Thank you for your support!

☕ Buy us a coffee or support via PayPal or Bitcoin Cash!

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