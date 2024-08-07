// ==UserScript==
// @name			Remove VK phone confirmation
// @namespace		Violentmonkey Scripts
// @version			3.0.1
// @description		Kak je ya vas nenaviju dermoedi
// @author			Thrower
// @match			https://*.vk.com/*
// @icon			https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @downloadURL		https://github.com/shrek-gabe-itch/dotfiles/raw/main/userjs/remove%20VK%20phone%20confirmation.user.js
// @updateURL		https://github.com/shrek-gabe-itch/dotfiles/raw/main/userjs/remove%20VK%20phone%20confirmation.user.js
// ==/UserScript==

(function() {
	'use strict';

	const POPUP_CLASS = "vkuiPopoutWrapper";
	const VALIDATION_CLASS_PREFIX = "CheckValidationPhone";

	function removeElement(element) {
		if (element && element.parentNode) {
			element.parentNode.removeChild(element);
		}
	}

	function clearBodyStyles() {
		document.body.removeAttribute("style");
	}

	function containsValidationClass(node) {
		if (node.nodeType === 1 && node.classList) {
			for (const className of node.classList) {
				if (className.startsWith(VALIDATION_CLASS_PREFIX)) {
					return true;
				}
			}
		}
		for (const childNode of node.childNodes) {
			if (containsValidationClass(childNode)) {
				return true;
			}
		}
		return false;
	}

	function handleChanges(mutationsList) {
		for (const mutation of mutationsList) {
			if (mutation.type === "childList") {
				for (const addedNode of mutation.addedNodes) {
					if (addedNode.nodeType === 1 && addedNode.classList.contains(POPUP_CLASS)) {
						if (containsValidationClass(addedNode)) {
							console.debug("VK PHONE CONFIRM:", "Remove element", `"${addedNode.className}"`)
							removeElement(addedNode);
							clearBodyStyles();
						}
					}
				}
			}
		}
	}

	const observer = new MutationObserver(handleChanges);
	const config = { childList: true, subtree: true };

	observer.observe(document.body, config);
})();