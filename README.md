![Logo](/logo.png)


# Hokeys

HOTKEYS is a chrome extension built to free users from memorizing Shortcuts.Keys combinations can be accessed by just clicking a button which neatly presents shortcuts in well segregated manner.
>"This extension is not published on google webstore.So,You have install it manually. Please refer Run Locally section"


## Authors
 [@Aryanutkarsh](https://www.github.com/Aryanutkarsh)
- <div align="center">

  <a href="https://github.com/Aryanutkarsh">
    <img align="right" width="100" src="https://github.com/Aryanutkarsh/Aryanutkarsh/blob/main/20210824_221743_0000.png">
  </a>
</div>


## Demo

![Demo](/Demo.gif)

## Color Reference

| Color             | Hex                                                                  |
| ----------------- | :------------------------------------------------------------------: |
| Background Colour | ![#443737](https://via.placeholder.com/10/443737?text=+)  #443737    |
|  Primary Colour   | ![#ff4d00](https://via.placeholder.com/10/ff0000?text=+) #FF0000     |
| Secondary Colour  | ![#ff0000](https://via.placeholder.com/10/ff4D00?text=+) #FF4D00     |


## Contribution 👥️️

Great to see you are checking this section!😁

## Add more shortcuts ➕️
To add more schortcuts:

Navigate to root folder → Open popup.html → Go to body tag → Use respective code block

##### ⁍ Add schortcut in existing category
Use below given template
```html
 <button class="collapsible">Existing Category</button>
      <div class="content">
        <p class="keyshortcut">Action<kbd>Key name</kbd> + <kbd>Key name</kbd></p>
        <p class="keyshortcut">Fullscreen<kbd>F11</kbd></p>
      </div>
```


##### ⁍ Add Another Category & add schortcut

```html
 <button class="collapsible">Main Category/Website name</button>
      <div class="content">
        <p class="keyshortcut">Action<kbd>Key name</kbd> + <kbd>Key name</kbd></p>
        <p class="keyshortcut">Fullscreen<kbd>F11</kbd></p>
      </div>
```

## Add Feature
#### ⁍ `Popup.html`    is the main html to runs when extension is used 
#### ⁍ `script.js`     includes all the javascript
#### ⁍ `style.css`     includes all the styling
#### ⁍ `manifest.json` includes details about extension


## Run Locally / Install on Chrome


#### ⁍ Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

#### ⁍ Download the code in zip format
#### ⁍ Extract it
#### ⁍ Open extension psge in Google chrome
There are several ways todo that.

1.Type `chrome://extensions` in the url bar and press enter.

2.Click on the tree dots in the top right of the browser, then click "More tools" then click "Extensions".

#### ⁍ Enable Developers option
#### ⁍ Click on Load unpacked,then select the unziped folder

## License

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](/Hotkeys/LICENSE.txt)
