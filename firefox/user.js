// Custom themes dependencies
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); 				// default false
user_pref("svg.context-properties.content.enabled", true); 								// default false
// user_pref("layout.css.overflow-overlay.enabled", true);								// default false

// Scrollbar styles
user_pref("widget.non-native-theme.scrollbar.style", 0);								//  default 0
// 0 = native;
// 1 = MacOS;
// 2 = GTK;
// 3 = Android;
// 4 = Windows 10;
// 5 = Windows 11;

// Disable insecure download block
user_pref("dom.block_download_insecure", false);										// default true

// Automated cookie banner handling feature (by default enabled only for Germany users)
user_pref("cookiebanners.service.mode", 0);												// default 0
// 0 = disabled
// 1 = reject all and ignore banners with only accept options
// 2 = reject all or fall back to accept all
// Enables the clicking feature
user_pref("cookiebanners.bannerClicking.enabled", true)									// default true
// Enables the cookie injection feature
user_pref("cookiebanners.cookieInjector.enabled", true)									// default true

// Disabe prefetching [uBlock can control this]
user_pref("network.prefetch-next", false);												// default true
user_pref("network.dns.isablePrefetch", true);										    // default false
user_pref("network.dns.disablePrefetchFromHTTPS", true); 								// default true
user_pref("network.predictor.enabled", false);											// ???
user_pref("network.predictor.prefetch-rolling-load-count", 5);							// default 10
user_pref("network.predictor.enable-prefetch", false);									// default false
user_pref("network.http.speculative-parallel-limit", 0);								// default 6

// Disk cache [about:cache]
//user_pref("browser.cache.disk.enable", true);											// default true
// Force a fixed max cache size on disk
user_pref("browser.cache.disk.smart_size.enabled", false);								// deafult false
// Maximum size of disk cache
user_pref("browser.cache.disk.capacity", 512000); 										// default 256000
// compression level for cached JavaScript bytecode 
user_pref("browser.cache.jsbc_compression_level", 3);									// default 0
// 0 = do not compress = 757,914 bytes
// 2 = minimal compression = 234,034 bytes
// 7 = average compression = 202,330 bytes
// 9 = maximum compression

// Remote download filters for block dangerous content 
user_pref("browser.safebrowsing.downloads.remote.enabled", false);						// default true

// Proxy settings
// [WARNING] May cause slow startup delay 5-180 sec for loading pages
user_pref("network.proxy.type", 0);														// default 0
// 0 = direct connection;
// 1 = manual;
// 2 = PAC;
// 3 = mapped to 0 (reset);
// 4 = auto-detect proxy (WPAD);
// https://antizapret.prostovpn.org/proxy.pac
// https://antizapret.prostovpn.org:18443/proxy.pac
// https://antizapret.prostovpn.org:8443/proxy.pac
user_pref("network.proxy.autoconfig_url", "https://antizapret.prostovpn.org:18443/proxy.pac");
user_pref("network.proxy.no_proxies_on", "vk.com, .userapi.com, dota2.ru, youtube.com, twitch.tv, reddit.com, dotabuff.com, tiktok.com, vkuseraudio.net, unsplash.com");

// QUIC protocol(if you have YouTube lags set false)
user_pref("network.http.http3.enable", true);											// default true

// Enable ECH
user_pref("network.dns.echconfig.enabled", true);										// default false

// DNS over HTTPS
user_pref("network.trr.mode", 3);														// default 0
// 0 = disabled;
// 1 = reserved (used to be Race mode)[off];
// 2 = only if the name resolve fails use the native resolver as a fallback[increased protection];
// 3 = never use the native resolver[max protection];
// 4 = reserved (used to be Shadow mode)[off];
// 5 = same as 0 but marks it as done by choice and not done by default;

user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");			// doh provider

// Font rendering
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5); 					// default -1
// -1 or 0 = use default for font & size;
// 1 = aliased;
// 2 = GDI Classic;
// 3 = GDI Natural Widths;
// 4 = Natural;
// 5 = Natural Symmetric;

// Enable HW HEVC decoding
user_pref("media.wmf.hevc.enabled", 1);													// default 0

// NVIDIA RTX Video Super Resolution for video overlay [WINDOWS]
// user_pref("gfx.webrender.super-resolution.nvidia", true);							// default false

// Disable "list all tabs" title bar button
user_pref("browser.tabs.tabmanager.enabled", false);                                    // default true

// Native windows notifications
user_pref("alerts.useSystemBackend", true);												// default false

// Open bookmarks in new tab
user_pref("browser.tabs.loadBookmarksInTabs", true);									//  default false

// Open bookmarks in background
user_pref("browser.tabs.loadBookmarksInBackground", false);								// default false

