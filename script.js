<button id="reopen-btn" class="reopen-toolbar-btn" onclick="toggleToolbar(true)">🔽 Hiện Công Cụ</button>
    <div id="autopaste-toast"></div>

    <!-- Lớp chọn vùng chụp Kết quả cho AI -->
    <div id="ai-result-capture-overlay" class="ai-result-capture-overlay" hidden="" aria-hidden="true">
        <div class="ai-capture-help">Kéo khung để di chuyển • Kéo 4 góc để đổi kích thước</div>
        <div id="ai-capture-selection" class="ai-capture-selection">
            <span id="ai-capture-size-label" class="ai-capture-size-label"></span>
            <button type="button" class="ai-capture-handle" data-handle="nw" aria-label="Đổi kích thước góc trên trái"></button>
            <button type="button" class="ai-capture-handle" data-handle="ne" aria-label="Đổi kích thước góc trên phải"></button>
            <button type="button" class="ai-capture-handle" data-handle="sw" aria-label="Đổi kích thước góc dưới trái"></button>
            <button type="button" class="ai-capture-handle" data-handle="se" aria-label="Đổi kích thước góc dưới phải"></button>
        </div>
        <div class="ai-capture-actions">
            <button type="button" class="ai-capture-cancel" onclick="cancelAIResultCapture()">✖ Hủy</button>
            <button type="button" id="ai-capture-confirm" class="ai-capture-confirm" onclick="confirmAIResultCapture()">📷 Chụp &amp; đưa vào AI</button>
        </div>
    </div>

    <!-- THANH CÔNG CỤ CHÍNH (TOOLBAR) -->
    <div id="main-toolbar" class="toolbar">
        <button id="btn-toggle-ai" class="btn-ai" onclick="toggleAIPanel()">🤖 AI Trợ Lý</button>
        <button id="btn-toggle-ai-web" class="btn-ai-web" onclick="openAIWebMenu()" title="Bật: mở menu chọn web AI + nhập link (mở trong khung / cửa sổ / tab mới)">🌐 Trang Web AI: TẮT</button>
        <span class="divider">|</span>
        <button id="btn-layout-pc" class="btn-mode-pc btn-active" onclick="changeLayoutMode('pc')">🖥️ Bố cục PC</button>
        <button id="btn-layout-mobile" class="btn-mode-mobile" onclick="changeLayoutMode('mobile')">📱 Bố cục Mobile</button>
        <span class="divider">|</span>

        <button id="btn-preview-pc" class="btn-device-preview btn-active" onclick="setPreviewDevice('pc')">🌐 Web Full</button>
        <button id="btn-preview-mobile" class="btn-device-preview" onclick="setPreviewDevice('mobile')">📱 Khung ĐT</button>
        <span class="divider">|</span>

        <button id="mode-btn-split" class="btn-active" onclick="setMode('')">🔲 Chia đôi</button>
        <button id="mode-btn-code" onclick="setMode('full-code')">📝 Full Code</button>
        <button id="mode-btn-view" onclick="setMode('full-view')">📺 Full Web</button>
        <button id="mode-btn-log" class="btn-log-mode" onclick="setMode('full-log')">📟 Chỉ xem Log</button>

        <button id="btn-toggle-console" class="btn-toggle-console-log btn-active" onclick="toggleConsoleLog()">📟 Ẩn/Hiện Log</button>
        <button id="fullscreen-btn" class="btn-fullscreen" onclick="toggleResultFullscreen()">📺 Toàn màn hình</button>
        <span class="divider">|</span>

        <button id="btn-toggle-web2" class="btn-web2" onclick="toggleWeb2Feature()">🌐 Trang web 2: TẮT</button>
        <span class="divider">|</span>

        <button id="btn-toggle-autopaste" class="btn-autopaste" onclick="toggleAutoPaste()" title="Khi bật: chỉ cần sao chép (copy) code ở bất kỳ đâu, hệ thống sẽ tự động XÓA code cũ và DÁN code mới vào tab đang mở">📋 Tự Động Dán: TẮT</button>
        <span class="divider">|</span>

        <div id="page-edit-selector" class="page-switch-group" style="display:none;">
            <button id="btn-edit-p1" class="btn-active" onclick="switchActivePage('p1')">📄 Sửa Trang 1</button>
            <button id="btn-edit-p2" class="btn-web2" onclick="switchActivePage('p2')">🚀 Sửa Trang 2</button>
            <span class="divider">|</span>
        </div>

        <button id="tab-html" class="btn-active" onclick="showEditor('html')">HTML</button>
        <button id="tab-css" onclick="showEditor('css')">CSS</button>
        <button id="tab-js" onclick="showEditor('js')">JS</button>
        <button id="tab-py" onclick="showEditor('py')" style="background: #3776ab; color: #ffd343;">🐍 Python</button>
        <button id="tab-cpp" onclick="showEditor('cpp')" style="background: #004482; color: #00b0ff;">⚙️ C++</button>
        <span class="divider">|</span>

        <button id="btn-search-toggle" class="btn-toggle-ui" onclick="toggleSearchBar()" style="background:#5e35b1; font-weight:bold;">🔍 Tìm &amp; Đổi</button>
        <button id="btn-format-code" class="btn-toggle-ui" style="background:#0284c7; font-weight:bold;" onclick="formatCurrentEditor()" title="Tự động thụt lề và làm đẹp mã nguồn (Shift+Alt+F)">✨ Format Code</button>
        <button id="btn-cdn-modal" class="btn-toggle-ui" style="background:#7c3aed; font-weight:bold;" onclick="toggleCDNModal(true)" title="Nhúng nhanh thư viện Tailwind, Bootstrap, FontAwesome, React, Vue, Three.js...">📦 Thư Viện CDN</button>
        <button id="btn-lines-pc" class="btn-toggle-ui" onclick="toggleLineNumbers()">🔢 Dòng</button>
        <div class="font-controls"><button id="btn-font-minus" onclick="changeFontSize(-2)">A-</button><button id="btn-font-plus" onclick="changeFontSize(2)">A+</button></div>

        <select id="select-editor-theme" onchange="changeEditorTheme(this.value)" style="background:#29292e; color:#e1e1e6; border:1px solid #424242; border-radius:4px; padding:5px 8px; font-size:0.75rem;">
            <option value="vs-dark">🌙 VS Dark</option>
            <option value="vs">☀️ Sáng (Light)</option>
            <option value="dracula">🧛 Dracula (Tím)</option>
            <option value="monokai">🎨 Monokai</option>
            <option value="cyberpunk">⚡ Cyberpunk Neon</option>
            <option value="hc-black">🖤 High Contrast</option>
        </select>

        <button id="btn-toggle-autorun" class="btn-toggle-ui" style="background:#059669; font-weight:bold;" onclick="toggleAutoRun()" title="Khi bật: code sẽ tự động chạy hiển thị ngay khi bạn vừa gõ xong">⚡ Tự Chạy: BẬT</button>

        <!-- TÍNH NĂNG MỚI: LƯU DỰ ÁN (TỐI ĐA 5 BẢN) -->
        <button id="btn-open-save-modal" class="btn-save-slot" onclick="toggleSaveModal(true)" title="Lưu lại toàn bộ code hiện tại (tối đa 5 bản lưu) — có thể tải lại hoặc xóa bất kỳ bản nào (Ctrl + S)">💾 Lưu Dự Án <span id="save-slot-count">(0/5)</span></button>

        <!-- TÍNH NĂNG MỚI: TỔNG HỢP NHIỀU TÍNH NĂNG THÀNH 1 -->
        <button id="btn-toggle-combo" class="btn-combo" onclick="toggleComboMenuFeature()" title="Gộp nhiều tính năng thành một nhóm. Khi BẬT sẽ hiện menu các tính năng bạn đã thêm vào nhóm.">🧩 Tổng Hợp: TẮT</button>
        <button id="btn-toggle-cfsaved" class="btn-cfsaved" onclick="toggleSavedCustomFeatures()" title="Bật: mở menu tên các tính năng đã lưu — có thể mở hoặc xóa. Tắt không xóa dữ liệu.">📦 Tính Năng Đã Tạo: TẮT</button>
        <span id="cf-saved-bar" class="page-switch-group" aria-label="Tính năng đã lưu"></span>

        <button id="btn-reset-workspace" class="btn-reset" onclick="resetWorkspace()">🔄 Reset</button>

        <div class="dropdown-wrap">
            <button class="btn-save" onclick="toggleDownloadMenu(event)">💾 Tải Xuống <span class="dropdown-caret">▼</span></button>
            <div id="download-menu" class="dropdown-menu">
                <button id="btn-dl-p1" onclick="downloadFullHTML('p1')">📄 File gộp (Trang Web 1)</button>
                <button id="btn-dl-p2" onclick="downloadFullHTML('p2')">📄 File gộp (Trang Web 2)</button>
                <button id="btn-dl-separate" onclick="downloadSeparateFiles()">📑 Các file riêng (.html, .css, .js, .py, .cpp)</button>
                <button id="btn-dl-zip" onclick="downloadZip()">🗜️ Gói ZIP (cả project)</button>
            </div>
        </div>

        <div class="dropdown-wrap copy-code-wrap">
            <button class="btn-save" onclick="toggleCopyCodeMenu(event)">📋 Sao Chép Code <span class="dropdown-caret">▼</span></button>
            <div id="copy-code-menu" class="dropdown-menu">
                <button id="btn-copy-text" onclick="copyAllCodeAsText()">📄 Sao chép bằng chữ (HTML+CSS+JS+Python+C++)</button>
                <button id="btn-copy-file" onclick="copyAllCodeAsFile()">💾 Sao chép bằng file (.html, .css, .js, .py, .cpp)</button>
            </div>
        </div>

        <button id="btn-share-code" class="btn-share" onclick="shareCode()">🔗 CHIA SẺ</button>
        <button id="btn-boss-github" class="btn-bot-github" onclick="toggleBotModal(true)">🤖 BOSS BOT GITHUB</button>
        <button id="btn-create-app-open" class="btn-create-app" onclick="toggleCreateAppModal(true)">📦 TẠO APP</button>

        <!-- TÍNH NĂNG: NHẬP LINK WEB (CODE WEB) -->
        <button id="btn-web-url-fetch" class="btn-web-url" style="background: linear-gradient(135deg, #f59e0b, #00d2ff) !important; color: white !important; font-weight: bold; border: none !important; box-shadow: 0 0 14px rgba(0,210,255,0.6);" onclick="toggleWebUrlModal(true)">👑 CODE WEB PRO MAX</button>

        <button id="btn-import-file" class="btn-import" onclick="triggerFileInput()">📂 NHẬP FILE</button>
        <button id="btn-import-folder" class="btn-import" onclick="triggerFolderInput()">📁 NHẬP THƯ MỤC</button>
        <input type="file" id="file-input" accept=".html,.htm,.vue,.mht,.mhtml,.txt,.css,.scss,.sass,.less,.js,.jsx,.ts,.tsx,.mjs,.cjs,.py,.pyw,.ipynb,.json,.xml,.svg,.md,.yaml,.yml,.csv,.tsv,.log,.ini,.env,.zip,.png,.jpg,.jpeg,.gif,.webp,.bmp,.ico,.woff,.woff2,.ttf,.otf" multiple="" style="display:none;" onchange="importFile(this)">
        <input type="file" id="folder-input" webkitdirectory="" directory="" multiple="" style="display:none;" onchange="importFile(this)">
        <button id="btn-open-settings" onclick="toggleSettingsModal(true)">⚙️ Cài Đặt</button>

        <button id="btn-run-code" class="btn-run" onclick="runCode()">Chạy ▶</button>
        <button id="btn-toggle-ai-result" class="btn-ai-result" onclick="toggleAIResultFeature()" title="Khi bật: nút Chạy sẽ gửi code cho AI chuyển đổi Python/C++ thành HTML/JS thật.">🤖 Kết Quả AI: TẮT</button>
        <button id="btn-hide-toolbar" class="btn-toggle-ui" onclick="toggleToolbar(false)" style="background: #b71c1c;">🚫 Ẩn</button>
        <div id="save-indicator" class="autosave-status">Đã lưu tự động</div>
    </div>

    <!-- THANH TÌM KIẾM & THAY THẾ -->
    <div id="search-bar">
        <input type="text" id="find-input" placeholder="Nhập từ cần tìm...">
        <button class="btn-find" onclick="findNextText()">🔽 Tìm Tiếp</button>
        <span class="divider">|</span>
        <input type="text" id="replace-input" placeholder="Thay thế bằng...">
        <button class="btn-replace" onclick="replaceText()">✏️ Thay Thế</button>
        <button class="btn-replace-all" onclick="replaceAllText()">🔥 Thay Tất Cả</button>
        <button onclick="toggleSearchBar()" style="margin-left: auto; background: transparent; color: #ef5350; border: none; font-size:0.8rem;">✖ Đóng lại</button>
    </div>

    <!-- WORKSPACE -->
    <div id="workspace" class="workspace">
        <!-- Khung AI Assistant bên trái -->
        <div id="ai-sidebar" class="ai-sidebar collapsed">
            <div class="ai-header">
                <div class="ai-header-identity">
                    <div class="ai-header-avatar">🤖</div>
                    <div class="ai-header-text">
                        <span class="ai-header-title">AI Trợ Lý Code</span>
                        <span class="ai-header-status"><span class="ai-status-dot"></span>Sẵn sàng hỗ trợ</span>
                    </div>
                </div>
                <div class="ai-header-actions">
                    <button id="btn-ai-newchat" class="ai-header-btn" onclick="startNewAIChat()" title="Bắt đầu cuộc trò chuyện mới">🆕<span>Mới</span></button>
                    <button id="btn-ai-key-header" class="ai-header-btn" onclick="openAIKeyModal()" title="Quản lý API Key">🔑<span>Key</span></button>
                    <button class="ai-header-btn ai-close" onclick="toggleAIPanel()" title="Đóng khung AI">✖</button>
                </div>
            </div>
            <div id="ai-active-key-bar" class="ai-active-key-bar" onclick="openAIKeyModal()" title="Bấm để đổi API Key đang dùng">
                <span id="ai-active-key-label">🔑 Chưa chọn API Key — bấm để thêm</span>
                <span class="ai-active-key-change">Đổi ▾</span>
            </div>
            <div id="ai-mode-bar" class="ai-mode-bar" aria-label="Chọn chế độ AI">
                <span class="ai-mode-label">CHẾ ĐỘ:</span>
                <button type="button" class="ai-mode-toggle" data-mode="fast" onclick="toggleAIAssistantMode('fast')" aria-pressed="false" title="Phản hồi nhanh, ngắn gọn">⚡ Nhanh</button>
                <button type="button" class="ai-mode-toggle" data-mode="deep" onclick="toggleAIAssistantMode('deep')" aria-pressed="false" title="Phân tích kỹ, kiểm tra lỗi">🧠 Suy nghĩ sâu</button>
                <button type="button" class="ai-mode-toggle" data-mode="code" onclick="toggleAIAssistantMode('code')" aria-pressed="false" title="Ưu tiên viết code hoàn chỉnh">💻 Code</button>
            </div>
            <div id="ai-autoinsert-bar" class="ai-autoinsert-bar" title="Khi BẬT: code AI trả về trong chat sẽ TỰ ĐỘNG xóa code cũ và nhập thẳng vào đúng tab tương ứng (HTML/CSS/JS/Python/C++)">
                <span class="ai-mode-label">📥 NHẬP CODE AI:</span>
                <button type="button" id="btn-ai-autoinsert" class="btn-ai-autoinsert" onclick="toggleAIAutoInsert()" aria-pressed="false">Tự Động Nhập: TẮT</button>
            </div>
            <div id="ai-chat-body" class="ai-body">
                <div class="ai-msg bot">Xin chào! Tôi là AI Trợ lý lập trình. Bạn có thể bật các chế độ ⚡ Nhanh, 🧠 Suy nghĩ sâu và 💻 Code rồi gửi yêu cầu! 🚀</div>
            </div>
            <div id="ai-attach-preview" class="ai-attach-preview"></div>
            <div class="ai-footer">
                <input type="file" id="ai-file-input" accept="image/*,video/*" multiple="" style="display:none" onchange="handleAIFileSelect(event)">
                <button class="btn-ai-attach" onclick="triggerAIFileInput()" title="Đính kèm hình ảnh / video">📎</button>
                <button id="btn-ai-capture-open" class="btn-ai-attach btn-ai-capture" onclick="startAIResultCapture()" title="Chụp một vùng vuông trong phần Kết quả và đưa vào AI">📷</button>
                <input type="text" id="ai-user-input" class="ai-input" placeholder="Hỏi AI..." onkeydown="if(event.key==='Enter'){event.preventDefault();sendAIMessage();}">
                <button class="btn-ai-send" onclick="sendAIMessage()" title="Gửi"></button>
            </div>
            <!-- TÍNH NĂNG MỚI: TRANG WEB AI (nhúng web AI ngay trong khung AI) -->
            <div id="ai-web-wrap">
                <div class="ai-web-topbar">
                    <span class="ai-web-status" id="ai-web-status" title="">🌐</span>
                    <select id="ai-web-preset" class="ai-web-preset" onchange="aiWebPresetChanged()" title="Chọn nhanh một trang web AI — 🔒 = trang chặn khung nhúng (bấm Tab mới / Cửa sổ để dùng)">
                        <option value="">📚 Chọn web AI...</option>
                        <optgroup label="AI Chat phổ biến">
                            <option value="https://arena.ai/">🌐 Arena AI 🔒</option>
                            <option value="https://chatgpt.com/">🤖 ChatGPT 🔒</option>
                            <option value="https://claude.ai/">🟣 Claude 🔒</option>
                            <option value="https://gemini.google.com/">🔷 Google Gemini 🔒</option>
                            <option value="https://www.perplexity.ai/">🔎 Perplexity 🔒</option>
                            <option value="https://huggingface.co/chat/">🤗 HuggingChat 🔒</option>
                            <option value="https://chat.deepseek.com/">🔵 DeepSeek</option>
                            <option value="https://console.groq.com/">⚡ Groq</option>
                            <option value="https://chat.mistral.ai/">💬 Mistral Le Chat</option>
                            <option value="https://poe.com/">🧠 Poe</option>
                            <option value="https://you.com/">✨ You.com</option>
                            <option value="https://copilot.microsoft.com/">🪟 Bing Copilot</option>
                            <option value="https://phind.com/">🔍 Phind</option>
                            <option value="https://www.blackbox.ai/">⬛ Blackbox AI</option>
                            <option value="https://duckduckgo.com/">🦆 DuckDuckGo AI</option>
                        </optgroup>
                    </select>
                    <input type="text" id="ai-web-url" class="ai-web-url" value="https://arena.ai/" spellcheck="false" onkeydown="if(event.key==='Enter'){event.preventDefault();aiWebLoadUrl();}" title="Nhập link bất kỳ trang web AI nào rồi nhấn Enter">
                    <button type="button" class="ai-web-topbtn ai-web-wbtn" onclick="nudgeAIWebWidth(-70)" title="Thu nhỏ khung Trang Web AI (bớt 70px)">−</button>
                    <button type="button" class="ai-web-topbtn ai-web-wbtn" onclick="nudgeAIWebWidth(70)" title="Phóng to khung Trang Web AI (thêm 70px)">+</button>
                    <button type="button" class="ai-web-topbtn" onclick="aiWebReload()" title="Tải lại trang">🔄</button>
                    <button type="button" class="btn-ai-web-open" onclick="window.open(aiWebCurrentUrl(),'_blank')" title="Mở trang ở tab mới — dùng bình thường 100%">↗ Tab mới</button>
                    <button type="button" class="btn-ai-web-dock" onclick="aiWebDockWindow()" title="Mở cửa sổ nhỏ gắn kế bên — dùng bình thường như khung nhúng">📌 Cửa sổ</button>
                    <button type="button" class="btn-ai-web-close" onclick="toggleAIWebMode(false)" title="Tắt Trang Web AI">✖</button>
                </div>
                <div id="ai-web-frame-wrap">
                    <iframe id="ai-web-frame" title="Trang Web AI" allow="clipboard-read; clipboard-write; fullscreen; geolocation; microphone; camera; autoplay; encrypted-media; picture-in-picture" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div id="ai-web-blocked-overlay" class="ai-web-blocked-overlay">
                        <div class="ai-web-blocked-box">
                            <b id="ai-web-blocked-title">🌐 Đang tải trang web...</b>
                            <p id="ai-web-blocked-msg"></p>
                            <div>
                                <button type="button" class="btn-ai-web-open" onclick="window.open(aiWebCurrentUrl(),'_blank')">↗ Mở tab mới</button>
                                <button type="button" class="btn-ai-web-dock" onclick="aiWebDockWindow()">📌 Cửa sổ kế bên</button>
                                <button type="button" class="ai-web-topbtn" onclick="aiWebReload()">🔄 Thử lại</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ai-web-resizer" class="ai-web-resizer" title="Kéo ngang để chỉnh độ rộng khung Trang Web AI • Nhấp đúp để đặt lại mặc định"></div>
        </div>

        <!-- Menu góc: cùng kích thước AI Trợ Lý 340px -->
        <div id="cf-corner-panel" class="ai-sidebar cf-ai-sidebar collapsed" aria-label="Menu góc tính năng">
            <div class="cf-run-header" id="cf-corner-header">
                <div class="cf-run-title"><span id="cf-corner-icon">✨</span><span id="cf-corner-title">Tính năng</span></div>
                <button type="button" class="ai-header-btn ai-close" onclick="closeCustomCornerPanel()" title="Đóng">✖</button>
            </div>
            <div id="cf-corner-frame-wrap"><iframe id="cf-corner-frame" title="Tính năng góc"></iframe></div>
        </div>

        <div id="editors-panel" class="editors">
            <div id="container-html" class="editor-container active"></div>
            <div id="container-css" class="editor-container"></div>
            <div id="container-js" class="editor-container"></div>
            <div id="container-py" class="editor-container"></div>
            <div id="container-cpp" class="editor-container"></div>
        </div>
        <div id="drag-resizer" class="resizer"></div>
        <div id="result-viewer" class="box-viewer">
            <div id="iframe-wrapper" class="iframe-container"><div id="ai-result-banner" class="ai-result-banner" style="display:none;"></div><iframe id="viewer"></iframe></div>

            <div id="console-panel" class="console-panel">
                <div class="console-header">
                    <span>📟 HỆ THỐNG KIỂM TRA LỖI (CONSOLE LOG)</span>
                    <div style="display:flex; gap: 5px;">
                        <button id="btn-clear-console" onclick="clearConsole()" style="padding:2px 8px; background:#b71c1c; border:none; color:white; border-radius:3px; font-size:0.65rem; font-weight:bold;">Xóa Log</button>
                        <button onclick="toggleConsoleLog()" style="padding:2px 8px; background:#424242; border:none; color:white; border-radius:3px; font-size:0.65rem; font-weight:bold;">✖ Ẩn đi</button>
                    </div>
                </div>
                <div id="console-outputs" class="console-outputs">Hệ thống đang hoạt động...</div>
            </div>
        </div>
    </div>

    <!-- ==================== MENU TRANG WEB AI: CHỌN AI / NHẬP LINK / MỞ KHUNG HOẶC CỬA SỔ ==================== -->
    <div id="ai-web-menu-modal" class="modal-overlay" onclick="closeAIWebMenu()">
        <div class="modal-content ai-web-menu-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h3 style="color:#38bdf8; display:flex; align-items:center; gap:8px; font-size:1.02rem;">🌐 Trang Web AI — Mở Website AI</h3>
                <button class="modal-close" onclick="closeAIWebMenu()">✖</button>
            </div>

            <div class="ai-web-menu-label">📚 Chọn nhanh một AI:</div>
            <div id="ai-web-menu-presets" class="ai-web-menu-presets"></div>

            <div class="ai-web-menu-label">🔗 Hoặc dán link trang web bất kỳ:</div>
            <input type="text" id="ai-web-menu-url" class="ai-web-menu-url" placeholder="https://..." spellcheck="false" onkeydown="if(event.key==='Enter'){event.preventDefault();openAIWebInFrame();}" title="Nhập link rồi nhấn Enter hoặc bấm nút bên dưới">

            <div class="ai-web-menu-actions">
                <button type="button" class="ai-web-menu-btn primary" onclick="openAIWebInFrame()" title="Nhúng trang web ngay trong khung AI Trợ Lý (có thể kéo rộng/nhỏ khung)">🌐 Mở trong khung (Nhúng)</button>
                <button type="button" class="ai-web-menu-btn window" onclick="openAIWebInWindow()" title="Mở trong cửa sổ nhỏ gắn kế bên — dùng bình thường 100%">📌 Mở trong Cửa sổ</button>
                <button type="button" class="ai-web-menu-btn tab" onclick="openAIWebInTab()" title="Mở ở tab mới của trình duyệt">↗ Mở Tab mới</button>
            </div>
            <div class="ai-web-menu-actions secondary" id="ai-web-menu-off-row" style="display:none;">
                <button type="button" class="ai-web-menu-btn off" onclick="toggleAIWebMode(false); closeAIWebMenu();" title="Tắt chế độ nhúng web AI (giữ nguyên chat AI)">✖ Tắt Trang Web AI</button>
            </div>
        </div>
    </div>

    <!-- ==================== MODAL MỚI: LƯU DỰ ÁN (TỐI ĐA 5 BẢN LƯU) ==================== -->
    <div id="save-modal" class="modal-overlay" onclick="toggleSaveModal(false)">
        <div class="modal-content save-modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h3 style="color:#26c6da; display:flex; align-items:center; gap:8px; font-size:1.02rem;">💾 Lưu Dự Án (Tối Đa 5 Bản Lưu)</h3>
                <button class="modal-close" onclick="toggleSaveModal(false)">✖</button>
            </div>

            <div class="save-slot-counter">
                <span>Đang dùng <b id="save-slot-used">0</b>/5 ô lưu — mỗi bản lưu gồm đủ HTML, CSS, JS, Python, C++ của cả Trang 1 &amp; Trang 2.</span>
            </div>

            <div id="save-slot-list" class="save-slot-list"></div>

            <div class="save-add-box">
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="save-slot-name-input">Tên bản lưu mới:</label>
                    <input type="text" id="save-slot-name-input" placeholder="VD: Bản chạy ổn định, Giao diện shop bán hàng..." onkeydown="if(event.key==='Enter'){event.preventDefault();saveNewProject();}">
                </div>
                <button id="btn-do-save-project" class="btn-run" style="width:100%; padding:11px; font-size:0.88rem; margin-left:0; background:linear-gradient(135deg,#00838f,#26c6da) !important; color:#fff !important;" onclick="saveNewProject()">➕ LƯU BẢN MỚI (Code Hiện Tại)</button>
            </div>

            <p class="save-hint">💡 Mẹo: Bấm <b>Ctrl + S</b> để mở nhanh bảng lưu. Bản lưu được giữ trong trình duyệt của bạn (localStorage) nên vẫn còn sau khi tắt máy. Bấm <b>🗑️ Xóa</b> để xóa bất kỳ bản lưu nào, hoặc <b>♻️ Ghi đè</b> để cập nhật bản lưu cũ bằng code hiện tại.</p>
        </div>
    </div>



    <!-- ==================== HỘP THOẠI XÁC NHẬN / NHẬP LIỆU RIÊNG CỦA TRANG ==================== -->
    <div id="app-confirm-modal" class="modal-overlay app-dialog-overlay" onclick="resolveAppConfirm(false)">
        <div class="modal-content app-dialog-content" onclick="event.stopPropagation()">
            <div id="app-confirm-title" class="app-dialog-title">❓ Xác nhận</div>
            <div id="app-confirm-message" class="app-dialog-msg"></div>
            <div class="app-dialog-actions">
                <button type="button" class="app-dialog-cancel" onclick="resolveAppConfirm(false)">✖ Hủy</button>
                <button type="button" id="app-confirm-ok" class="app-dialog-ok" onclick="resolveAppConfirm(true)">✔ Đồng ý</button>
            </div>
        </div>
    </div>

    <div id="app-prompt-modal" class="modal-overlay app-dialog-overlay" onclick="resolveAppPrompt(false)">
        <div class="modal-content app-dialog-content" onclick="event.stopPropagation()">
            <div id="app-prompt-title" class="app-dialog-title">✏️ Nhập nội dung</div>
            <div id="app-prompt-message" class="app-dialog-msg"></div>
            <input type="text" id="app-prompt-input" class="app-dialog-input" onkeydown="if(event.key==='Enter'){event.preventDefault();resolveAppPrompt(true);}">
            <div class="app-dialog-actions">
                <button type="button" class="app-dialog-cancel" onclick="resolveAppPrompt(false)">✖ Hủy</button>
                <button type="button" class="app-dialog-ok" onclick="resolveAppPrompt(true)">💾 Lưu lại</button>
            </div>
        </div>
    </div>

    <!-- ==================== TÍNH NĂNG MỚI: TỔNG HỢP (MENU GỘP TÍNH NĂNG) ==================== -->
    <button id="combo-fab" onclick="openComboMenu()" title="Mở menu các tính năng tổng hợp">🧩<span id="combo-fab-badge" class="combo-fab-badge">0</span></button>

    <!-- Menu hiển thị các nhóm tính năng đã tổng hợp -->
    <div id="combo-menu-modal" class="modal-overlay" onclick="closeComboMenu()">
        <div class="modal-content combo-modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h3 style="color:#e040fb; display:flex; align-items:center; gap:8px; font-size:1.02rem;">🧩 Menu Tính Năng Tổng Hợp</h3>
                <button class="modal-close" onclick="closeComboMenu()">✖</button>
            </div>

            <div class="combo-toolbar-row">
                <button type="button" class="btn-combo-new" onclick="openComboEditor(null)">➕ Tạo nhóm tính năng mới</button>
                <button type="button" class="btn-combo-manage" onclick="openComboManage()">⚙️ Quản lý nhóm</button>
            </div>

            <div id="combo-menu-list"></div>

            <p class="combo-hint">💡 Bấm vào một tính năng để chạy ngay • <b>⚡ Chạy tất cả</b> = chạy hết cả nhóm 1 lần • <b>✏️ Sửa</b> = thêm/bớt tính năng • <b>🙈 Ẩn</b> = tạm giấu nhóm • <b>🗑️ Xóa</b> = xóa hẳn nhóm bạn đã tạo.</p>
        </div>
    </div>

    <!-- Quản lý các nhóm tính năng -->
    <div id="combo-manage-modal" class="modal-overlay" onclick="closeComboManage()">
        <div class="modal-content combo-modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h3 style="color:#ab47bc; display:flex; align-items:center; gap:8px; font-size:1.02rem;">⚙️ Quản Lý Nhóm Tính Năng Tổng Hợp</h3>
                <button class="modal-close" onclick="closeComboManage()">✖</button>
            </div>

            <div class="combo-toolbar-row">
                <button type="button" class="btn-combo-new" onclick="openComboEditor(null)">➕ Tạo nhóm mới</button>
                <button type="button" class="btn-combo-manage" onclick="closeComboManage(); openComboMenu();">🧩 Xem menu tổng hợp</button>
            </div>

            <div class="combo-toolbar-row">
                <button type="button" id="btn-hide-original-toggle" class="btn-combo-onoff on" onclick="toggleHideOriginalWhenCombined()" title="Khi BẬT: tính năng nào đã được gộp vào nhóm sẽ tự động biến mất khỏi thanh công cụ bên ngoài">🙈 Ẩn nút gốc khi đã gộp: BẬT</button>
                <button type="button" class="btn-combo-del" style="flex:0 0 auto;" onclick="deleteAllCombos()" title="Xóa toàn bộ các nhóm tính năng đã tạo">🗑️ Xóa tất cả nhóm</button>
            </div>
            <div id="combo-hidden-info" class="combo-count-line">👀 Chưa có nút gốc nào bị ẩn</div>

            <div id="combo-manage-list"></div>

            <p class="combo-hint">💡 Nút <b>👁️ Hiện/Ẩn</b> quyết định nhóm đó có xuất hiện trong menu tổng hợp hay không.
