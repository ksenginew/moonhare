---
sidebar_position: 1
sidebar_label: Installation
---

# Get started with MoonHare CSS

MoonHare CSS works by scanning all of your Styles, generating atomic styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with or **without** runtime.

## MoonHare CLI

The simplest and fastest way to get up and running with MoonHare CSS from scratch is with the MoonHare CLI tool.

1.  ### Install MooHare CSS

    Install `moonhare` via npm

    ```bash title="Terminal"
    npm install -D moonhare
    ```

2.  ### Start the MoonHare CLI build process

    Run the CLI tool to scan your template files for classes and build your CSS.

    ```bash title="Terminal"
    npx moonhare -i ./src/**/*.{html,js} -o ./dist/output.css --watch
    ```

3.  ### Start using MoonHare in your HTML

    Add your compiled CSS file to the `<head>` and start using `css` attribute to style your content.

    ```html title="src/index.html"
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="/dist/output.css" rel="stylesheet" />
        </head>
        <body>
            <h1
                css="
                font-size: xx-large;
                font-weight: bold;
                text-decoration: underline;
            "
            >
                Hello world!
            </h1>
        </body>
    </html>
    ```
