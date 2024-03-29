export default function template(initialState = {}, content = '', scriptTags) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/assets/style.css">
      </head>
      <body>
        <div id="app">
          ${content}
        </div>

        <script>
          window.__STATE__ = ${JSON.stringify(initialState)}
        </script>
        ${scriptTags}
      </body>
    </html>
    `;
}
