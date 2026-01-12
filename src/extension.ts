// import * as vscode from 'vscode';

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

import * as vscode from "vscode";
import { getWebviewContent } from "./getWebviewContent";

export function activate(context: vscode.ExtensionContext) {
  console.log("Spotify extension activated");

  const provider = new SpotifyViewProvider(context);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "spotifyView",
      provider,
      {
        webviewOptions: {
          retainContextWhenHidden: true
        }
      }
    )
  );
}

export class SpotifyViewProvider implements vscode.WebviewViewProvider {
  constructor(private readonly context: vscode.ExtensionContext) {}

  async resolveWebviewView(webviewView: vscode.WebviewView) {
    console.log("Spotify sidebar opened");

    const webview = webviewView.webview;

    webview.options = {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.joinPath(this.context.extensionUri, "webview", "dist"),
      ],
    };

    webview.html = await getWebviewContent(this.context, webview);
  }
}