🙈 Khi bật <b>"Ẩn nút gốc khi đã gộp"</b>: tính năng nào đã nằm trong nhóm sẽ <b>biến mất khỏi thanh công cụ bên ngoài</b> cho gọn, và vẫn dùng bình thường trong menu 🧩. Tắt 🧩 Tổng Hợp là mọi nút gốc hiện lại đầy đủ — <b>không mất tính năng nào cả</b>.</p>
        </div>
    </div>

    <!-- Tạo / sửa một nhóm tính năng -->
    <div id="combo-edit-modal" class="modal-overlay" onclick="closeComboEditor()">
        <div class="modal-content combo-modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h3 id="combo-edit-title" style="color:#26c6da; display:flex; align-items:center; gap:8px; font-size:1.02rem;">➕ Tạo Nhóm Tính Năng Mới</h3>
                <button class="modal-close" onclick="closeComboEditor()">✖</button>
            </div>

            <div style="display:flex; gap:10px; align-items:flex-end; margin-bottom:10px; flex-wrap:wrap;">
                <div class="setting-item" style="margin-bottom:0; width:92px; flex:0 0 92px;">
                    <label for="combo-icon-input">Biểu tượng:</label>
                    <input type="text" id="combo-icon-input" maxlength="4" placeholder="🧩" style="text-align:center; font-size:1rem;">
                </div>
                <div class="setting-item" style="margin-bottom:0; flex:1; min-width:180px;">
                    <label for="combo-name-input">Tên nhóm tính năng:</label>
                    <input type="text" id="combo-name-input" placeholder="VD: Bộ làm việc nhanh, Bộ xuất bản web...">
                </div>
            </div>

            <input type="text" id="combo-search-input" class="combo-search-input" placeholder="🔍 Tìm nhanh tính năng muốn gộp..." oninput="scheduleComboFeaturePickerRender()">

            <div id="combo-pick-wrap" class="combo-pick-wrap"></div>

            <div class="combo-count-line">Đã chọn: <b id="combo-selected-count">0</b> tính năng</div>

            <div style="display:flex; gap:8px;">
                <button type="button" id="combo-edit-delete" class="btn-combo-del" style="flex:0 0 auto; padding:11px 14px; display:none;" onclick="deleteCurrentEditingCombo()">🗑️ Xóa nhóm</button>
                <button type="button" class="btn-combo-manage" style="flex:0 0 auto; padding:11px 14px;" onclick="closeComboEditor()">✖ Hủy</button>
                <button type="button" class="btn-run" style="flex:1; margin-left:0; padding:11px; font-size:0.88rem; background:linear-gradient(135deg,#7b1fa2,#e040fb) !important; color:#fff !important;" onclick="saveComboFromEditor()">💾 LƯU NHÓM TÍNH NĂNG</button>
            </div>

            <p class="combo-hint">💡 Chọn bao nhiêu tính năng cũng được. Sau khi lưu, nhóm sẽ xuất hiện trong menu 🧩 Tổng Hợp và trong nút tròn 🧩 ở góc màn hình.</p>
        </div>
    </div>

    <!-- ==================== TÍNH NĂNG MỚI: TẠO TÍNH NĂNG (FILE / CODE) ==================== -->

    <div id="cf-saved-modal" class="modal-overlay" onclick="closeSavedCustomFeaturesMenu()">
        <div class="modal-content cf-modal-content" onclick="event.stopPropagation()">
            <div class="modal-header" style="border-bottom:1px solid #334155;">
                <h3 style="color:#69f0ae; display:flex; align-items:center; gap:8px; font-size:1.05rem;">📦 Tính Năng Đã Tạo</h3>
                <button class="modal-close" onclick="closeSavedCustomFeaturesMenu()">✖</button>
            </div>
            <p class="combo-hint" style="margin-top:0;margin-bottom:12px;">💡 Đặt <b>tên</b>, chọn <b>màu nút</b>, rồi <b>nhập file</b> hoặc <b>nhập code</b>. Trong danh sách có thể <b>đổi màu</b>, <b>ẩn</b> (nút trên thanh công cụ biến mất) hoặc <b>xóa</b>. Ẩn không làm mất tính năng.</p>

            <div style="border:1px solid #2e7d6f; background:#14201e; border-radius:10px; padding:12px; margin-bottom:14px;">
                <div style="font-size:0.82rem; font-weight:800; color:#69f0ae; margin-bottom:10px;">➕ Tạo tính năng mới</div>
                <div class="setting-item" style="margin-bottom:10px;">
                    <label for="cf-saved-name">Đặt tên tính năng:</label>
                    <input type="text" id="cf-saved-name" placeholder="VD: Bộ đếm, Ghi chú nhanh, Công cụ màu...">
                </div>
                <div class="setting-item" style="margin-bottom:10px;">
                    <label for="cf-saved-color-text">Màu nút tính năng:</label>
                    <div class="cf-color-row">
                        <input type="color" id="cf-saved-color" value="#26a69a" oninput="syncSavedMenuColorFromPicker()">
                        <input type="text" id="cf-saved-color-text" value="#26a69a" placeholder="#26a69a" style="flex:1;" oninput="syncSavedMenuColorFromText()">
                        <span id="cf-saved-color-preview" class="cf-preview-swatch" style="width:28px;height:28px;border-radius:7px;background:#26a69a;"></span>
                    </div>
                </div>
                <div class="setting-item" style="margin-bottom:10px;">
                    <label>Nhập file hoạt động (HTML / JS / CSS / TXT):</label>
                    <input type="file" id="cf-saved-file" accept=".html,.htm,.js,.css,.txt,.json,.svg" style="display:none;" onchange="onSavedMenuFileChosen(this)">
                    <div id="cf-saved-file-drop" class="cf-file-drop" onclick="document.getElementById('cf-saved-file').click()">📂 Bấm để chọn file — file này sẽ chạy khi mở tính năng</div>
                </div>
                <div class="setting-item" style="margin-bottom:10px;">
                    <label for="cf-saved-code">Hoặc nhập code HTML tại đây:</label>
                    <textarea id="cf-saved-code" class="cf-code-area" placeholder="&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;h1&gt;Xin chào&lt;/h1&gt;

