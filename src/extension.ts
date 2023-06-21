import * as vscode from "vscode";
import PerlLintProvider from "./features/PerlLintProvider";
import PerlSyntaxProvider from "./features/PerlSyntaxProvider";

export function activate(context: vscode.ExtensionContext) {
  const linter = new PerlLintProvider();
  linter.activate(context.subscriptions);

  const checker = new PerlSyntaxProvider();
  checker.activate(context.subscriptions);
}

export function deactivate() { }
