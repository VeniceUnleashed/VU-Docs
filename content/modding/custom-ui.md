---
title: Creating custom UI using WebUI
weight: 3
---

Custom UI in VU (aka WebUI) is based on modern web technologies such as HTML, CSS, and JavaScript. WebUI is essentially a website overlayed on top of the game view, and integrated with the various different subsystems. WebUI is using the Chromium web engine internally, so as long as what you're creating works on Chrome, it should also work in-game.

## Creating your UI 

First of all, create a new folder somewhere in your computer. Inside this folder, create a new file named `index.html`. This will be the entry point to your custom UI and is the first page that will be presented to the user. For now, we'll put something simple in it in the form of a hello world message:

```html
<!DOCTYPE html>
<html>
<body>
    Hello world!
</body>
</html>
```

## Compiling a WebUI package

Before the UI can be used by a VU client, it must be compiled using the WebUI compiler (`vuicc.exe`). Download the latest version of the compiler from [here](https://veniceunleashed.net/vuicc.exe) and place it somewhere in your computer. Then, open a command prompt (like PowerShell or cmd) and compile the WebUI package using the following command:

> `vuicc.exe "C:\path\to\your\ui"`

Where `C:\path\to\your\ui` points to the folder where you previously created the `index.html` file. After the package has been successfully compiled a new file will be created in the currently directory named `ui.vuic`. This is the WebUI package and you will need this file in the next step to integrate it with your mod.

## Running your custom UI

Before you can proceed, make sure you've created a mod and set up a local server by following the [getting started guide](/modding/your-first-mod). Then, place the `ui.vuic` inside your mod folder (next to `mod.json`) and add a `HasWebUI` field with the value `true` inside your `mod.json` file. It should end up looking something like this:

```json
{
    "Name": "My mod",
    "Description": "My incredible mod",
    "Version": "1.0.0",
    "HasVeniceEXT": true,
    "HasWebUI": true,
    ...
}
```

You must then add some code inside your client scripts to initialize the WebUI when the user joins the server. Inside your client `__init__.lua` script (or any other client script that gets loaded on startup) add the following code:

```lua
Events:Subscribe('Extension:Loaded', function()
    WebUI:Init()
end)
```

This makes it so as soon as the mod gets loaded, the WebUI gets initialized and starts getting rendered on the user's screen. You can then start your server and join it, and you should be able to see the `Hello world!` text on your screen. 

## Managing input and display order

Since multiple WebUI frames can be active at a give time, one will be displayed on top of the other, which means that input will be received only by the one that's on top. Also, the game will often disable UI input, which means that a user will not be able to interact with your UI (such as when a user spawns in-game). Using JavaScript, the UI can request input from the game and change its display order. 

WebUI frames have a global function that can be used to interact with the modding engine: `WebUI.Call(...)`. The first parameter to this function is the operation the WebUI wants to perform and the rest are parameters to that operation (where relevant). For example, here's how you would enable keyboard input in your UI:

```js
WebUI.Call('EnableKeyboard');
```

Here's the full list of commands that can be used to control input and display order:

### `WebUI.Call('BringToFront')`

Brings this WebUI frame to the front, placing it on top of all other frames. This is useful for when the frame intends to receive input.

### `WebUI.Call('SendToBack')`

Sends this WebUI frame to the back, placing it behind all other frames.

### `WebUI.Call('EnableKeyboard')`

Enables keyboard input for this frame. This means that any key inputs will be sent to the WebUI. This also brings the frame to the front and shows it if it's hidden.

### `WebUI.Call('DisableKeyboard')`

Disables keyboard input and returns control to the game.

### `WebUI.Call('ResetKeyboard')`

Resets the keyboard input to its expected in-game state.

### `WebUI.Call('EnableMouse')`

Enables mouse input for this frame. This will show a cursor in-game and any mouse input will be passed to the WebUI. This also brings the frame to the front and shows it if it's hidden.

### `WebUI.Call('DisableMouse')`

Disables mouse input and returns control to the game.

### `WebUI.Call('ResetMouse')`

Resets the mouse input to its expected in-game state.

### `WebUI.Call('Hide')`

Hides the WebUI frame.

### `WebUI.Call('Show')`

Shows the WebUI frame.

## Communicating with VeniceEXT

Since WebUI frames by themselves cannot directly interact with the game, VU provides a way to communicate with the VeniceEXT scripting engine in both ways. WebUI frames have the ability to raise VeniceEXT events, which can be subscribed to and handled from a client-side script (for more information about events see the [events guide](/vext/guides/events)). This is possible via the global `WebUI.Call(...)` function as seen below:

```js
WebUI.Call('DispatchEvent', 'EventName', 123)
```

The first parameter after `DispatchEvent` is the name of the event to dispatch, and the parameter after that is the value to pass to it. Dispatched events only support one parameter, so a common pattern is to create a JS object, `JSON.stringify` it, and then `json.decode` it from the VeniceEXT side. There is also the `DispatchEventLocal` variation of this call which will only dispatch the event to the current mod instead of all of them.

From the VeniceEXT side, scripts can execute JavaScript code on the WebUI frame as seen below:

```lua
WebUI:ExecuteJS('console.log("hello world");')
```

For more information on the available interactions between VeniceEXT and the WebUIU refer to the [WebUI integration guide](/vext/guides/webui).

## Debugging your UI

You can debug your WebUI on the fly by using the Chromium Dev Tools. To enable the tools, launch the VU client with the `-dwebui` launch argment:

> `vu.exe -dwebui`

This will make the dev tools available locally on your computer at [http://localhost:8444](http://localhost:8444). Simply navigate to that webpage using the Chrome web browser after having joined your server, and you'll be able to see a live view of your UI. Keep in mind that the view will include the main menu UI. Your WebUI frame will be in an `iframe` inside the `frame-hell` container. You can also switch to the console context of your frame by using the dropdown at the top left of the console and selecting the context with the name of your mod.

## Using Frostbite textures

The WebUI can also access some Frostbite textures as images directly from HTML. To use a Frostbite texture, find its asset name (eg. `Textures/Some/Texture`) and then use it as a url with the `fb://` prefix. For example, you would use it with an `img` tag as such:

```html
<img src="fb://Textures/Some/Texture" />
```

Keep in mind that not all texture types are supported and most textures will not be available until the level has loaded, so make sure to display them at an appropriate time.

## Making your UI responsive

The general rules for web responsiveness don't really apply to game UIs. While websites are supposed to maintain the sizing of the content and adapt it to the size of the screen, game UIs must scale the entire content based on the window's resolution. An easy way to achieve this in web terms is to use relative size units such as `vh`. 

For example, the VU main menu is fully responsive with a minimum expected aspect ratio of `4:3`. This means that all the content of the UI can fit within a `4:3` box and scale appropriately to wider aspect ratios. The menu was initially designed for 1080p screens but has been made responsive by making all size units relative to the view's height. That means that the taller the window is, the bigger the content is, while screen width doesn't affect it (for example in Ultrawide or multi-monitor setups). To calculate the sizes in `vh` units, the original pixel size was taken as a percentage of `1080` (the design resolution). For example, a box of width `200px` and height `400px` will be made to use a width of `((200 / 1080) * 100)vh` (= `18.51851851851852vh`) and a height of `((400 / 1080) * 100)vh` (= `37.03703703703704vh`).

By using relative sizing for everything, you can very easily make your UI responsive and able to accomodate different screen sizes and aspect ratios.