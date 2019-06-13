# Myorg

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Angular CLI power-ups for modern development.**

This is a test repo to reproduce an issue with 
`ng g c myComponent`.

I set up scss as extension at `angular.json` file.

`"@nrwl/schematics:component": {
       "styleext": "scss"
     }`

It should generate `.scss` files but it's generating `.css` files.


