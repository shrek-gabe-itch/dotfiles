// Custom themes dependencies
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); 				// [false]
user_pref("svg.context-properties.content.enabled", true); 								// [false]

user_pref("userChrome.hide.inactive.menu", true);
user_pref("userChrome.rounded.style1", true);
user_pref("userChrome.floating.findbar.foxone", true);

// Transparent browser root background
//user_pref("browser.tabs.allow_transparent_browser", true);                              // [false]

// Tabs groupping
//user_pref("browser.tabs.groups.enabled", true);										// [true]
// Tabs split view
user_pref("browser.tabs.splitView.enabled", false);										// [true]

// Scrollbar styles
// user_pref("widget.non-native-theme.scrollbar.style", 0);								// [0]
// 0 = native;
// 1 = MacOS;
// 2 = GTK;
// 3 = Android;
// 4 = Windows 10;
// 5 = Windows 11;

// Native Mica/Acrylic Effects
// Title bar & url bar
//user_pref("widget.windows.mica", false);													// [true]
//user_pref("widget.windows.mica.popups", 0);												// [2]
// 0 = disable in context menus and popups
// 1 = enable in context menus and popups
// 2 = automatic (respect Windows settings)
//user_pref("widget.windows.mica.toplevel-backdrop", 0);									// [0]
// 0 = automatic (respect Windows settings)
// 1 = use native Mica effects
// 2 = use Acrylic effects
// 3 = use MicaAlt effects (use with DWMBlurGlass/Mica For Everyone!)

// Disable insecure download block
user_pref("dom.block_download_insecure", false);										// [true]

// Automated cookie banner handling feature
// user_pref("cookiebanners.service.mode", 0);											// [0]
// 0 = disabled
// 1 = reject all and ignore banners with only accept options
// 2 = reject all or fall back to accept all
// Enables the clicking simulation feature
// user_pref("cookiebanners.bannerClicking.enabled", true)								// [false]
// Enables the cookie injection feature
// user_pref("cookiebanners.cookieInjector.enabled", true)								// [true]

// Disabe prefetching [uBlock can control this]
user_pref("network.prefetch-next", false);												// [true]
user_pref("network.dns.disablePrefetch", true);											// [false]
user_pref("network.dns.disablePrefetchFromHTTPS", true); 								// [false]
user_pref("network.http.speculative-parallel-limit", 0);								// [20]
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Remote download filters for block dangerous content
user_pref("browser.safebrowsing.downloads.remote.enabled", false);						// [true]

// Proxy settings
// [WARNING] May cause slow startup delay 5-180 sec for loading pages
user_pref("network.proxy.type", 0);														// [5]
// 0 = direct connection;
// 1 = manual;
// 2 = PAC;
// 3 = mapped to 0 (reset);
// 4 = auto-detect proxy (WPAD);
// 5 = use system proxy
// https://antizapret.prostovpn.org/proxy.pac
// https://antizapret.prostovpn.org:18443/proxy.pac
// https://antizapret.prostovpn.org:8443/proxy.pac
// user_pref("network.proxy.autoconfig_url", "https://antizapret.prostovpn.org:18443/proxy.pac");
// user_pref("network.proxy.no_proxies_on", "vk.com, .userapi.com, vkuseraudio.net, unsplash.com");

// QUIC protocol(if you have YouTube lags set false)
//user_pref("network.http.http3.enable", true);											// [true]

// Enable ECH
// user_pref("network.dns.echconfig.enabled", true);									// [true]

// DNS over HTTPS
//user_pref("network.trr.mode", 0);														// [0]
// 0 = default protection
// 1 = off
// 2 = increased protection
// 3 = max protection
//user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");			// doh provider

// Font rendering
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5); 					// [-1]
// -1 or 0 = use [for font & size;
// 1 = aliased
// 2 = GDI Classic
// 3 = GDI Natural Widths
// 4 = Natural
// 5 = Natural Symmetric

