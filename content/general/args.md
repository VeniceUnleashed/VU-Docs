---
title: Launch arguments
description: A full listing of all supported launch arguments for VU clients and servers.
weight: 3
---

There are several launch arguments you can pass to the VU executable to enable different features and modify the client / server behavior. See below for a full listing of all available arguments.


## Common arguments

These arguments can be used when running a VU server or client.

---

> `-gamepath <path>`

Used to explicitly specify the Battlefield 3 installation directory.

---

> `-perftrace`

Writes a performance profile to `perftrace-[server|client].csv`.

---

> `-env [prod|dev]`

Specifies the Zeus environment to connect to. Defaults to `prod`.

---

> `-updateBranch [prod|dev]`

Specifies the update branch to fetch updates from. Defaults to whatever `-env` is set to.

---

> `-tracedc`

Traces DataContainer usage in VEXT and prints any dangling DCs during level destuction.

---

> `-cacert <path>`

Sets a custom CA certificate bundle to use for SSL verification.

---

> `-activate -o_mail <email> -o_pass <pass>`

Activates BF3 on the current machine using the specified Origin credentials.

---

> `-console`

Allocates an external console window for debug logging.

---

> `-debuglog`
 
Saves logging output to a file in the logs folder. For servers, this folder will be in the server instance directory. For clients, it will be in the VU AppData installation folder.

---

> `-trace`

Enables verbose logging.

---

> `-vextdebug <host:port>`

Enables VEXT remote debugging, connecting to the debugger at the specified `host:port` (**this does not currently work**). It also prevents the server / client connections from timing out and makes it so compiled VEXT modules sent to the client contain debug symbols.

## Client arguments

These arguments only have an effect on the VU client.

---

> `-dwebui`

Enables WebUI debugging at `http://localhost:8884`.

---

> `vu://join/<server-guid>`

Connect to server with given GUID (without dashes). This is the ID of a [server key](/hosting/prereq/#generating-server-keys). You can also use this URL as a hyperlink on a website to join a server.

---

> `vu://spectate/<server-guid>`

Connect as spectator to server with given GUID (without dashes). This is the ID of a [server key](/hosting/prereq/#generating-server-keys). You can also use this URL as a hyperlink to join a server as a spectator.

## Server arguments

These arguments only have an effect on the VU server.

---

> `-server -dedicated`

The two required arguments for running a VU server.

---

> `-high60`

Sets the VU server frequency to 60Hz.

---

> `-high120`
 
Sets the VU server frequency to 120Hz.

---

> `-headless`

Runs the VU server in headless mode (without creating any windows).

---

> `-serverInstancePath <path>`

Sets the server instance path (where the server configuration, logs, and mods are stored) for the VU server.

---

> `-highResTerrain`

Enables high resolution terrain. Useful for extending maps beyond their original play area.

---

> `-disableTerrainInterp`
 
Disables interpolation between different terrain LODs.

---

> `-skipChecksum`

Disables level checksum validation on client connection.

---

> `-listen <host:port>`
 
Sets the host and port the VU server should listen for connections on. Defaults to `0.0.0.0:25200`.

---

> `-mHarmonyPort <port>`
 
Sets the port the VU server should listen for MonitoredHarmony connections. Defaults to `7948`.

---

> `-RemoteAdminPort <host:port>`
 
Sets the host and port the VU server should listen for RCON connections. Defaults to `0.0.0.0:47200`.

---

> `-unlisted`

Makes the server not show up in the server list. Unlisted servers can only be joined by the `connect` console command or via the `vu://join/server-id` url scheme, which can also be added as a launch argument to `vu.exe` to auto-join as soon as the client loads.

---

> `-joinaddr <ip>`

Specifies the IP address clients should connect to in order to join this server. Only IPv4 addresses are supported. If you don't specify this, the backend will attempt to automatically detect the server's IP address.