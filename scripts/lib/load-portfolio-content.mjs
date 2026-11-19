import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import ts from "typescript";

/**
 * Load the repository's data-only TypeScript content in Node 22 without a
 * second TS runtime or fake fixture content. Type-only imports are erased
 * during the compilation step; runtime imports are intentionally prohibited.
 */
export async function loadTypeScriptContent(path) {
  const file = resolve(path);
  const source = readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.ES2022, true);
  for (const statement of sourceFile.statements) {
    if (ts.isImportDeclaration(statement) && !statement.importClause?.isTypeOnly) {
      throw new Error(
        "Content validator needs a data-only module with type-only imports: " + path
      );
    }
  }
  const transpiled = ts.transpileModule(source, {
    fileName: file,
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    reportDiagnostics: true,
  });
  const errors = (transpiled.diagnostics ?? []).filter(
    (item) => item.category === ts.DiagnosticCategory.Error
  );
  if (errors.length) {
    throw new Error(
      path + ": " +
        errors.map((item) => ts.flattenDiagnosticMessageText(item.messageText, " ")).join("; ")
    );
  }
  return import(
    "data:text/javascript;base64," +
      Buffer.from(transpiled.outputText).toString("base64")
  );
}
