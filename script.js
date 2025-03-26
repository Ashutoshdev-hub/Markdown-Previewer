marked.setOptions({
  breaks: true,
  gfm: true,
});

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const clearBtn = document.getElementById("clear-btn");

// Default content
const defaultMarkdown = `# Welcome to Markdown Previewer

## Type your markdown here

Try some **bold** or *italic* text



- Unordered list item
- Another item

1. Ordered list item
2. Another item

\`\`\`javascript
// Code block
function hello() {
    console.log("Hello, Ashu!");
}
\`\`\`
`;

editor.value = defaultMarkdown;

// Function to update preview
function updatePreview() {
  const markdownText = editor.value;
  const html = marked.parse(markdownText);
  preview.innerHTML = html;
}

// Event listeners
editor.addEventListener("input", updatePreview);
clearBtn.addEventListener("click", () => {
  editor.value = "";
  updatePreview();
});

// Initial preview render
updatePreview();
