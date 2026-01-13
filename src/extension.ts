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
