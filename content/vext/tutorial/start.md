---
title: Getting Started
---

You will need to have downloaded a server key from the [Venice Unleashed Keys](https://veniceunleashed.net) website.

For starters, we will call the Instance Root, the location of wherever your server instance is. If you are doing this on a non-headless setup, the location will default to

> \<DriveLetter\>:\\Users\\\<UserName\>\\Documents\\Battlefield 3\\Server

You will need to take the server.key that you received from the Venice Unleashed keys site and put it in this directory.

You will now need to create 2 folders: Admin and Logs, casing is important.

Navigate inside to the Admin folder and create 3 files, BanList.txt, MapList.txt, Startup.txt and ModList.txt

Now create a folder named: Mods

When you're done the folder structure should look like this

    / Admin /
        / Mods /
        / BanList.txt
        / MapList.txt
        / ModList.txt
        / Startup.txt 
    / Logs /
    / server.key

Open Startup.txt for editing with your favorite editor (ex. notepad, notepad++) and add the below to the contents. See Battlefield 3 Server Administration guide for more information.

You will need to change the server name and admin password before RCON will work

    admin.password supersecret
    vars.serverName "My Example Server"

Save and close the file

Start the server server using the -server -dedicated parameters

    vu.exe -server -dedicated

## Mod Layout

    / Mods /
        / ExampleMod /
            / ext /
                / Client /
                    / __init__.lua
                / Server /
                    / __init__.lua
                / Shared /
            / mod.json
