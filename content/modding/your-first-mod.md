---
title: Your first mod
description: A detailed tutorial on creating your first VU mod.
weight: 2
---

Before you get started on your first mod make sure you've read the [modding overview](/modding) and understand how [mods are structured](/modding/structure). You will also need to set up a VU dedicated server locally by following the server hosting tutorial.

## Creating your mod folders

Start by opening your server instance folder (typically `My Documents/Battlefield 3/Server`) and creating an `Admin` directory if it doesn't already exist. Then, inside that directory, create another one named `Mods`, and inside that create another one named `my-first-mod` (you can also call this whatever else you want). Inside that folder create a new file and name it `mod.json`. We'll explain what to put in that file in a bit. Then, back inside the `Admin` folder, create a new file called `ModList.txt`, open it with a text editor, write `my-first-mod` (or whatever you named your mod folder) in the first line, save it and close it. Overall, your server instance directory structure should look something like this:

```
/Server
    /Admin
        /ModList.txt
        /Mods
            /my-first-mod
                /mod.json
```

## The mod.json file

As explained previously, the `mod.json` file (aka the mod descriptor file) is one of the most important files of a mod. Open it in a text editor and write the following:

```json
{
    "Name": "My first mod",
    "Description": "This is my first VU mod!",
    "Version": "1.0.0",
    "HasVeniceEXT": true,
    "Dependencies": {
        "veniceext": "^1.0.0"
    }
}
```

Let's explain what some of these are. The `Name` and `Description` fields should be fairly self-explanatory. They represent the human-readable name and description of your mod. You should change those to better describe your mod. The `Version` field is the version of your mod. The version number must follow the [semver](https://semver.org) specification. Other mods that depend on your mod can use the version number to determine compatibility. `HasVeniceEXT` tells VU that this mod contains VeniceEXT scripts, and that it must subsequently set up the VeniceEXT scripting engine when loading it (we'll get more into that in a bit). Finally, the `Dependencies` field represents other mods this mod depends in. In this case, we only have one dependency to the VeniceEXT engine itself (which is also versioned following semver semantics). The `^` symbol means that this mod depends on major version `1` and any greater or equal minor or patch version (so `1.X.Y`, where `X` and `Y` >= 0).

Here are all the fields that can be present inside the mod descriptor:

### `Name`

The human-readable name of the mod.

### `Description`

The human-readable description of the mod.

### `Version`

