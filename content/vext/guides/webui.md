---
title: Interacting with the WebUI
description: Details on how to interact with the WebUI to provide rich UI experiences to your players.
readingTime: true
weight: 7
---

As we mentioned in the [custom UI creation tutorial](/modding/custom-ui/#communicating-with-veniceext), VeniceEXT scripts can communicate with the WebUI of your mod, and vice-versa. In this guide we'll go into a bit more detail about how that works and the ways you can interact between the two.

## Sending events from the WebUI

The first and most straight forward interaction between the WebUI and your VeniceEXT scripts is through events. WebUI gives you the ability to send VeniceEXT events, either to your own mod or to all loaded mods, as seen below:

```js
WebUI.Call('DispatchEvent', 'WebUIEvent', 'some event data');
```

The JavaScript code above will send an event with the name `WebUIEvent` and `some event data` as its data to all loaded mods. To only send an event to your own mods you must use `DispatchEventLocal`:

```js
WebUI.Call('DispatchEventLocal', 'WebUIEvent', 'some event data')
```

Then, from your VeniceEXT script you would listen to this event like so:

```lua
Events:Subscribe('WebUIEvent', function(data)
  print(data)
end)
```

When received, this would print `some event data`. 

### Sending data as JSON

One caveat to this system is that you can only specify one data parameter with your event, which means that in cases where you want to transmit multiple pieces of data this can be a problem. A common solution to this project is to encode your data as a JSON string and then parse it in VeniceEXT, as seen below:

```js
WebUI.Call('DispatchEvent', 'WebUIEvent', JSON.stringify({ x: "something", y: 123 }));
```

```lua
Events:Subscribe('WebUIEvent', function(data)
  local decodedData = json.decode(data)
  print(decodedData.x)
  print(decodedData.y)
end)
```

In the example above, we encode the `{ x: "something", y: 123 }` object to JSON and then on the VeniceEXT size we decode it back to a lua table using the built-in `json.decode` function. When this event is received, the script will print the following:

```
something
123
```

## Executing JavaScript from VeniceEXT

Now that we know how the WebUI can interact with our scripts let's look at the opposite. The way our scripts can talk to the WebUI is by sending JavaScript code to be executed on the WebUI side by using the [ExecuteJS](/vext/ref/client/library/webui/#executejs) method of the [WebUI](/vext/ref/client/library/webui/) library, as seen below:

```lua
WebUI:ExecuteJS('console.log("Hello world!");')
```

The example above will execute the JavaScript code `console.log("Hello world!");` on the WebUI side, which will in turn print `Hello world!` to the WebUI console (not the in-game console, see [here](/modding/custom-ui/#debugging-your-ui) on information on how to access the WebUI console).

A common way to use this system is by defining global functions in your WebUI that VeniceEXT can call. For example, imagine we define a global function called `MyGlobalFunction` as seen below:

```js
window.MyGlobalFunction = function(data)
{
  console.log(data);
};
```

We could then call that function from VeniceEXT like so:

```lua
WebUI:ExecuteJS('MyGlobalFunction("hello webui!");')
```

When this gets executed, the `MyGlobalFunction` function will get executed and `hello webui!` will be printed in the WebUI console.

### Passing complex data

As with the event example we showed above, there might be cases where we need to provide more complex data when calling WebUI JavaScript functions. To make that easier, we can form lua tables and then encode those tables as JSON, to then place into our JavaScript code, as seen below:

```js
window.MyGlobalFunction = function(data)
{
  console.log(data.x);
  console.log(data.y);
};
```

```lua
local data = {
  x = "something",
  y = 123,
}

local dataJson = json.encode(data)

WebUI:ExecuteJS('MyGlobalFunction(' .. dataJson .. ');')
```

In this example, we encode the `data` table to a JSON string using the built-in `json.encode` function and then we use it in our call to the `MyGlobalFunction` function. When this function gets executed, it will print the following in the WebUI console:

```
something
123
```

### Performance implications

Executing JavaScript can be fairly expensive, so it's recommended that you do it as little as possible as not to tank the game's performance. For UIs with dynamic real-time elements, it is recommended to limit your execution of JavaScript code to a maximum of 30 times per second. The less often, the better.