// Enable  PIP when switching tab
user_pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", true);	// [false]

// Disable tabs hover new titles
user_pref("browser.tabs.hoverPreview.enabled", false);									// [true]

// Disable "Copy without site tracking"
user_pref("privacy.query_stripping.strip_on_share.enabled", false);						// [true]

// Native windows notifications
// user_pref("alerts.useSystemBackend", true);											// [false]

// Open bookmarks in new tab
user_pref("browser.tabs.loadBookmarksInTabs", true);									// [false]

// Open bookmarks in background
// user_pref("browser.tabs.loadBookmarksInBackground", false);							// [false]

// Open Link In New Tab in background
// user_pref("browser.tabs.loadInBackground", true);									// [true]

// Smooth scrolling
//user_pref("apz.overscroll.enabled", true);											// [true]
//user_pref("general.smoothScroll", true);												// [true]
user_pref("mousewheel.default.delta_multiplier_y", 250);								// [100]
user_pref("general.smoothScroll.msdPhysics.enabled", true);								// [false]
user_pref("general.smoothScroll.currentVelocityWeighting", "1");						// [0.25]
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");						// [0.4]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);					// [12]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);				// [1000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");				// [1.3]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);				// [2000]
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);			// 120
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);			// [1250]

// Disable ads on protection stats tab
user_pref("browser.contentblocking.report.lockwise.enabled", false);					// [true]

// Disable extension recomendations
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);					// [true]

// Disable reader mode
user_pref("reader.parse-on-load.enabled", false);										// [true]

// Disable all embedded translation options
user_pref("browser.translations.enable", false);											// [true]

// Disable accessibility properties from context meny
user_pref("devtools.accessibility.enabled", false);										// [true]

// Disable fullscreen warning
user_pref("full-screen-api.warning.delay", -1);											// [500]
user_pref("full-screen-api.warning.timeout", 0);										// [3000]

// Disable drag-n-drop thumbnail previews
user_pref("nglayout.enable_drag_images", false);										// [true]

// Disable tabs drag-n-drop
//user_pref("browser.tabs.allowTabDetach", false);										// [true]

// Disable menu when pressing alt
user_pref("ui.key.menuAccessKeyFocuses", false);										// [true]

// Disable Firefox Accessibility Service
user_pref("accessibility.force_disabled", 1);											// [0]

