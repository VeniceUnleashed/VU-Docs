---
title: Getting Started
---
## Install
Download and install Venice Unleashed from the [downloads](https://veniceunleashed.net/downloads) page.
The installation directory defaults to `%localappdata%\VeniceUnleashed\client`

## Setting up a server
__You will need a server key. Grab one from the [Venice Unleashed Keys](https://veniceunleashed.net) page.__

Start by creating your server configuration directory. We refer to this as the `Server Instance Root Directory`.
On Windows, this defaults to:

> \<DriveLetter\>:\\Users\\\<UserName\>\\Documents\\Battlefield 3\\Server

Place the server.key file you downloaded into this directory.
Create and add these 2 folders to the directory: `Admin` and `Logs` (Case-sensitive).

Navigate inside the Admin folder and create 4 empty files, BanList.txt, MapList.txt, Startup.txt and ModList.txt
Now create a folder named: Mods

The final folder structure should look like this

    / Admin /
        / Mods /
            / ExampleMod
        / BanList.txt
        / MapList.txt
        / ModList.txt
        / Startup.txt 
    / Logs /
    / server.key

- Open Startup.txt for with your favorite text editor (ex. notepad) and add the name and password configuration variables: 

    admin.password "ChangeThisPassword"
    vars.serverName "My Example Server"

See the [Server Administration guide](#) for additional configuration variables.

## Running a server
If no level is specified in MapList.txt, the server will load `MP_Subway ConquestLarge0` by default

### With GUI
You can start a server using these launch parameters:

    vu.exe -server -dedicated

This will launch a server console showing the server log and additional information. 

### Headless
You cannot copy (ctrl+c) from the server console GUI, so you might want to launch it in headless mode instead.
You can do this by launching `vu.com` instead of `vu.exe`, or by using the `-headless` launch option.

    vu.com -server -dedicated -headless

This will launch a command prompt showing the server console output.
__If you mark text in the command prompt, the server will freeze. This is standard Windows behaviour.__
It will resume operation once you deselect.

## Using mods
You can download some example mods from the [VU-Mods repo on github](https://github.com/EmulatorNexus/VU-Mods/)

Extract the mod into the `Mods` directory, located at `Server/Admin/Mods`.
If you grab it from github, the directory name could be something like `ExampleMod-Master`, so rename it to just `ExampleMod`  
The mods directory should look something like this now.

    / Mods /
        / ExampleMod /
            / ext /
                / Client /
                    / __init__.lua
                / Server /
                    / __init__.lua
                / Shared /
                    / __init__.lua (optional)
            / mod.json
Finally, add the mod to ModList.txt. The name should be the same as the folder name.
Here's an example of ModList.txt:

    ExampleMod
    MapEditor
    SuperSoldier
    
## Port Forwarding / Connecting to your server
Before you can connect to your server, you will need to port-forward these ports:

    mHarmony Default: 7948 | Type: UDP
    Game Default: 25200 | Type: UDP

If you want to use RCON from outside the local network, you'll need to port-forward that as well.

    RCON Default: 47200 | Type: TCP
    
How you port-forward differentiates from router to router, so google how to do it for your router model.

### Example
You can download an example server configuration from [here](#). Extract it into the server instance root directory. 