// Open Link In New Tab in background
user_pref("browser.tabs.loadInBackground", true);										// default true

// Scrolling like old edge
user_pref("general.smoothScroll", true);												// default true
user_pref("general.smoothScroll.currentVelocityWeighting", 0.15);						// default 0.25
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);						// default 400
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 250);						// default 200
user_pref("general.smoothScroll.msdPhysics.enabled", true);								// default false
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);			// default 1250
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 600);				// default 1000
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 120);					// default 12
user_pref("general.smoothScroll.other.durationMaxMS", 500);								// default 150
user_pref("general.smoothScroll.pages.durationMaxMS", 350);								// default 150
user_pref("general.smoothScroll.stopDecelerationWeighting", 0.8);						// default 0.4
user_pref("mousewheel.min_line_scroll_amount", 22);										// default 5

// Disable ads on protection stats tab
user_pref("browser.contentblocking.report.lockwise.enabled", false);					// default true
user_pref("browser.contentblocking.report.monitor.enabled", false);						// default true

// Disable extension recomendations
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);					// default true

// Disable reader mode
user_pref("reader.parse-on-load.enabled", false);										// default true

// Disable Pocket extension
user_pref("extensions.pocket.enabled", false);											// default true

// Disable screenshots extension
user_pref("extensions.screenshots.disabled", true);										// default false

// Disable accessibility properties from context meny
user_pref("devtools.accessibility.enabled", false);										// default true

// Disable fullscreen warning
user_pref("full-screen-api.warning.delay", -1);											// default 500
user_pref("full-screen-api.warning.timeout", 0);										// default 3000

// Disable drag-n-drop thumbnail previews
user_pref("nglayout.enable_drag_images", false);										// default true

// Disable ctrl+tab thumbnail previews
user_pref("browser.ctrlTab.recentlyUsedOrder", false);									// default true

// Disable tabs drag-n-drop
user_pref("browser.tabs.allowTabDetach", false);										// default true

// Disable this content not secure on http pages
user_pref("security.insecure_field_warning.contextual.enabled", false);					// default true

// Disable menu when pressing alt
user_pref("ui.key.menuAccessKeyFocuses", false);										// default true

// BetterFox tweaks
// Reduce the 5ms Firefox waits to render the page
user_pref("nglayout.initialpaint.delay", 5);											// default 250
user_pref("nglayout.initialpaint.delay_in_oopif", 5);
// Lowering the interval will increase responsiveness
user_pref("content.notify.interval", 100000);											// default 120000
// Disable preSkeletonUI on startup
user_pref("browser.startup.preXulSkeletonUI", false);									// default true
// Prioritized Task Scheduling API
user_pref("dom.enable_web_task_scheduling", true);										// default false
// Webrender tweaks
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.compositor", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("media.hardware-video-decoding.enabled", true);
// GPU-accelerated Canvas2D [only for discrete GPU]
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 8192);									// alt 4096
user_pref("gfx.canvas.accelerated.cache-size", 1024);									// alt 512
user_pref("gfx.content.skia-font-cache-size", 20);
// Image cache
user_pref("image.mem.decode_bytes_at_a_time", 32768);									// default 16384
// Media cache
user_pref("media.memory_cache_max_size", 65536);										// default 8192
user_pref("media.memory_caches_combined_limit_pc_sysmem", 5);							// default 10 [% of system memory for media cache]
user_pref("media.cache_readahead_limit", 7200);											// default 60
user_pref("media.cache_resume_threshold", 3600);										// default 30

// Increase memory cache size
user_pref("browser.cache.memory.capacity", 1048576);									// default 256000
user_pref("browser.cache.memory.max_entry_size", 10240);								// default 5120
// Use bigger packets
user_pref("network.buffer.cache.size", 262144);											// default 32768
user_pref("network.buffer.cache.count", 128);											// default 24 
// Increase the absolute number of HTTP connections
user_pref("network.http.max-connections", 1800);										// default 900
user_pref("network.http.max-persistent-connections-per-server", 10);					// default 6
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);			// default 3
// Increase TLS token caching
user_pref("network.ssl_tokens_cache_capacity", 10240);									// default 2048

// Disable telemetry
user_pref("experiments.enabled", false);
user_pref("toolkit.coverage.opt-out", true);
user_pref("captivedetect.canonicalURL", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.telemetry.server", "data:,");
user_pref("browser.ping-centre.telemetry", false);
user_pref("default-browser-agent.enabled", false);										// [WARNING] Breaks "Make Default..."
user_pref("toolkit.telemetry.dap_enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("network.captive-portal-service.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
// Normandy/Shield [extensions tracking]
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
// Disable geolocation
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false); 									// only for WINDOWS
// Crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);