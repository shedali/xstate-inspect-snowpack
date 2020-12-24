module.exports = {
  "mount": {
    "public": {
      "url": "/",
      "static": true
    },
    "src": {
      "url": "/dist"
    }
  },
  "plugins": [
    [
      "snowpack-plugin-relative-css-urls"
    ]
  ],
  "install": [],
  "installOptions": {},
  "devOptions": {
    "port": 8080
  },
  "buildOptions": {},
  "proxy": {},
  "alias": {
    "src": "./src"
  }
}