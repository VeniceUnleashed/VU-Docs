---
title: Getting Started
---
## Install
Download and install Venice Unleashed from the [Downloads page](https://veniceunleashed.net/downloads)
The installation directory defaults to `%localappdata%\VeniceUnleashed\client`


### Example
You can download an example server instance from [here](#). Extract it into the server instance root directory. 

## Setting up a server
__You will a server key. Grab one from the [Venice Unleashed Keys](https://veniceunleashed.net) page.__

Start by creating your Server Instance Root Directory".
On Windows, this will default to:

> \<DriveLetter\>:\\Users\\\<UserName\>\\Documents\\Battlefield 3\\Server

Place the server.key file you downloaded into this directory.

Create and add these 2 folders to the directory: `Admin` and `Logs` (Case-sensitive).

Navigate inside the Admin folder and create 4 empty files, BanList.txt, MapList.txt, Startup.txt and ModList.txt
Now create a folder named: Mods

The final folder structure should look like this

    / Admin /
        / Mods /
        / BanList.txt
        / MapList.txt
        / ModList.txt
        / Startup.txt 
    / Logs /
    / server.key

Open Startup.txt for with your favorite text editor (ex. notepad) and add the name and password configuration variables: 

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

## Mod Layout

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
