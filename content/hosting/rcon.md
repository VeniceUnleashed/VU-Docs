---
title: Remotely managing a server
description: Information on how to manage your VU dedicated server remotely.
readingTime: true
weight: 5
---

VU servers can be remotely managed similarly to vanilla BF3 servers via the Remote Administration Protocol (commonly refered to as RCON). Through it, you can manage players, retrieve server information, receive game events, and adjust configuration on the fly. 

There exist several tools that speak this protocol and will let you talk to your server, such as [Procon](https://myrcon.net/files/file/29-procon-client/). If you wish to create your own tools, you can find documentation on the procotol and how it works [here](https://github.com/dcodeIO/BattleCon/blob/master/eadocs/BF3/BF3%20PC%20Server%20Remote%20Administration%20Protocol.pdf).

## Setting a remote management password

Before you can remotely manage your server you must set a remote management password. To do so, simply open your server's `Startup.txt` file and add the following line, replacing `<password>` with a password of your choice:

```
admin.password "<password>"
```

Then, restart your server, or start it if it wasn't already running. You should now be able to connect to it using an RCON tool (like [Procon](https://myrcon.net/files/file/29-procon-client/)) by specifying its IP and port (for example IP `127.0.0.1` and port `47200` if you're connecting to it locally) and the password you put in your `Startup.txt` file. Through the RCON tool you'll be able to manage various server settings and execute [commands](/hosting/commands).

## Changing the RCON host / port

If you're running multiple servers or want the RCON interface to be available over a different network or port, you can use the `-RemoteAdminPort` launch argument on your server, as seen below:

```
vu.exe -server -dedicated -RemoteAdminPort 0.0.0.0:47201
```

The example above will make the RCON interface listen on all network interfaces (`0.0.0.0`) on port `47201`.

---

Next up, see how to [set up and use mods on your server](/hosting/mods).
