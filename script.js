
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

const defaultMarkdown = `
# Heading 1
## Subheading 2

This is a [link](https://www.example.com)

\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**

This is a line break test:  
This is the second line after a break.
`;

editor.value = defaultMarkdown;


function updatePreview() {
  const markdownText = editor.value;
  preview.innerHTML = marked.parse(markdownText, { breaks: true }); 
}

editor.addEventListener('input', updatePreview);

updatePreview();