&lt;script&gt;
// JS của trang web đã được định dạng và tích hợp chuẩn xác trong tab HTML

&lt;/script&gt;


&lt;/body&gt;
&lt;/html&gt;"></textarea>
                </div>
                <div class="setting-item" style="margin-bottom:10px;">
                    <label for="cf-saved-api-url">URL API riêng của tính năng (không bắt buộc):</label>
                    <input type="text" id="cf-saved-api-url" placeholder="Trống = dùng URL server chung ở dưới">
                </div>
                <div class="setting-item" style="margin-bottom:10px;">
                    <label>Cách hiện khi mở:</label>
                    <div class="cf-mode-chips">
                        <button type="button" id="cf-saved-display-corner" class="cf-chip active" onclick="setSavedMenuDisplay('corner')">📐 Menu góc (AI)</button>
                        <button type="button" id="cf-saved-display-center" class="cf-chip" onclick="setSavedMenuDisplay('center')">🪟 Menu giữa (PRO)</button>
                    </div>
                </div>
                <button type="button" class="btn-run" style="width:100%; margin-left:0; padding:11px; font-size:0.88rem; background:linear-gradient(135deg,#00695c,#26a69a) !important; color:#fff !important;" onclick="saveCustomFeatureFromSavedMenu()">💾 LƯU TÍNH NĂNG VÀO MENU</button>
            </div>

            <div style="font-size:0.82rem; font-weight:800; color:#69f0ae; margin-bottom:8px;">📋 Các tính năng đã lưu</div>
            <div id="cf-saved-menu-list"></div>

            <div style="border:1px solid #00d2ff; background:#101820; border-radius:10px; padding:12px; margin:14px 0 10px;">
                <div style="font-size:0.82rem; font-weight:800; color:#7dd3fc; margin-bottom:8px;">🌐 Gửi / nhận server (JSON chuẩn)</div>
                <div style="font-size:0.72rem; color:#94a3b8; line-height:1.5; margin-bottom:10px;">
                    Server nhận <code style="color:#7dd3fc;">{ "version":1, "type":"codespace-custom-feature", "sentAt", "features":[...], "feature", "extra" }</code>
                    — Header <b>Content-Type: application/json</b>. HTML tính năng gọi <code style="color:#fbbf24;">CodeSpace.sendToServer()</code>.
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="cf-saved-server-url">URL API server (https://...):</label>
                    <input type="text" id="cf-saved-server-url" placeholder="https://api.example.com/features" oninput="scheduleSaveCfServerConfig()">
                </div>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <div class="setting-item" style="margin-bottom:8px; flex:1; min-width:120px;">
                        <label for="cf-saved-server-method">Method:</label>
                        <select id="cf-saved-server-method" onchange="scheduleSaveCfServerConfig()">
                            <option value="POST">POST (khuyên dùng)</option>
                            <option value="PUT">PUT</option>
                            <option value="PATCH">PATCH</option>
                            <option value="GET">GET (nhận)</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                    </div>
                    <div class="setting-item" style="margin-bottom:8px; flex:1; min-width:150px;">
                        <label for="cf-saved-server-ctype">Content-Type:</label>
                        <input type="text" id="cf-saved-server-ctype" value="application/json" oninput="scheduleSaveCfServerConfig()">
                    </div>
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="cf-saved-server-auth">Authorization (không bắt buộc):</label>
                    <input type="password" id="cf-saved-server-auth" placeholder="Bearer token..." autocomplete="off" oninput="scheduleSaveCfServerConfig()">
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="cf-saved-server-headers">Header thêm (JSON hoặc Key: Value):</label>
                    <textarea id="cf-saved-server-headers" class="cf-payload-preview" style="min-height:48px;" placeholder="{&quot;X-Api-Key&quot;:&quot;abc&quot;}" oninput="scheduleSaveCfServerConfig()"></textarea>
                </div>
                <div class="setting-item" style="flex-direction:row; align-items:center; gap:8px; margin-bottom:8px;">
                    <input type="checkbox" id="cf-saved-server-use-proxy" style="width:18px;height:18px;cursor:pointer;accent-color:#00d2ff;" onchange="scheduleSaveCfServerConfig()">
                    <label for="cf-saved-server-use-proxy" style="cursor:pointer;font-size:0.8rem;user-select:none;">Dùng CORS Proxy nếu trình duyệt chặn</label>
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="cf-saved-server-proxy">CORS Proxy:</label>
                    <input type="text" id="cf-saved-server-proxy" placeholder="https://corsproxy.io/?{url}" oninput="scheduleSaveCfServerConfig()">
                </div>
                <div class="combo-toolbar-row">
                    <button type="button" class="btn-combo-new" onclick="previewCustomFeaturePayloadInSavedMenu()">👁 Xem payload</button>
                    <button type="button" class="btn-combo-runall" onclick="sendAllCustomFeaturesToServer()">📤 Gửi tất cả</button>
                    <button type="button" class="btn-combo-manage" onclick="fetchCustomFeaturesFromServer()">📥 Nhận từ server</button>
                </div>
                <textarea id="cf-saved-server-payload" class="cf-payload-preview" placeholder="Bấm 👁 Xem payload rồi gửi..."></textarea>
                <div class="combo-toolbar-row" style="margin-top:8px;">
                    <button type="button" class="btn-combo-runall" onclick="sendSavedMenuPayload()">🚀 Gửi payload đang xem</button>
                    <button type="button" class="btn-combo-manage" onclick="copyCustomFeatureExport()">📋 Sao chép JSON</button>
                    <button type="button" class="btn-combo-manage" onclick="downloadCustomFeatureExport()">💾 Tải JSON</button>
                </div>
                <div id="cf-saved-server-log" class="cf-server-log">📦 Server: sẵn sàng gửi / nhận JSON...</div>
            </div>

            <div class="combo-toolbar-row" style="margin-top:8px;">
                <button type="button" class="btn-combo-manage" onclick="closeSavedCustomFeaturesMenu()">✖ Đóng menu</button>
                <button type="button" class="btn-combo-del" onclick="toggleSavedCustomFeatures(false)">📦 Tắt thanh nút</button>
            </div>
        </div>
    </div>

    <!-- Chạy tính năng — MENU GIỮA (kích thước CODE WEB PRO 580px) -->
    <div id="cf-center-modal" class="modal-overlay" onclick="closeCustomFeatureRunner()">
        <div class="modal-content cf-center-run-content" onclick="event.stopPropagation()">
            <div class="cf-run-header" id="cf-center-header">
                <div class="cf-run-title" style="color:#00d2ff;"><span id="cf-center-icon">✨</span><span id="cf-center-title">Tính năng</span></div>
                <button type="button" class="modal-close" onclick="closeCustomFeatureRunner()">✖</button>
            </div>
            <div id="cf-center-frame-wrap"><iframe id="cf-center-frame" title="Tính năng giữa"></iframe></div>
        </div>
    </div>

    <!-- ==================== MODAL: NHẬP LINK WEB (CODE WEB PRO MAX 2026) ==================== -->
    <div id="web-url-modal" class="modal-overlay" onclick="toggleWebUrlModal(false)">
        <div class="modal-content" style="width: 580px; max-width: 95%; max-height: 90vh; overflow-y: auto; border: 1px solid #00d2ff; box-shadow: 0 0 25px rgba(0,210,255,0.3);" onclick="event.stopPropagation()">
            <div class="modal-header" style="border-bottom: 1px solid #334155; padding-bottom: 10px;">
                <h3 style="color:#00d2ff; display:flex; align-items:center; gap:8px; font-size:1.05rem;">👑 CODE WEB PRO MAX (Lấy 100% Mã Nguồn Mọi Web)</h3>
                <button class="modal-close" onclick="toggleWebUrlModal(false)">✖</button>
            </div>

            <!-- Mẫu trang web nhanh -->
            <div style="display:flex; gap:6px; align-items:center; margin-bottom:10px; flex-wrap:wrap;">
                <span style="font-size:0.72rem; color:#94a3b8; font-weight:bold;">Thử nhanh:</span>
                <button type="button" style="padding:3px 8px; font-size:0.68rem; background:#1e293b; color:#38bdf8; border:1px solid #334155; border-radius:4px;" onclick="setPresetUrl('https://example.com')">🌐 Example.com</button>
                <button type="button" style="padding:3px 8px; font-size:0.68rem; background:#1e293b; color:#38bdf8; border:1px solid #334155; border-radius:4px;" onclick="setPresetUrl('https://vi.wikipedia.org/wiki/Trang_Ch%C3%ADnh')">📚 Wikipedia</button>
                <button type="button" style="padding:3px 8px; font-size:0.68rem; background:#1e293b; color:#38bdf8; border:1px solid #334155; border-radius:4px;" onclick="setPresetUrl('https://getbootstrap.com')">🚀 Bootstrap</button>
                <button type="button" style="padding:3px 8px; font-size:0.68rem; background:#1e293b; color:#38bdf8; border:1px solid #334155; border-radius:4px;" onclick="setPresetUrl('https://www.w3schools.com/html/')">🎓 W3Schools</button>
                <button type="button" style="padding:3px 8px; font-size:0.68rem; background:#1e293b; color:#38bdf8; border:1px solid #334155; border-radius:4px;" onclick="setPresetUrl('https://news.ycombinator.com')">📰 HackerNews</button>
            </div>

            <!-- 4 Tab Chế Độ Lấy Code PRO MAX -->
            <div style="display:flex; gap:4px; margin-bottom:12px; border-bottom:1px solid #29292e; padding-bottom:8px; flex-wrap:wrap;">
                <button type="button" id="tab-cweb-auto" class="btn-active" style="flex:1; padding:7px 4px; font-size:0.72rem;" onclick="switchCodeWebTab('auto')">⚡ 1. Siêu Tải Tự Động</button>
                <button type="button" id="tab-cweb-viewsource" style="flex:1; padding:7px 4px; font-size:0.72rem; background:#29292e; color:#e1e1e6;" onclick="switchCodeWebTab('viewsource')">🔍 2. Xem Nguồn (100% OK)</button>
                <button type="button" id="tab-cweb-ai" style="flex:1; padding:7px 4px; font-size:0.72rem; background:#29292e; color:#e1e1e6;" onclick="switchCodeWebTab('ai')">🤖 3. AI Dựng Lại</button>
                <button type="button" id="tab-cweb-paste" style="flex:1; padding:7px 4px; font-size:0.72rem; background:#29292e; color:#e1e1e6;" onclick="switchCodeWebTab('paste')">📝 4. Dán Trực Tiếp</button>
                <button type="button" id="tab-cweb-boss" style="flex:1; padding:7px 4px; font-size:0.72rem; background:#29292e; color:#e1e1e6;" onclick="switchCodeWebTab('boss')">📸 5. Boss Bot Chụp</button>
            </div>

            <!-- CHẾ ĐỘ 1: SIÊU TẢI TỰ ĐỘNG QUA CÁC CỔNG PROXY -->
            <div id="cweb-sec-auto">
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="web-url-input" style="font-weight:bold;">Nhập link trang web (URL):</label>
                    <div style="display:flex; gap:6px;">
                        <input type="text" id="web-url-input" placeholder="https://example.com hoặc https://..." style="background:#29292e; color:#fff; border:1px solid #424242; border-radius:4px; padding:9px 12px; font-size:0.85rem; flex:1;" onkeydown="if(event.key==='Enter'){event.preventDefault();fetchAndPasteWebCode();}">
                        <button type="button" style="background:#0288d1; color:white; border:none; padding:8px 12px; font-size:0.75rem;" onclick="pasteFromClipboardToUrlInput()" title="Dán link từ clipboard">📋 Dán Link</button>
                    </div>
                </div>

                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="web-url-target-page" style="font-weight:bold;">Dán vào trang:</label>
                    <select id="web-url-target-page" style="background:#29292e; color:#fff; border:1px solid #424242; border-radius:4px; padding:8px;">
                        <option value="current">📄 Trang đang mở hiện tại</option>
                        <option value="p1">📄 Trang Web 1 (Main)</option>
                        <option value="p2">🚀 Trang Web 2</option>
                    </select>
                </div>

                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="web-url-mode-select" style="font-weight:bold;">Định dạng nạp vào editor:</label>
                    <select id="web-url-mode-select" style="background:#29292e; color:#fff; border:1px solid #424242; border-radius:4px; padding:8px;">
                        <option value="beautified">🌟 1. LÀM ĐẸP &amp; CHUẨN HÓA MÃ NGUỒN (Thụt lề đẹp từng dòng, dễ đọc, loại bỏ mã rác tracking - KHUYÊN DÙNG)</option>
                        <option value="split">⚡ 2. TỰ ĐỘNG BÓC TÁCH (HTML vào tab HTML, CSS vào tab CSS, JS vào tab JS - Định dạng sạch)</option>
                        <option value="raw_html">📄 3. MÃ NGUỒN GỐC NGUYÊN BẢN (100% thô từ máy chủ)</option>
                    </select>
                </div>

                <div class="setting-item" style="flex-direction:row; align-items:center; gap:8px; margin-bottom:8px;">
                    <input type="checkbox" id="web-url-fix-relative" checked="" style="width:18px; height:18px; cursor:pointer; accent-color:#00b0ff;">
                    <label for="web-url-fix-relative" style="cursor:pointer; font-size:0.8rem; user-select:none;">Tự động sửa link ảnh, icon, CSS tương đối thành link tuyệt đối (để hình ảnh hiển thị đẹp 100%)</label>
                </div>

                <!-- Thanh tiến trình tải -->
                <div id="cweb-progress-wrap" style="display:none; width:100%; height:6px; background:#29292e; border-radius:3px; overflow:hidden; margin:8px 0;">
                    <div id="cweb-progress-bar" style="width:0%; height:100%; background:linear-gradient(90deg,#00c6ff,#00e676); transition:width 0.25s;"></div>
                </div>

                <button type="button" id="btn-promax-fetch" class="btn-run" style="width:100%; padding:12px; font-size:0.92rem; font-weight:bold; margin: 6px 0 10px; background:linear-gradient(135deg,#00c853,#00b0ff) !important;" onclick="fetchAndPasteWebCode()">🚀 CHẠY &amp; LẤY ĐỦ 100% MÃ NGUỒN VÀO EDITOR</button>
            </div>

            <!-- CHẾ ĐỘ 2: XEM NGUỒN (VIEW-SOURCE) -->
            <div id="cweb-sec-viewsource" style="display:none;">
                <div style="background:#1e1e24; border:1px solid #00b0ff; border-radius:8px; padding:12px; margin-bottom:12px;">
                    <h4 style="color:#00d2ff; margin-bottom:6px; font-size:0.85rem;">💡 Cách lấy mã nguồn 100% không sợ bất kỳ trang nào chặn:</h4>
                    <ol style="font-size:0.75rem; color:#d1d5db; line-height:1.6; padding-left:18px;">
                        <li>Nhập link web và bấm <b>"🌐 Mở Trang Xem Mã Nguồn (View-Source)"</b>.</li>
                        <li>Ở tab mới mở, nhấn <b>Ctrl + A</b> (chọn tất cả) rồi <b>Ctrl + C</b> (sao chép).</li>
                        <li><b>Quay lại tab Code Space:</b> Hệ thống đã bật sẵn chế độ <b>"Đón Mã Tự Động"</b> và sẽ <b>tự động dán và chạy ngay lập tức</b>!</li>
                    </ol>
                </div>

                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="web-url-input-vs" style="font-weight:bold;">Link trang web cần mở:</label>
                    <input type="text" id="web-url-input-vs" placeholder="https://example.com" style="background:#29292e; color:#fff; border:1px solid #424242; border-radius:4px; padding:9px 12px; font-size:0.85rem;">
                </div>

                <button type="button" style="width:100%; background:linear-gradient(135deg, #0288d1, #00b0ff); color:white; border:none; padding:11px; font-size:0.88rem; font-weight:bold; border-radius:4px; cursor:pointer;" onclick="openViewSourceInNewTab()">🌐 MỞ TRANG XEM MÃ NGUỒN &amp; ĐÓN MÃ TỰ ĐỘNG</button>
            </div>

            <!-- CHẾ ĐỘ 3: AI DỰNG LẠI WEB -->
            <div id="cweb-sec-ai" style="display:none;">
                <div style="background:#1e1e24; border:1px dashed #7b2ff7; border-radius:8px; padding:10px; margin-bottom:10px; font-size:0.75rem; color:#e0e7ff; line-height:1.5;">
                    🤖 <b>AI Tự Động Phân Tích &amp; Dựng Lại:</b> Phù hợp với trang web bắt đăng nhập hoặc chặn proxy. AI sẽ phân tích URL và tự lập trình lại 100% giao diện, màu sắc, thanh điều hướng, nút bấm và hiệu ứng!
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="web-url-input-ai" style="font-weight:bold;">Nhập link trang web:</label>
                    <input type="text" id="web-url-input-ai" placeholder="https://example.com" style="background:#29292e; color:#fff; border:1px solid #424242; border-radius:4px; padding:9px 12px; font-size:0.85rem;">
                </div>
                <button type="button" class="btn-ai" style="width:100%; padding:11px; font-size:0.88rem; font-weight:bold;" onclick="fetchAndPasteViaAI()">🤖 KÍCH HOẠT AI DỰNG LẠI TOÀN BỘ WEB NÀY</button>
            </div>

            <!-- CHẾ ĐỘ 4: DÁN TRỰC TIẾP MÃ NGUỒN -->
            <div id="cweb-sec-paste" style="display:none;">
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="web-url-direct-textarea" style="font-weight:bold;">Dán mã nguồn HTML (copy từ View-Source hoặc Inspect Element):</label>
                    <textarea id="web-url-direct-textarea" placeholder="&lt;!DOCTYPE html&gt;&lt;html&gt;... Dán mã nguồn HTML vào đây..." style="width:100%; height:130px; background:#121214; color:#4ade80; border:1px solid #424242; border-radius:6px; padding:10px; font-family:monospace; font-size:0.75rem; resize:vertical; outline:none;"></textarea>
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="web-url-origin-url" style="font-weight:bold;">Link gốc của trang (để tự động tải ảnh/font gốc):</label>
                    <input type="text" id="web-url-origin-url" placeholder="https://example.com (không bắt buộc)" style="background:#29292e; color:#fff; border:1px solid #424242; border-radius:4px; padding:7px 10px; font-size:0.8rem;">
                </div>
                <button type="button" class="btn-run" style="width:100%; padding:11px; font-size:0.9rem; font-weight:bold;" onclick="applyDirectPastedSource()">📥 NẠP VÀO EDITOR &amp; CHẠY NGAY</button>
            </div>

            <!-- CHẾ ĐỘ 5: BOSS BOT CHỤP ẢNH & LẤY CODE (KHÔNG DÙNG AI) -->
            <div id="cweb-sec-boss" style="display:none;">
                <div style="background:#1e1e24; border:1px solid #00b0ff; border-radius:8px; padding:12px; margin-bottom:12px;">
                    <h4 style="color:#00d2ff; margin-bottom:6px; font-size:0.85rem;">📸 Boss Bot Chụp Ảnh Web &amp; Trích Xuất Code (Không Dùng AI):</h4>
                    <p style="font-size:0.75rem; color:#d1d5db; line-height:1.5;">Boss Bot sẽ tự động chụp lại ảnh màn hình toàn trang và dùng bộ nhận diện WebAssembly OCR để trích xuất chữ và tái tạo lại giao diện mà <b>hoàn toàn không dùng AI</b>!</p>
                </div>

                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="web-url-input-boss" style="font-weight:bold;">Nhập link trang web cần chụp:</label>
                    <input type="text" id="web-url-input-boss" placeholder="https://example.com" style="background:#29292e; color:#fff; border:1px solid #424242; border-radius:4px; padding:9px 12px; font-size:0.85rem;">
                </div>

                <button type="button" id="btn-run-boss-snap" style="width:100%; background:linear-gradient(135deg, #00c853, #00b0ff); color:white; border:none; padding:11px; font-size:0.88rem; font-weight:bold; border-radius:4px; cursor:pointer;" onclick="runBossBotScreenshotAndOCR()">📸 KÍCH HOẠT BOSS BOT CHỤP ẢNH &amp; LẤY CODE</button>

                <div id="boss-bot-preview-container" style="display:none; margin-top:10px; text-align:center;">
                    <div style="font-size:0.75rem; color:#888; margin-bottom:4px;">🖼️ Ảnh chụp màn hình trang web thực tế do Boss Bot ghi lại:</div>
                    <img id="boss-bot-snap-preview" src="" style="width:100%; max-height:180px; object-fit:cover; border-radius:6px; border:1px solid #00b0ff; background:#000;">
                </div>
            </div>

            <div id="web-url-logs" class="bot-status-box" style="height: 80px; color:#4ade80; margin-top:10px;">🌐 Sẵn sàng lấy mã nguồn từ link web...</div>
        </div>
    </div>

    <!-- ==================== MODAL: KHO THƯ VIỆN CDN 1-CLICK ==================== -->
    <div id="cdn-modal" class="modal-overlay" onclick="toggleCDNModal(false)">
        <div class="modal-content" style="width: 600px; max-width: 95%; max-height: 90vh; overflow-y: auto;" onclick="event.stopPropagation()">
            <div class="modal-header" style="border-bottom: 1px solid #334155; padding-bottom: 10px;">
                <h3 style="color:#a78bfa; display:flex; align-items:center; gap:8px;">📦 Kho Thư Viện &amp; CDN (1-Click Nhúng Vào Web)</h3>
                <button class="modal-close" onclick="toggleCDNModal(false)">✖</button>
            </div>
            <p style="font-size:0.75rem; color:#94a3b8; margin-bottom:12px;">Nhấn nút <b>"+ Nhúng"</b> để tự động chèn thư viện vào tab HTML của trang hiện tại và dùng được ngay lập tức!</p>

            <div id="cdn-library-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:10px;">
                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#38bdf8;">🎨 Tailwind CSS v3</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">CSS Framework tiện ích hiện đại</div>
                    </div>
                    <button type="button" style="background:#0284c7; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('tailwind')">+ Nhúng</button>
                </div>

                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#a855f7;">🅱️ Bootstrap 5.3</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">CSS &amp; JS Components đầy đủ</div>
                    </div>
                    <button type="button" style="background:#7c3aed; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('bootstrap')">+ Nhúng</button>
                </div>

                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#f59e0b;">✨ FontAwesome Icons 6</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">Bộ 2,000+ Icon đẹp mắt</div>
                    </div>
                    <button type="button" style="background:#d97706; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('fontawesome')">+ Nhúng</button>
                </div>

                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#22c55e;">⚡ jQuery 3.7</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">Thư viện thao tác DOM phổ biến</div>
                    </div>
                    <button type="button" style="background:#16a34a; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('jquery')">+ Nhúng</button>
                </div>

                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#06b6d4;">⚛️ React 18 &amp; ReactDOM</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">Xây dựng UI Component</div>
                    </div>
                    <button type="button" style="background:#0891b2; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('react')">+ Nhúng</button>
                </div>

                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#10b981;">🟢 Vue 3</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">Framework Reactive linh hoạt</div>
                    </div>
                    <button type="button" style="background:#059669; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('vue')">+ Nhúng</button>
                </div>

                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#f43f5e;">📈 Chart.js</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">Vẽ biểu đồ tròn, cột, đường tương tác</div>
                    </div>
                    <button type="button" style="background:#e11d48; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('chartjs')">+ Nhúng</button>
                </div>

                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#ec4899;">🎇 Canvas Confetti</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">Hiệu ứng bắn pháo hoa ăn mừng</div>
                    </div>
                    <button type="button" style="background:#db2777; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('confetti')">+ Nhúng</button>
                </div>

                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#3b82f6;">💫 AOS (Animate on Scroll)</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">Hiệu ứng cuộn trang mượt mà</div>
                    </div>
                    <button type="button" style="background:#2563eb; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('aos')">+ Nhúng</button>
                </div>

                <div style="background:#1e293b; border:1px solid #334155; border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:0.85rem; font-weight:bold; color:#8b5cf6;">🧊 Three.js 3D</div>
                        <div style="font-size:0.7rem; color:#94a3b8;">Đồ họa không gian 3D WebGL</div>
                    </div>
                    <button type="button" style="background:#7c3aed; color:white; border:none; padding:6px 12px; font-size:0.75rem; font-weight:bold; border-radius:4px;" onclick="injectCDN('threejs')">+ Nhúng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Boss Bot GitHub -->
    <div id="bot-modal" class="modal-overlay" onclick="toggleBotModal(false)">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h3 style="color:#00d2ff;">🤖 Boss Bot GitHub Tự Động</h3>
                <button class="modal-close" onclick="toggleBotModal(false)">✖</button>
            </div>

            <div class="setting-item">
                <label for="github-token">GitHub Personal Access Token (PAT):</label>
                <input type="password" id="github-token" placeholder="ghp_xxxxxxxxxxxxxxxxx">
                <span style="font-size:0.7rem; color:#888;">Cần quyền scope: <b>repo</b></span>
            </div>

            <div style="display: flex; gap: 6px; margin-bottom: 15px;">
                <button id="btn-bot-mode-create" class="bot-mode-tab active" onclick="switchBotMode('create')">➕ 1. Tạo Web Mới</button>
                <button id="btn-bot-mode-edit" class="bot-mode-tab" onclick="switchBotMode('edit')">✏️ 2. Sửa Web Cũ</button>
            </div>

            <div id="bot-sec-create">
                <div class="setting-item">
                    <label for="github-repo">Tên Repository Mới (Kho chứa):</label>
                    <input type="text" id="github-repo" value="my-auto-website" placeholder="my-auto-website">
                </div>
                <div class="setting-item">
                    <label for="github-page-select">Trang muốn tải lên:</label>
                    <select id="github-page-select">
                        <option value="p1">📄 Trang Web 1 (Main)</option>
                        <option value="p2">🚀 Trang Web 2</option>
                    </select>
                </div>
                <button class="btn-bot-github" style="width:100%; padding:10px; font-size:0.9rem;" onclick="runBossBotGitHub()">🚀 KÍCH HOẠT BOSS BOT TẠO WEB</button>
            </div>

            <div id="bot-sec-edit" style="display:none;">
                <button style="width:100%; margin-bottom:12px; background:#0288d1; color:white; padding:8px;" onclick="fetchUserRepos()">🔄 Lấy Danh Sách Kho Lưu Trữ Của Bạn</button>
                <div class="setting-item">
                    <label for="github-repo-list">Chọn Kho Lưu Trữ Cần Sửa:</label>
                    <select id="github-repo-list" onchange="onRepoListChange()">
                        <option value="">-- Vui lòng nhấn "Lấy Danh Sách Kho" --</option>
                    </select>
                </div>
                <div class="setting-item">
                    <label for="github-page-select-edit">Trang muốn ghi đè lên kho lưu trữ này:</label>
                    <select id="github-page-select-edit">
                        <option value="p1">📄 Trang Web 1 (Main)</option>
                        <option value="p2">🚀 Trang Web 2</option>
                    </select>
                </div>
                <button class="btn-bot-github" style="width:100%; padding:10px; font-size:0.9rem; background: linear-gradient(135deg, #f57c00, #ffb300) !important;" onclick="updateSelectedRepo()">✏️ SỬA / CẬP NHẬT KHO LƯU TRỮ NÀY</button>
            </div>

            <div id="bot-logs" class="bot-status-box">🤖 Boss Bot sẵn sàng nhận lệnh...</div>

            <div id="bot-link-box" style="display:none; margin-top:10px; background:#1a1a1e; border:1px solid #00d2ff; border-radius:6px; padding:8px; align-items:center; gap:6px;">
                <span style="font-size:0.75rem; color:#888; flex-shrink:0;">🌐 Link:</span>
                <input id="bot-link-input" type="text" readonly="" style="flex:1; min-width:0; background:transparent; border:none; color:#00d2ff; font-size:0.75rem; outline:none;" onclick="this.select();">
                <button type="button" style="flex-shrink:0; padding:6px 10px; background:linear-gradient(135deg, #6e40c9, #00d2ff); border:none; color:white; border-radius:4px; font-size:0.7rem; font-weight:bold; cursor:pointer;" onclick="copyBotSiteLink()">📋 Copy</button>
            </div>
        </div>
    </div>

    <!-- Modal Cài Đặt -->
    <div id="settings-modal" class="modal-overlay" onclick="toggleSettingsModal(false)">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header"><h3>⚙️ Cài Đặt Giao Diện</h3><button class="modal-close" onclick="toggleSettingsModal(false)">✖</button></div>
            <div class="setting-item">
                <label for="select-web2">Chế độ Trang Web 2:</label>
                <select id="select-web2" onchange="onWeb2SelectChange(this)">
                    <option value="false">❌ Tắt (Chỉ dùng 1 Web)</option>
                    <option value="true">🌐 Bật (Kích hoạt Trang Web 2)</option>
                </select>
            </div>
            <div class="setting-item">
                <label for="select-ads">Quảng Cáo Giả Lập:</label>
                <select id="select-ads" onchange="onAdsLocationChange(this)">
                    <option value="none">❌ Tắt quảng cáo</option>
                    <option value="top">⬆️ Trên cùng</option>
                    <option value="bottom">⬇️ Dưới cùng</option>
                    <option value="popup">📺 Giữa màn hình</option>
                    <option value="video-forced">🔒 Video 5s - BẮT BUỘC xem hết mới vào web</option>
                    <option value="video-skippable">🎬 Video 60s - Bỏ qua được sau 15s</option>
                </select>
            </div>
            <div class="setting-item" id="ads-size-container">
                <label for="select-ads-size">Kích thước Banner:</label>
                <select id="select-ads-size" onchange="onAdsSizeChange(this)">
                    <option value="auto">⚡ Tự động</option>
                    <option value="leaderboard">📏 Ngang Lớn (728x90)</option>
                    <option value="square">🔲 Vuông (336x280)</option>
                    <option value="skyscraper">🧱 Dọc (160x600)</option>
                </select>
            </div>
        </div>
    </div>

    <!-- Modal Tạo App (PWA) -->
    <div id="create-app-modal" class="modal-overlay" onclick="toggleCreateAppModal(false)">
        <div class="modal-content app-modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h3>📦 Đóng Gói Thành App</h3>
                <button class="modal-close" onclick="toggleCreateAppModal(false)">✖</button>
            </div>

            <div class="app-icon-row">
                <div class="app-icon-preview" id="app-icon-preview">🖼️</div>
                <div>
                    <button type="button" class="app-icon-btn" onclick="document.getElementById('app-icon-input').click()">🖼️ Chọn hình ảnh (icon)</button>
                    <input type="file" id="app-icon-input" accept="image/*" onchange="previewAppIcon(this)">
                    <div style="font-size:0.7rem; color:#8e8e93; margin-top:5px;">PNG/JPG, nên vuông, tối thiểu 512x512</div>
                </div>
            </div>

            <div class="setting-item">
                <label for="app-name-input">Tên App:</label>
                <input type="text" id="app-name-input" placeholder="Ví dụ: My Code App" style="background:#29292e; color:#e1e1e6; border:1px solid #424242; border-radius:4px; padding:6px 10px; width:60%;">
            </div>

            <div class="setting-item">
                <label for="app-page-select">Đóng gói trang:</label>
                <select id="app-page-select">
                    <option value="p1">📄 Trang Web 1</option>
                    <option value="p2">🚀 Trang Web 2</option>
                </select>
            </div>

            <div class="app-platform-list" id="app-platform-list">
                <span class="app-platform-chip selected" data-platform="android" onclick="togglePlatformChip(this)">🤖 Android</span>
                <span class="app-platform-chip selected" data-platform="ios" onclick="togglePlatformChip(this)">🍎 iOS</span>
                <span class="app-platform-chip selected" data-platform="windows" onclick="togglePlatformChip(this)">🪟 Windows</span>
            </div>
            <div style="font-size:0.7rem; color:#8e8e93; margin:-8px 0 12px;">Bấm để chọn/bỏ chọn nền tảng bạn muốn tạo.</div>

            <button class="btn-run" style="width:100%; padding:10px;" onclick="generateAppPackage()">⬇️ Tạo &amp; Tải Gói App</button>
            <div class="app-progress" id="app-progress">⏳ Đang tạo gói app...</div>

            <div class="app-note">
                ℹ️ Gói tải về là một <b>PWA (Progressive Web App)</b> — gồm manifest, icon và service worker để chạy offline.
            </div>
        </div>
    </div>

    <!-- Modal Quản Lý API Key AI -->
    <div id="ai-key-modal" class="modal-overlay" onclick="closeAIKeyModal()">
        <div class="modal-content ai-key-modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h3>🔑 Quản Lý API Key (Đa Nhà Cung Cấp AI)</h3>
                <button class="modal-close" onclick="closeAIKeyModal()">✖</button>
            </div>

            <div id="ai-key-list" class="ai-key-list"></div>

            <div class="ai-key-add-box">
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="ai-key-provider-select">Nhà cung cấp AI:</label>
                    <select id="ai-key-provider-select" onchange="onProviderSelectChange()"></select>
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="ai-key-name-input">Đặt tên cho Key:</label>
                    <input type="text" id="ai-key-name-input" placeholder="VD: Key Cá Nhân, Key Công Ty...">
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="ai-key-value-input" id="ai-key-value-label">API Key:</label>
                    <input type="password" id="ai-key-value-input" placeholder="Dán API Key vào đây...">
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="ai-key-model-input">Model (không bắt buộc):</label>
                    <input type="text" id="ai-key-model-input" placeholder="VD: gpt-4o-mini">
                </div>
                <div class="setting-item" id="ai-key-endpoint-wrap" style="margin-bottom:8px; display:none;">
                    <label for="ai-key-endpoint-input">Địa chỉ API (Endpoint):</label>
                    <input type="text" id="ai-key-endpoint-input" placeholder="https://.../v1/chat/completions">
                </div>
                <div class="setting-item" style="margin-bottom:8px;">
                    <label for="ai-key-proxy-input">CORS Proxy (tùy chọn):</label>
                    <input type="text" id="ai-key-proxy-input" placeholder="VD: https://corsproxy.io/?url=  — dùng khi trình duyệt chặn CORS">
                </div>
                <button class="btn-ai" style="width:100%; padding:8px; font-size:0.8rem; margin-bottom:8px; background:#263238;" onclick="testAIKeyConnection()">🔌 Kiểm tra kết nối</button>
                <div id="ai-key-test-result" style="font-size:0.78rem; margin-bottom:8px; line-height:1.5; word-break:break-word;"></div>
                <button class="btn-ai" style="width:100%; padding:10px; font-size:0.85rem;" onclick="addNewAIKey()">➕ Lưu Key Mới</button>
            </div>
            <p class="ai-key-hint">💡 Hỗ trợ: Google Gemini, ChatGPT, Claude, DeepSeek, Groq, xAI Grok, OpenRouter, Custom.<br>⚠️ Gemini bị chặn ở một số quốc gia (VD: Việt Nam) và OpenAI/DeepSeek/xAI bị trình duyệt chặn CORS — nên dùng <b>OpenRouter / Groq / Claude</b> hoặc điền CORS Proxy.</p>
        </div>
    </div>

    <!-- LOGIC JAVASCRIPT ĐIỀU KHIỂN HỆ THỐNG -->