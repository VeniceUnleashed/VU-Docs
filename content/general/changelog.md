---
title: Changelog
description: A list of changes for every VU update.
weight: 4
---

Below you can find a full list of changes to VU, corresponding to every VU update, with the newest update at the top. Updates that have the `ONLY IN DEV` tag next to them are currently only available in the `dev` branch.

{{% changeset 17487 "18/01/2021" %}}

- Fix an issue with the client trying to connect to an empty IP when joining a local server ([#588](https://github.com/EmulatorNexus/VeniceUnleashed/issues/588)).

{{% changeset 17485 "18/01/2021" %}}

- Fix an issue where `127.0.0.1` would be used when joining local servers ([#566](https://github.com/EmulatorNexus/VeniceUnleashed/issues/566)).
- Fix an issue where players would get dropped from a server when connection to Zeus was lost.
- Server browser pings should now more accurately represent network latency + processing delay.
- Add two new read-only RCON variables: [vu.Fps](/hosting/commands/#vufps) and [vu.FpsMa](/hosting/commands/#vufpsma).
- Fix a crash / black screen after soldier creation failed.
- Add a new [-joinhost](/general/args/#server-arguments) launch argument which allows servers to specify a hostname to be joined by, bypassing NAT detection.
- Add bad server performance indicators to the server browser (servers with less than `freq-hz * 1.1` fps).
- Add a warning when joining a server with performance issues.
- Improve error messages when linking an Origin account.
- Improve error messages when creating, deleting, or logging in with a soldier.
- Update bundled CA certificates ([#579](https://github.com/EmulatorNexus/VeniceUnleashed/issues/579)).
- VeniceEXT was updated to version `1.1.0` ([changelog](/vext/changelog/#1_1_0)).

{{% changeset 17394 "15/01/2021" %}}

- Fix a crash in `RCON:RegisterCommand`.

{{% changeset 17384 "22/12/2020" %}}

- Add a scrollbar to the server browser
- Increase scrolling speed of the server browser
- Remove team player limits from all gamemodes, allowing more than 64 players on servers
- Add a specific error message for busy servers when connecting to Zeus

{{% changeset 17380 "21/12/2020" %}}

- Fix a handle leak when running multiple VU clients.
- Reduce idle CPU usage of VU when running multiple clients.
- Re-introduce the `-noUpdate` launch argument for servers.

{{% changeset 17370 "21/12/2020" %}}

- Fix a UI crash after a failed backend reconnection.
- Improve backend connection error messages.
- Add support for displaying global messages.

{{% changeset 17368 "20/12/2020" %}}

- VeniceEXT was updated to version `1.0.8` ([changelog](/vext/changelog/#1_0_8)).

{{% changeset 17358 "20/12/2020" %}}

- Introduce a new compact listing view for the server browser.
- Improve visibility of the server listing headings (filters, sorters, etc.).
- Change default squad size to 4.
- Fix a UI crash after a failed login attempt.
- VeniceEXT was updated to version `1.0.7` ([changelog](/vext/changelog/#1_0_7)).

{{% changeset 17353 "19/12/2020" %}}

- VeniceEXT was updated to version `1.0.6` ([changelog](/vext/changelog/#1_0_6)).
- Update to Lua 5.4.2.

{{% changeset 17349 "18/12/2020" %}}

- VeniceEXT was updated to version `1.0.5` ([changelog](/vext/changelog/#1_0_5)).

{{% changeset 17345 "11/12/2020" %}}

- VeniceEXT was updated to version `1.0.4` ([changelog](/vext/changelog/#1_0_4)).

{{% changeset 17343 "9/12/2020" %}}

- Fix floating point issue with VeniceEXT client KillCounterEntity.

{{% changeset 17342 "9/12/2020" %}}

- VeniceEXT was updated to version `1.0.3` ([changelog](/vext/changelog/#1_0_3)).

{{% changeset 17336 "8/12/2020" %}}

- Fix RCON crashes across the entire remote interface ([#512](https://github.com/EmulatorNexus/VeniceUnleashed/issues/512)).
- Add support for exposing client KillCounterEntity to VeniceEXT.

{{% changeset 17335 "5/12/2020" %}}

- Hotpatch crashes caused by the havok debris system ([#542](https://github.com/EmulatorNexus/VeniceUnleashed/issues/542)).
- Fix VeniceEXT version number ([#550](https://github.com/EmulatorNexus/VeniceUnleashed/issues/550)).

{{% changeset 17316 "21/11/2020" %}}

- Fix a regression with the lua engine that caused crashes on level load ([#543](https://github.com/EmulatorNexus/VeniceUnleashed/issues/543)).
- Minor performance improvements and bugfixes.
- VeniceEXT was updated to version `1.0.2` ([changelog](/vext/changelog/#1_0_2)).

{{% changeset 17307 "13/11/2020" %}}

- Rework frostbite animation code to allow processing up to 512 animation operations at once (was 64, fixes [#537](https://github.com/EmulatorNexus/VeniceUnleashed/issues/537)).

{{% changeset 17301 "12/11/2020" %}}

- Fix crashes caused by using Frostbite textures in the WebUI ([#539](https://github.com/EmulatorNexus/VeniceUnleashed/issues/539)).
- Update to Lua 5.4.1.

{{% changeset 17262 "28/10/2020" %}}

- Fix a bug where team ticket counts were missing in RCON command `serverInfo` ([#517](https://github.com/EmulatorNexus/VeniceUnleashed/issues/517)).
- Fix a bug where an invalid RCON client would crash the server ([#526](https://github.com/EmulatorNexus/VeniceUnleashed/issues/526)).
- Fix a bug where `vu.serverBanner` could not be cleared once set ([#518](https://github.com/EmulatorNexus/VeniceUnleashed/issues/518)).
- Apply all currently known bugfixes to Lua core.
- VeniceEXT was updated to version `1.0.1` ([changelog](/vext/changelog/#1_0_1)).

{{% changeset 17259 "28/10/2020" %}}

- Fix a bug which would cause the server to only process one network message on every update / frame. This should greatly improve performance and reduce delays for mods which use NetEvents extensively.


{{% changeset 17203 "27/10/2020" %}}

- You can now have your server be unlisted (not shown in the server list) by launching it with the `-unlisted` argument (see [here](/general/args/) for more details).
- You can now specify the server connection IP manually using the `-joinaddr` argument (see [here](/general/args/) for more details).


{{% changeset 17182 "05/10/2020" %}}

- Fix game activation via the `-activate` command-line option (thanks Imposter).


{{% changeset 17169 "03/10/2020" %}}

- Allow creating and using up to 4 different soldiers.
- Fixed scrolling issue when VU wasn't fullscreen or in the main monitor.
