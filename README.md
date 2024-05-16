# web-codemirror-demo

Step-by-step instructions for creating a simple CodeMirror demo that runs locally

CodeMirror requires a 'bundler'; we use Rollup per https://codemirror.net/examples/bundle

Uses 'basicSetup' - "an extension value that just pulls together a number of extensions that you might want in a basic editor" per bottom of https://codemirror.net/docs/ref/

## Test

This works out of the box: just open `src/main.html` in a web browser. (No server required; not even localhost.)

## Optional / opinionated pre-requisites if starting from scratch on macOS
```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_{remainder of correct key here}
cd ~/GitHub/
git clone git@github.com:MakeDeeply/web-codemirror-demo.git
cd web-codemirror-demo
conda create --name codemirror1
conda activate codemirror1
conda install -c conda-forge nodejs
```

## How we built it

- install rollup and 'resolve' plugin
```
npm i -g rollup
npm i --save-dev @rollup/plugin-node-resolve
```

- create `package.json` to specify dependencies

- create `src/main.js` with code for your selected subset of CodeMirror features. To add more features, update this script and relevant files / steps below for additional modules / plug-ins.

- create `rollup.config.mjs` and list the plugin

- install CodeMirror and at least one syntax-highlighting module (e.g. JavaScript)
    > `npm i codemirror @codemirror/lang-javascript`

- create the bundle `editor.js` that combines your script with CodeMirror and modules
    > `rollup -c`

- create `src/main.html` with script tag referencing the `editor.js` bundle

- open `src/main.html` in a web browser