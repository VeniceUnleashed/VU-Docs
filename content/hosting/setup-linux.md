---
title: Setting up a server on Linux
description: Instructions on how to set up a VU dedicated server on a Linux machine using Wine.
readingTime: true
weight: 3
---

This guide will help you setup and run a VU dedicated server on Linux using Wine. VU servers can also be ran on other platforms that Wine supports such as BSD and macOS, but this guide will focus specifically on a 64-bit Linux installation using the Ubuntu Server 18.04 distribution.

## Installing Wine

The first step is installing Wine. To do so, we'll simply follow the instructions for our operating system (in this case Ubuntu) found in [this page](https://wiki.winehq.org/Download). 

We first enable support for 32-bit packages using the command below:

```
sudo dpkg --add-architecture i386
```

On Ubuntu 18.04, Wine requires some additional packages that are not in the main Ubuntu or Wine repositories. For that reason we'll use the openSUSE repositories to install it. First, we'll add the repository:

```
cd /tmp
wget -nc https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/Debian_10/Release.key
sudo apt-key add Release.key
sudo apt-add-repository 'deb https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/xUbuntu_18.04/ ./'
``` 

Then, we'll update our local repository cache and install the stable version of Wine:

```
sudo apt update
sudo apt install --install-recommends -y winehq-stable
```

## Setting up a 32-bit Wine prefix

In order to be able to run the VU server we'll need to create a 32-bit Wine prefix. In this guide, we'll assume you don't know what that means and that you haven't used Wine before or plan on using it for anything else, so we'll create it as the default user Wine prefix. If you know what a Wine prefix is, feel free to create it at a different location and use it when running the rest of the setup steps below.

To create the prefix simply run the following command:

```
WINEARCH=win32 wine wineboot
```

If you're running this on a headless environment (i.e. a server with no GUI) you will get a few errors and warnings. You can safely ignore them.

## Getting Battlefield 3 and setting up the required folders

In order to be able to run the VU dedicated server you'll need the BF3 client files on your machine. The easiest way to get them would be to download the game via Origin on a Windows machine and then transfer them over to your Linux machine (using something like rsync or SCP). For the rest of this guide we'll assume that the BF3 files are located in the `~/bf3` folder (a folder named `bf3` inside your current user's home directory).

Next, we'll set up some folders for VU:

```
mkdir -p ~/vu/client
mkdir -p ~/vu/instance
```

The first folder (`~/vu/client`) is where we'll place the VU files. The second folder (`~/vu/instance`) will be the server instance directory. This is a directory containing configuration files, mods, and other necessary files to run your server.

## Installing required packages

Before we can set up VU we'll need to install a couple of extra package which will help us install some dependencies (namely the Visual C++ 2008 redistributable) and extract the VU package, as seen below:

```
sudo apt install -y xvfb unzip
cd /tmp
wget -nc https://download.microsoft.com/download/5/D/8/5D8C65CB-C849-4025-8E95-C3966CAFD8AE/vcredist_x86.exe
xvfb-run wine /tmp/vcredist_x86.exe /q
```

You might see some errors or warnings when running the final command. You can safely ignore them.

You will also need to install the i386 version of ncurses if it is not already installed. You can do this as seen below:

```
sudo apt-get install libncurses5:i386 libncurses6:i386
```

## Downloading and setting up VU

We must now download the VU files and extract them inside the `~/vu/client` folder:

```
cd ~/vu/client
wget https://veniceunleashed.net/files/vu.zip
unzip vu.zip
rm vu.zip
```

Then, we must transfer over the server key file we generated and downloaded [previously](/hosting/prereq), place it inside the `~/vu/instance` directory, and name it `server.key`.

## Activating the game

The final step before being able to run the VU server is to activate the game. This process requires an Origin account which owns BF3. Run the command below, replacing `<email>` with your Origin account e-mail and `<password>` with your account password:

```
wine ~/vu/client/vu.com -gamepath ~/bf3 -activate -o_mail <email> -o_pass <password>
```

You'll see a bunch of `fixme` warnings printed in your terminal. You can safely ignore these. As soon as you see the `Your game has been successfully activated!` message you're good to go!

## Running a VU server

You are now ready to run a VU server. To do so, use the command below:

```
wine ~/vu/client/vu.com -gamepath ~/bf3 -serverInstancePath "$(winepath -w ~/vu/instance)" -server -dedicated
```

> In some cases, you might encounter an issue in the serverInstancePath processing, resulting on a unreadable server.key error printing the following log :
>`[error] Server key file not found or invalid. Shutting down.`
> The work around would be to use the windows path instead of an absolute path for serverInstancePath, you can get it by running `winepath -w <instance_directory_path>` or use the command below :

```
wine ~/vu/client/vu.com -gamepath ~/bf3 -serverInstancePath "$(winepath -w ~/vu/instance)" -server -dedicated
```

Your server will start up and will soon be joinable by players. It is recommended to restart your server every now and then so you can receive updates and fixes.

## Port forwarding

Before users can join your server you'll need to make sure that specific ports are forwarded in your router (if you're behind NAT) and unblocked by your firewall. By default, a VU server will require the following ports to be open:

| Port | Protocol | Description |
| ---- | -------- | ----------- |
| `7948` | UDP | Monitored Harmony, the VU networking layer. |
| `25200` | UDP | Frostbite networking layer. |
| `47200` | TCP | Remote administration protocol (RCON). |

---

Next up, see more details on how to [configure and maintain your server](/hosting/config).