// BetterFox tweaks
// Lowering the interval will increase responsiveness
user_pref("content.notify.ontimer", true);												// [true]
user_pref("content.interrupt.parsing", true);											// HIDDEN
user_pref("content.notify.interval", 100000);											// [120000]
user_pref("content.max.tokenizing.time", 1000000);										// HIDDEN alt=2000000 (2s) 
// UI responsiveness threshold
user_pref("content.switch.threshold", 300000);											// HIDDEN default=750000 alt=500000
// Load closed tabs only when select it
// true = not load until selected
// false = load immediately
user_pref("browser.sessionstore.restore_on_demand", true);								// [true]
user_pref("browser.sessionstore.restore_tabs_lazily", true); 							// [true]
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);					// [false]
// Disable preSkeletonUI on startup
user_pref("browser.startup.preXulSkeletonUI", false);									// [true]
// Webrender tweaks
user_pref("gfx.webrender.all", true);													// [false]
user_pref("gfx.webrender.precache-shaders", true);										// [false]
user_pref("gfx.webrender.compositor.force-enabled", true); 								// [false]
// GPU-accelerated Canvas2D [only for discrete GPU]
user_pref("gfx.canvas.accelerated", true);												// [true]
//user_pref("gfx.canvas.max-size", 32767);												// [65535]
user_pref("gfx.canvas.accelerated.cache-size", 512);									// [256]
user_pref("gfx.canvas.accelerated.cache-items", 4096);									// [8192]
user_pref("gfx.content.skia-font-cache-size", 32);										// [5]
// WebGL
user_pref("webgl.max-size", 16384); 													// [1024]
user_pref("webgl.force-enabled", true);													// [false]
// Image cache
user_pref("image.mem.decode_bytes_at_a_time", 32768);									// [16384]
// Disk cache [about:cache]
user_pref("browser.cache.disk.enable", true);											// [true]
// Force a fixed max cache size on disk
user_pref("browser.cache.disk.smart_size.enabled", false);								// [false]
// Maximum size of disk cache
user_pref("browser.cache.disk.capacity", 512000); 										// [256000] 
// Cache memory pool
user_pref("browser.cache.disk.metadata_memory_limit", 16384);							// [1024]
// Enforce free space checks
user_pref("browser.cache.disk.free_space_hard_limit", 2048); 							// [1024]
user_pref("browser.cache.disk.free_space_soft_limit", 10240); 							// [5120]
// Compression level for cached JavaScript bytecode
user_pref("browser.cache.jsbc_compression_level", 3);									// [0]
// 0 = no compression = 757,914 bytes
// 2 = minimal compression = 234,034 bytes
// 7 = average compression = 202,330 bytes
// 9 = maximum compression
// Memory cache
user_pref("browser.cache.memory.capacity", 131072); 									// [-1] alt=65536 (65 MB RAM cache)
user_pref("browser.cache.memory.max_entry_size", 20480); 								// [5120]
// Amount of Back/Forward cached pages stored in memory
user_pref("dom.storage.shadow_writes", true);											// [false]
user_pref("dom.storage.default_quota", 20480); 											// [5120]
user_pref("browser.sessionstore.max_entries", 10); 										// [HIDDEN OR REMOVED]
user_pref("browser.sessionstore.max_tabs_undo", 10); 									// [25]
user_pref("browser.sessionhistory.max_total_viewers", 4);								// [-1] (8)
// Start running garbage collection when javascript is using xx MB of memory
user_pref("javascript.options.mem.high_water_mark", 128); 								// [HIDDEN OR REMOVED]
// Use bigger packets
user_pref("network.buffer.cache.size", 65535);											// [32768]
user_pref("network.buffer.cache.count", 48 );											// [24]
// Increase the absolute number of HTTP connections
user_pref("network.http.max-connections", 1800);										// [900]
user_pref("network.http.request.max-start-delay", 5);									// [10]
user_pref("network.http.max-persistent-connections-per-proxy", 48); 					// [32]
user_pref("network.http.max-persistent-connections-per-server", 10);					// [6]
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);			// [3]
// Increase DNS cache
user_pref("network.dnsCacheEntries", 10000);											// [1600]
// DNS expiration time
user_pref("network.dnsCacheExpiration", 3600); 											// [60] (1min)
//user_pref("network.dnsCacheExpirationGracePeriod", 120);									// [600]
// Increase TLS token caching
user_pref("network.ssl_tokens_cache_capacity", 10240);									// [2048]

// Telemetry
user_pref("toolkit.coverage.opt-out", true); 											// [HIDDEN]
user_pref("captivedetect.canonicalURL", "");
user_pref("toolkit.telemetry.enabled", false); 											// pre-release builds [true] or release [false]
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.telemetry.server", "data:,");
user_pref("default-browser-agent.enabled", false);										// [WARNING] Breaks "Make Default..."
user_pref("toolkit.telemetry.dap_enabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);									// [HIDDEN]
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
// Extensions tracking
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("extensions.abuseReport.enabled", false);										// "report extensions for abuse"
user_pref("app.shield.optoutstudies.enabled", false);
// Geolocation
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false); 									// [only WINDOWS]
// Crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
// Assorted telemetry [Shouldn't be needed for user.js.]
user_pref("messaging-system.askForFeedback", false);
user_pref("signon.recipes.remoteRecipes.enabled", false);
user_pref("security.app_menu.recordEventTelemetry", false);
user_pref("security.certerrors.mitm.priming.enabled", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("network.trr.confirmation_telemetry_enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
user_pref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);