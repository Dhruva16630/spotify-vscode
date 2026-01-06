import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log("1");

  const provider = new SpotifyViewProvider(context);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "spotifyView",
      provider
    )
  );
  vscode.commands.executeCommand("workbench.view.extension.spotify");

}

class SpotifyViewProvider implements vscode.WebviewViewProvider {

  constructor(private context: vscode.ExtensionContext) {}

  resolveWebviewView(webviewView: vscode.WebviewView) {
    webviewView.webview.options = {
      enableScripts: true
    };

	console.log("Loaded");

    webviewView.webview.html = `
      <!DOCTYPE html>
      <html>
        <body style="background:#121212;color:white;">
          <h2>🎵 Spotify Sidebar Loaded</h2>
          <p>Your VS Code Spotify extension is working.</p>
        </body>
      </html>
    `;
  }
}
