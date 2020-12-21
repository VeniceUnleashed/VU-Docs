---
title: Troubleshooting & FAQ
description: VU troubleshooting and Frequently Asked Questions.
weight: 3
---

<!-- omit in toc -->
## Frequenty Asked Questions (FAQ)

- [I get an error about vu-core.dll](#i-get-an-error-about-vu-coredll)
- [I get a black screen / loading screen when launching VU](#i-get-a-black-screen--loading-screen-when-launching-vu)
- [Nothing happens when I launch VU](#nothing-happens-when-i-launch-vu)
- [I get an EA activation prompt when launching VU](#i-get-an-ea-activation-prompt-when-launching-vu)
- [I get an "An error occurred while communicating with Origin" error while linking my account](#i-get-an-an-error-occurred-while-communicating-with-origin-error-while-linking-my-account)
- [I get returned to the main menu after joining a server](#i-get-returned-to-the-main-menu-after-joining-a-server)
- [I get an "Could not locate your Battlefield 3 installation directory" error when launching VU](#i-get-an-could-not-locate-your-battlefield-3-installation-directory-error-when-launching-vu)
- [Do I need to own Battlefield 3 to use this?](#do-i-need-to-own-battlefield-3-to-use-this)
- [Will I get banned for using this?](#will-i-get-banned-for-using-this)
- [Are my Battlelog stats transferred over?](#are-my-battlelog-stats-transferred-over)
- [Players cannot connect to my VU server](#players-cannot-connect-to-my-vu-server)
- [My server crashes soon after startup](#my-server-crashes-soon-after-startup)
- [Can I run multiple instances of the VU client?](#can-i-run-multiple-instances-of-the-vu-client)

### I get an error about vu-core.dll

If you get an error saying `Failed to load the main VU module (vu-core.dll).` you need to check if your anti-virus is blocking VU. Make sure to whitelist all VU files or the entire VU directory (which should be at `%LocalAppData%/VeniceUnleashed`). If that doesn't help, try downloading the latest VU installer and installing VU again.

### I get a black screen / loading screen when launching VU

If you're on Windows 7 and you're getting a black screen or a black screen with a loading indicator, you need to install the [KB2670838 update package](https://support.microsoft.com/en-gb/help/2670838/platform-update-for-windows-7-sp1-and-windows-server-2008-r2-sp1). After installing this update VU should work as intended.

### Nothing happens when I launch VU

If nothing happens when you launch VU, try validating your game files via Origin and launching the vanilla game via Battlelog at least once (you can launch either singleplayer or multiplayer). You should also check if your anti-virus is blocking it. You can also try downloading the latest version of VU and re-installing it.

### I get an EA activation prompt when launching VU

This prompt may appear after major Windows Updates or hardware changes on your computer, and is part of Battlefield 3's DRM system. Simply fill out your Origin account credentials and follow the prompts to activate your game. Alternatively, you can launch the vanilla game via Battlelog or run the VU executable with the following launch arguments (where `<email>` is your Origin account e-mail and `<password>` is your password):

> `vu.exe -activate -o_mail <email> -o_pass <password>`

### I get an "An error occurred while communicating with Origin" error while linking my account

First, make sure that you are logged into Origin fully and retry. If that doesn't help, close VU, restart Origin, and try again. If that still doesn't help, try restarting your computer.

### I get returned to the main menu after joining a server

If you get returned to the main menu after joining a server it could mean that there's a discrepency between your local files and the server files, so the first thing you should try is validating your game files. If that doesn't help, it probably means that the server is running a mod that causes this issue, so the only thing you can do is contacting the server admin for support.

### I get an "Could not locate your Battlefield 3 installation directory" error when launching VU

This means that VU cannot find where Battlefield 3 is installed on your system. To fix this, simply validate your game files via Origin and launch the vanilla game via Battlelog at least once. If you have transferred your game files over another computer or you're running this on a machine that can't run Origin, you can manually specify the game's installation directory by using the `-gamepath` launch argument, as seen below, where `<path>` is the path to the BF3 directory:

> `vu.exe -gamepath <path>`

### Do I need to own Battlefield 3 to use this?

You need a legit, licensed, and up-to-date version of BF3 installed in order to use VU and you will also be required to link your Origin account with your VU account the first time you launch it, so we can verify your ownership of the game. VU does not and never will work with cracked or pirated copies.

### Will I get banned for using this?

No. VU functions separately from vanilla BF3 and does not modify any game files. That means that you can just launch BF3 like you normally would through Battlelog and it's like VU was never there. Any changes to your game data are performed at your discretion with the use of third party mod tools. 

### Are my Battlelog stats transferred over?

Your VU profile is independent from your Battlelog profile. There's no progression and everything is unlocked for everyone by default.

### Players cannot connect to my VU server

Make sure that connections to the VU server are not being blocked by your firewall or antivirus and that the following ports are forwarded to the computer running the server:


| Port | Protocol | Description |
| ---- | -------- | ----------- |
| `7948` | UDP | Monitored Harmony, the VU networking layer. |
| `25200` | UDP | Frostbite networking layer. |
| `47200` | TCP | Remote administration protocol (RCON). |

### My server crashes soon after startup

The first thing you should try is validating your game files via Origin, as corrupted or missing files could result in crashes. Then, you should check the mods you have installed on your server, as they could be the ones causing crashes. Try disabling them one-by-one until you find the outlier. 

### Can I run multiple instances of the VU client?

Yes, but keep in mind that you'll need a separate account (with an Origin account linked) for each instance. 