---
title: Configuring your server
description: Details on how to configure and tweak your VU server.
readingTime: true
weight: 4
---

Configuring your VU dedicated server consists of creating various configuration files and / or passing different launch arguments to the VU executable, as explained below.

## The server instance directory

The server instance directory is where all the configuration files and mods of a server are placed in. On Windows the server instance directory will be under `My Documents/Battlefield 3/Server` by default. On Linux and other platforms you'll have to specify it manually using the `-serverInstancePath` launch argument, as seen below (where `<path>` is the path to the instance directory):

```
vu.exe -serverInstancePath <path> -server -dedicated
```

You can also use that parameter to host multiple servers on a single machine (on all platforms), each with its own directory (more on that below).

## Configuration files

Various configuration files are used to control things such as server settings, map rotation, and what mods to load. These files are placed inside a folder named `Admin`, inside the server instance directory. The most important files are `MapList.txt`, `Startup.txt`, and `ModList.txt` which we'll explain in more detail below.

In general, the server instance directory structure should look something like this:

```
/ server.key
/ Admin /
    / MapList.txt
    / Startup.txt
    / ModList.txt
```

When creating these files, ensure that you don't add an additional file extension (f.e. `ModList.txt.txt` with file name extensions enabled).
If you are a server provider, it's usually a good idea to provide remote access to the `Admin` directory to the server administrator.

### `MapList.txt`

This file defines the map rotation of the server. This means that it tells the server which map to load first and on which gamemode, how many rounds to run, and what's the next map to load once the game ends. Every map is specified in a new line in the following format:

```
MapID GamemodeID Rounds
```

For example, a `MapList.txt` file which loads `Operation Metro` in `Conquest 64` for `1` round would look like this:

```
MP_Subway ConquestLarge0 1
```

Following the same pattern, if we wanted the server to run `Damavand Peak` in `Team Deathmatch` for `2` rounds after the `Operation Metro` round ends, the file would look like this:

```
MP_Subway ConquestLarge0 1
MP_013 TeamDeathMatch0 2
```

Now, you may be wondering how we know that the `Operation Metro` map corresponds to `MP_Subway` and that the `Conquest 64` gamemode corresponds to `ConquestLarge0`. The answer is that every map and gamemode has its own ID. You can find a full list of the maps and gamemodes and their respective IDs [here](/hosting/maps).

### `Startup.txt`

The `Startup.txt` file is used to configure to the server upon startup. This is done by using specific configuration variables followed by a relevant value. As with the `MapList.txt` file, each variable is specified in a new line. Below, we have an example on how to set the server name and enable friendly fire:

```
vars.serverName "My incredible VU server"
vars.friendlyFire true
```

If you wanted to password-protect your server, you'd add the following line, replacing `<password>` with a password of your choice:

```
vars.gamePassword "<password>"
```

For a full list of configuration variables and commands refer to [this page](/hosting/commands).

### `ModList.txt`

This file is used to specify what mods should be loaded by the server. As with all the other configuration files, each mod is specified in a new line. For more information about the `ModList.txt` file and loading mods on your server, refer to [this page](/hosting/mods).

## Launch arguments

Some things cannot be configured using only [configuration commands](/hosting/commands). Instead, specific launch arguments must be used when launching the VU server. We've already seen one of them above: the `-serverInstancePath` argument, which can be used to specify the path to the server instance directory, but there are several more. We'll touch on some of the important ones below. For a full listing you can refer to [this page](/general/args/#server-arguments).

### Running in high frequency mode

VU allows server owners to run their servers in a higher update frequency than normal. This results in more responsive gameplay, but also requires better hardware to run. There are two high frequency modes: 60Hz and 120Hz. You can specify which one you want your server to use using the launch arguments seen below:

#### 60Hz

```
vu.exe -server -dedicated -high60
```

#### 120Hz

```
vu.exe -server -dedicated -high120
```

### Running multiple servers

You can run multiple VU dedicated servers on a single computer. To do so, you simply need to create a separate server instance directory and use a different server key for each one. You can then specify the path to the server instance directory when launching the various servers as seen below (where `<path>` is the path to the server instance directory). 

You will also need to specify the ports on which the servers will listen for network connections. By default, VU servers will listen for connections on UDP ports `25200` and `7948`. For each server instance you plan to run on the same computer, you will have to use different ports.

```
vu.exe -server -dedicated -serverInstancePath <path> -listen 0.0.0.0:25201 -mHarmonyPort 7949
```

This will make it so the server will listen on ports `25201` and `7949`. You'll also have to make sure that those ports are properly forwarded and unblocked by your firewall.

---

Next up, see how to [remotely manage your server](/hosting/rcon).