The version of the mod (following the [semver](https://semver.org) specification). For example `"1.2.3"`.

### `Authors`

An array with the name of the mod authors. For example `[ "NoFaTe" ]`.

### `URL`

A url to the mod's website, repository, or a place where a user can find mod updates or additional information.

### `HasVeniceEXT`

A boolean representing whether this mod contains VeniceEXT scripts that need to be executed. 

### `HasWebUI`

A boolean representing whether this mod contains a custom WebUI bundle (`ui.vuic`) that must be sent to joining players.

### `Dependencies`

A key => value mapping of other mods this mod depends on. The key is the name of the mod and the value is a version matching expression. The version matching expression can follow several patterns:

- Exact version: `"1.0.0"`. This matches mods with this specific version.
- Exact major: `"^1.0.0"`. This matches mods with this specific major version and any greater or equal minor and patch versions (`1.X.Y`, where `Y` >= 0).
- Exact major and minor: `~1.2.3`. This matches mods with this specific major and minor version and any greater or equal patch version (`1.2.X` where `X` >= 3).
- Greater than: `">1.2.3"`: This matches mods with any version greater than `1.2.3`, so `1.2.4` or greater.
- Greater or equal: `">=1.2.3`. This matches mods with a version greater or equal to what's specified.

There's a built-in dependency named `veniceext`, which refers to the VeniceEXT engine itself. The engine is versioned, and mods can define a dependency to it to specify compatibility. For a list of VeniceEXT versions and their associated changes refer to the [VeniceEXT changelog](/vext/changelog).

### `Tags`

An array of strings that will be shown in the server list when this mod is loaded and can be used by players to discover servers running specific types of mods. For example, if you're creating a role-playing mod you could add an `rp` tag, if you're creating a realism-focused mod you could add `realism`, etc. Tags can only contain lower-case latin characters, numbers, and dashes (`-`). The purpose of tags is discoverability so avoid adding tags that would be irrelevant to players looking for a specific type of server.

## Creating your first script

It's now time to create your first script. Inside your mod folder create a new folder named `ext` (this folder should be inside the same folder your `mod.json` file is). Inside that folder, create another folder named `server` and in that folder create a new file named `__init__.lua`. Open this file with your text editor and type in the following:

```lua
print('Hello world!')
```

Save the file and close it. The reason we placed this inside the `server` folder is because we only want this script to be executed on the server. In the next step we'll create something more complicated that works across the server and the client.

## Running your mod

You should now be ready to run your first mod. To run it, simply start your VU dedicated server. Once the server loads, you should be able to see something like the following in the server log output:

```
[VeniceEXT] Loading VeniceEXT module 'my-first-mod'.
[VeniceEXT] [my-first-mod] Hello world!
[VeniceEXT] Successfully loaded VeniceEXT module 'my-first-mod'.
```

If you don't see these in your server window, make sure that you've correctly written the name of your mod folder inside the `ModList.txt` file and that this file is inside the `Admin` directory. If the `Hello world!` message shows up then congratulations, you have successfully created your first mod!

## Creating client and shared scripts

Now it's time to see how client and shared scripts work. As explained previously, `client` scripts will only be executed on joining clients, while `shared` scripts will be executed on both joining clients and the server. Let's create two new folders next to the `server` folder named `client` and `shared`. As before, create a new file in each of these folders named `__init__.lua`. Let's also create another file in the shared folder called `common.lua`. Put the following content inside the files:

### `shared/__init__.lua`

```lua
print('Hello from the shared world!')
```

### `shared/common.lua`

```lua
MyModVersion = '1.0.0'
```

### `client/__init__.lua`

```lua
require('__shared/common')

print('Hello dear client!')
print(MyModVersion)
```

### `server/__init__.lua`

```lua
require('__shared/common')

print('Hello world!')
print(MyModVersion)
```

This might seem a bit confusing at first, so let's explain what we're doing here. In the `shared/common.lua` file we're declaring a new global variable called `MyModVersion`. Then, from the client and server `__init__.lua` scripts, we're loading the `common.lua` script (using the `require()` directive), which makes it so its code gets executed and that variable gets declared. We then print this variable to the console. Also note that we're prefixing the required file path with `__shared`. This tells the VeniceEXT engine to look for that file inside the `Shared` folder (you can find more information about how requiring scripts works [here](/vext/guides/requiring-scripts)). You should now restart your server and also launch your VU client and join it. 

In the server console you should see something like this:

```
[VeniceEXT] Loading VeniceEXT module 'my-first-mod'.
[VeniceEXT] [my-first-mod] Hello from the shared world!
[VeniceEXT] [my-first-mod] Hello world!
[VeniceEXT] [my-first-mod] 1.0.0
[VeniceEXT] Successfully loaded VeniceEXT module 'my-first-mod'.
```

After joining the server, open the in-game console using the tilde key (`~`) and you should see the following:

```
[VeniceEXT] Loading VeniceEXT module 'my-first-mod'.
[VeniceEXT] [my-first-mod] Hello from the shared world!
[VeniceEXT] [my-first-mod] Hello dear client!
[VeniceEXT] [my-first-mod] 1.0.0
[VeniceEXT] Successfully loaded VeniceEXT module 'my-first-mod'.
```

---

This concludes the creation of your first mod. You should now be ready to create more complex mods. See the various different [VeniceEXT modding guides here](/vext/guides). You should also read up a bit on the Lua programming language and experiment, as these guides assume some basic knowledge.