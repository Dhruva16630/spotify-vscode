/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// import * as vscode from 'vscode';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpotifyViewProvider = void 0;
exports.activate = activate;
// export function activate(context: vscode.ExtensionContext) {
//   console.log("1");
//   const provider = new SpotifyViewProvider(context);
//   context.subscriptions.push(
//     vscode.window.registerWebviewViewProvider(
//       "spotifyView",
//       provider
//     )
//   );
//   vscode.commands.executeCommand("workbench.view.extension.spotify");
// }
// class SpotifyViewProvider implements vscode.WebviewViewProvider {
//   constructor(private context: vscode.ExtensionContext) {}
//   resolveWebviewView(webviewView: vscode.WebviewView) {
//     webviewView.webview.options = {
//       enableScripts: true
//     };
// 	console.log("Loaded");
//     webviewView.webview.html = `
//       <!DOCTYPE html>
//       <html>
//         <body style="background:#121212;color:white;">
//           <h2>🎵 Spotify Sidebar Loaded</h2>
//           <p>Your VS Code Spotify extension is working.</p>
//         </body>
//       </html>
//     `;
//   }
// }
// import * as vscode from "vscode";
// import * as path from "node:path";
// import { getWebviewContent } from "./getWebviewContent";
// export function activate(context: vscode.ExtensionContext) {
//   const disposable = vscode.commands.registerCommand(
//     "spotify-vscode.helloWorld",
//     async () => {
//       const panel = vscode.window.createWebviewPanel(
//         "reactWebview",
//         "React Webview",
//         vscode.ViewColumn.One,
//         {
//           enableScripts: true,
//           localResourceRoots: [
//             vscode.Uri.file(path.join(context.extensionPath, "webview", "dist"))
//           ]
//         }
//       );
//       panel.webview.html = await getWebviewContent(context, panel.webview);
//     }
//   );
//   context.subscriptions.push(disposable);
// }
const vscode = __importStar(__webpack_require__(1));
const getWebviewContent_1 = __webpack_require__(2);
function activate(context) {
    console.log("Spotify extension activated");
    const provider = new SpotifyViewProvider(context);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider("spotifyView", provider, {
        webviewOptions: {
            retainContextWhenHidden: true
        }
    }));
}
class SpotifyViewProvider {
    context;
    constructor(context) {
        this.context = context;
    }
    async resolveWebviewView(webviewView) {
        console.log("Spotify sidebar opened");
        const webview = webviewView.webview;
        webview.options = {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.joinPath(this.context.extensionUri, "webview", "dist"),
            ],
        };
        webview.html = await (0, getWebviewContent_1.getWebviewContent)(this.context, webview);
    }
}
exports.SpotifyViewProvider = SpotifyViewProvider;


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWebviewContent = getWebviewContent;
const node_crypto_1 = __webpack_require__(3);
const fs = __importStar(__webpack_require__(4));
const path = __importStar(__webpack_require__(5));
const vscode = __importStar(__webpack_require__(1));
const PORT = 5174;
function createBaseCSP(webview) {
    return [
        `default-src 'none'`,
        `img-src ${webview.cspSource} https: data:`,
        `style-src ${webview.cspSource} 'unsafe-inline'`,
        `font-src ${webview.cspSource} https:`,
        `frame-src ${webview.cspSource} https:`,
    ];
}
function createDevCSP(webview, nonce, origin, wsOrigin) {
    return ([
        ...createBaseCSP(webview),
        `script-src 'nonce-${nonce}' 'unsafe-eval' ${origin}`,
        `connect-src ${origin} ${wsOrigin} ws://localhost:${PORT} ws://127.0.0.1:${PORT}`,
    ].join("; ") + ";");
}
function createProdCSP(webview, nonce) {
    return ([
        ...createBaseCSP(webview),
        `script-src 'nonce-${nonce}' ${webview.cspSource}`,
        `connect-src ${webview.cspSource}`,
    ].join("; ") + ";");
}
async function getDevUris() {
    const refreshLocal = vscode.Uri.parse(`http://localhost:${PORT}/@react-refresh`);
    const clientLocal = vscode.Uri.parse(`http://localhost:${PORT}/@vite/client`);
    const entryLocal = vscode.Uri.parse(`http://localhost:${PORT}/src/main.tsx`);
    const [refreshUri, clientUri, entryUri] = await Promise.all([
        vscode.env.asExternalUri(refreshLocal),
        vscode.env.asExternalUri(clientLocal),
        vscode.env.asExternalUri(entryLocal),
    ]);
    const origin = `${clientUri.scheme}://${clientUri.authority}`;
    const wsOrigin = origin.replace(/^http/, "ws");
    return { refreshUri, clientUri, entryUri, origin, wsOrigin };
}
function createDevHTML(nonce, uris, csp) {
    return `
    <!doctype html>
    <html>
        <head>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Security-Policy" content="${csp}">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dev</title>
        </head>
        <body>
        <div id="root"></div>

        <script type="module" nonce="${nonce}">
            import RefreshRuntime from "${uris.refreshUri.toString(true)}";
            RefreshRuntime.injectIntoGlobalHook(window);
            window.$RefreshReg$ = () => {};
            window.$RefreshSig$ = () => (type) => type;
            window.__vite_plugin_react_preamble_installed__ = true;
        </script>

        <script type="module" nonce="${nonce}" src="${uris.clientUri.toString(true)}"></script>
        <script type="module" nonce="${nonce}" src="${uris.entryUri.toString(true)}"></script>
        </body>
    </html>
    `;
}
function processProductionHtml(htmlContent, webview, distPath, nonce) {
    const processedHtml = htmlContent.replace(/(href|src)=["']([^"']*)["']/g, (match, attr, url) => {
        if (url.startsWith("http") ||
            url.startsWith("data:") ||
            url.startsWith("#") ||
            url === "") {
            return match;
        }
        const clean = url.replace(/^\//, "");
        const onDisk = vscode.Uri.file(path.join(distPath, clean));
        const webviewUri = webview.asWebviewUri(onDisk).toString();
        return `${attr}="${webviewUri}"`;
    });
    const csp = createProdCSP(webview, nonce);
    return processedHtml
        .replace("</head>", `<meta http-equiv="Content-Security-Policy" content="${csp}"></head>`)
        .replace(/<script([^>]*)type="module"([^>]*)>/g, `<script$1type="module"$2 nonce="${nonce}">`);
}
async function getWebviewContent(context, webview) {
    const isDev = context.extensionMode === vscode.ExtensionMode.Development;
    const nonce = (0, node_crypto_1.randomUUID)();
    if (isDev) {
        const uris = await getDevUris();
        const csp = createDevCSP(webview, nonce, uris.origin, uris.wsOrigin);
        return createDevHTML(nonce, uris, csp);
    }
    const htmlPath = path.join(context.extensionPath, "webview", "dist", "index.html");
    const distPath = path.join(context.extensionPath, "webview", "dist");
    const htmlContent = fs.readFileSync(htmlPath, "utf8");
    return processProductionHtml(htmlContent, webview, distPath, nonce);
}


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("node:path");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map