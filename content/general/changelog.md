---
title: Changelog
description: A list of changes for every VU update.
weight: 4
---

Below you can find a full list of changes to VU, corresponding to every VU update, with the newest update at the top. Updates that have the `ONLY IN DEV` tag next to them are currently only available in the `dev` branch.

{{% changeset 17301 "12/11/2020" true %}}

- Fix crashes caused by using Frostbite textures in the WebUI ([#539](https://github.com/EmulatorNexus/VeniceUnleashed/issues/539)).
- Update to Lua 5.4.1.

{{% changeset 17262 "28/10/2020" true %}}

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