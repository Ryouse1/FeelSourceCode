(() => {
  // ===== 全体 =====
  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.display = "flex";
  document.body.style.background = "#1e1e1e";
  document.body.style.fontFamily =
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  // ===== Editor（入力）=====
  const editor = document.createElement("pre");
  editor.contentEditable = "true";
  editor.spellcheck = false;
  editor.style.flex = "1";
  editor.style.margin = "0";
  editor.style.padding = "16px";
  editor.style.color = "#d4d4d4";
  editor.style.background = "#1e1e1e";
  editor.style.outline = "none";
  editor.style.whiteSpace = "pre";
  editor.style.lineHeight = "1.5";
  editor.style.borderRight = "1px solid #333";

  // 初期文字
  editor.textContent = `// Editor
// 左に自由に書く
// 右にリアルタイムで表示される
`;

  // ===== Preview（表示）=====
  const preview = document.createElement("pre");
  preview.style.flex = "1";
  preview.style.margin = "0";
  preview.style.padding = "16px";
  preview.style.background = "#111";
  preview.style.color = "#9cdcfe";
  preview.style.whiteSpace = "pre";
  preview.style.lineHeight = "1.5";
  preview.textContent = editor.textContent;

  // ===== 同期 =====
  editor.addEventListener("input", () => {
    preview.textContent = editor.textContent;
  });

  // ===== Tabキー対応（インデント）=====
  editor.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "  ");
    }
  });

  // ===== 追加 =====
  document.body.appendChild(editor);
  document.body.appendChild(preview);
})();
