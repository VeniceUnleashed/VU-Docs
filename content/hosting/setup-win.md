---
title: Setting up a server on Windows
weight: 2
---

## Downloading & installing VU

First, download the latest version of VU from the [downloads page](https://veniceunleashed.net/downloads). By default, the installer will place VU in `%LocalAppData%\VeniceUnleashed\client`. If you don't wish to use the installer, you can download the ZIP version of the client and extract it to a folder of your choice. Just make sure that the user you will be running your server under has write permissions to that folder.

## Setting up the VU server

Each server instance you wish to run must have its own server instance directory. This is a directory containing configuration files, mods, and other necessary files to run your server. By default, this folder will be in `My Documents\Battlefield 3\Server` (for more information on how to set up multiple server instances refer to the [server configuration guide](/hosting/config)).

If this folder doesn't exist, you will need to create it. Remember the server key you generated and downloaded [previously](/hosting/prereq)? Place it in the `Server` folder and name it `server.key`. You should now be ready to start a VU server.

## Running a VU server

If you installed VU using the installer package then some shortcuts should have been added to your start menu from which you can start the VU server. Just search for `VU Server` in your start menu and pick one of the `30`, `60`, and `120Hz` variants. For more information on the difference of these variants check the [server configuration guide](/hosting/config).

If you didn't use the installer package or want more control on how to run your server, you can launch it manually in one of two different modes:

### GUI mode

GUI mode is the default operating mode for the VU server, and will create a new window with server output and other useful information. To start the server in GUI mode you need to run the VU executable (`vu.exe`, present in the VU installation directory) with some specific launch arguments:

> `vu.exe -server -dedicated`

### Headless mode

In headless mode, the server essentially runs without GUI and instead uses a standard console window (or attaches to an existing one). There are two ways to run the VU server in headless mode, either by passing the `-headless` launch argument or using the `vu.com` executable:

> `vu.exe -server -dedicated -headless`

> `vu.com -server -dedicated`

## Activating the game

If when running the VU server you get an EA activation prompt or if nothing happens, then you need to activate your game. If you get the EA prompt, simply fill out your Origin credentials and follow the prompts. If activation using the EA prompt fails or if nothing shows up, you can alternatively activate your game by launching the VU executable with some specific launch arguments:

> `vu.exe -activate -o_mail <email> -o_pass <password>`

Where `<email>` is your Origin account e-mail address and `<password>` is your password.

Alternatively, you can launch vanilla Battlefield 3 from Battlelog (multiplayer or singleplayer) and your game will be automatically activated. Keep in mind that you might be required to re-activate your game after major Windows Updates or hardware changes.

## Port forwarding

Before users can join your server you'll need to make sure that specific ports are forwarded in your router (if you're behind NAT) and unblocked by your firewall. By default, a VU server will require the following ports to be open:

| Port | Protocol | Description |
| ---- | -------- | ----------- |
| `7948` | UDP | Monitored Harmony, the VU networking layer. |
| `25200` | UDP | Frostbite networking layer. |
| `47200` | TCP | Remote administration protocol (RCON). |

---

Next up, see more details on how to [configure and maintain your server](/hosting/config).