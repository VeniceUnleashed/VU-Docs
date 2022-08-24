---
title: Changelog
description: A list of changes for every VU update.
weight: 4
---

Below you can find a full list of changes to VU, corresponding to every VU update, with the newest update at the top. Updates that have the `ONLY IN DEV` tag next to them are currently only available in the `dev` branch.

{{% changeset 19042 "24/08/2022" true %}}
- VeniceEXT was updated to `1.9.0` ([changelog](/vext/changelog/#1_9_0)).

{{% changeset 19002 "22/07/2022" %}}
- Fix an issue where downloaded mod files wouldn't be saved to disk.

{{% changeset 18991 "22/07/2022" %}}
- Improve unicode compatibility across the board. Updates may still fail for installations in paths with unicode characters.
- Make command-line options case-insensitive.
- Add support for generating full memory dumps on crash by using the `-fulldump` command-line option. When this is enabled, the crash dialog will show the upload as having failed.
- Improve reliability of crash reporting.
- Fix several crashes related to audio devices.
- Fix several crashes related to poor network conditions / anti-DDoS environments.
- On supported configurations, the computer will now assign VU the high performance GPU.

{{% changeset 18896 "20/07/2022" %}}
- Fix an issue where starting VU launches the process but it gets stuck in Task Manager when Citrix is installed.
- Fix VU crashing when unplugging an audio device.
- Fix VU crashing shortly after startup when an audio device gets in an invalid state.
- Fix sorting servers by player count.
- Server tags in the server filters window are now sorted.

{{% changeset 18848 "29/05/2022" %}}
- Fix various issues caused by handling invalid entities.
- Fix VU mod memory usage reporting.
- Improve reliability of raycast methods.
- VeniceEXT was updated to `1.8.1` ([changelog](/vext/changelog/#1_8_1)).

{{% changeset 18675 "03/05/2022" %}}
- Fix an issue where frostbite type array operations would sometimes cause memory corruption or UB.
- Fix a crash when [Player:AttachSoldier](/vext/ref/server/type/player/#attachsoldier) was called during certain update passes.

{{% changeset 18675 "03/05/2022" %}}
- Fix an issue where frostbite type array operations would sometimes cause memory corruption or UB.
- Fix a crash when [Player:AttachSoldier](/vext/ref/server/type/player/#attachsoldier) was called during certain update passes.

{{% changeset 18616 "02/05/2022" %}}
- The [VU Main Menu](https://github.com/EmulatorNexus/Fusion-UI) and the [Built-in Mod](https://github.com/EmulatorNexus/VU-BuiltIn) are now open source and open to contribution.
- Allow development of the built-in mod when `-vextdebug` is defined (see mod readme).
- Expose mod settings api to main menu UI (`state.settings.modSettings` and relevant `SetModSettingX` calls).
- Expose account storage api to main menu UI (`state.user.accountStorage` and relevant actions).
- Expose favorite server api to main menu UI (`state.servers.favoriteServers` and relevant actions). 
- VeniceEXT was updated to `1.8.0` ([changelog](/vext/changelog/#1_8_0)).

{{% changeset 18474 "06/04/2022" %}}
- Fix HTTP asset download issues.

{{% changeset 18463 "01/04/2022" %}}
- Fix a server freeze that would happen when a player connected.
- Increase texture streaming pool size by default, fixing infinite loading for mods that inject lots of bundles.
- VeniceEXT was updated to `1.7.0` ([changelog](/vext/changelog/#1_7_0)).

{{% changeset 18244 "22/02/2022" %}}
- Prevent crash report window from showing up when running in console or headless mode ([#723](https://github.com/EmulatorNexus/VeniceUnleashed/issues/723)).
- VeniceEXT was updated to `1.6.0` ([changelog](/vext/changelog/#1_6_0)).

{{% changeset 18241 "18/02/2022" %}}
- Fix `SoldierEntity.weaponsComponent.weapons` indices ([#743](https://github.com/EmulatorNexus/VeniceUnleashed/issues/743))

{{% changeset 18070 "18/02/2022" %}}

- Fix `vu.SetTeamTicketCount` not working for `KillCounterEntity` ([#729](https://github.com/EmulatorNexus/VeniceUnleashed/issues/729))
- Fix [ModSettings](/vext/ref/client/type/modsetting) string and option saving ([#744](https://github.com/EmulatorNexus/VeniceUnleashed/issues/744))
- Fix missing implementation of `ServerAutoTeamEntity` events ([#757](https://github.com/EmulatorNexus/VeniceUnleashed/issues/757))
- `Player:SetSquadLeader` now triggers after engine update instead of before ([#746](https://github.com/EmulatorNexus/VeniceUnleashed/issues/746))
- VeniceEXT was updated to `1.5.0` ([changelog](/vext/changelog/#1_5_0)).

{{% changeset 18043 "08/01/2022" %}}

- Fix a few small memory leaks.
- Greatly reduce the number of memory allocations throughout the lifetime of the process.
- Fix various cases of memory corruption.
- Slightly improve memory fragmentation.
- Improve safety checks and error reporting, resulting in less silent crashes.
- Add support for hosting mod assets on an external HTTP server, configurable through the [vu.HttpAssetUrl](/hosting/commands/#vuhttpasseturl) RCON command.
- VeniceEXT was updated to `1.4.0` ([changelog](/vext/changelog/#1_4_0)).

{{% changeset 17967 "03/01/2022" %}}

- Rename `Player:UpdateInput` (server) to `Player:UpdateInteract`.

{{% changeset 17887 "16/12/2021" %}}

- Fix `Player:Created` not being triggered for normal players (previously bots only).

{{% changeset 17884 "12/12/2021" %}}

- Potential fix for `Player:Connected` event not finding a player object.

{{% changeset 17880 "5/12/2021" %}}

- Change EntityBus.networkId to be writable.

{{% changeset 17879 "26/11/2021" %}}

- Fix a crash when specified RCON port is already in use. ([#719](https://github.com/EmulatorNexus/VeniceUnleashed/issues/719))

{{% changeset 17876 "06/11/2021" %}}

- Fix a crash when a voip-connected player disconnected unexpectedly.
- Improve reliability of the Origin linking process.
- Add presence and account linking support for EA Desktop.
- Add support for up to 128 teams.
- Add a [vu.DrawMemoryStats](/general/commands/) client-side console command (only available while connected to a server) that shows memory usage information for all loaded mods.
- Allow WebUI mods to perform garbage collection manually by calling `window.gc()`.
- Various performance improvements and minor bugfixes.
- VeniceEXT was updated to `1.3.2` ([changelog](/vext/changelog/#1_3_2)).

{{% changeset 17777 "12/10/2021" %}}

- Fix a memory leak caused by detailed client-side raycasts.
- VeniceEXT was updated to `1.3.1` ([changelog](/vext/changelog/#1_3_1)).


{{% changeset 17768 "11/10/2021" %}}

- Fix a memory leak when using `fb://` resources in the WebUI.
- Added support for in-game VoIP (see VeniceEXT changelog for API details).
- Added support for changing VU settings from the in-game settings menu.
- VeniceEXT was updated to `1.3.0` ([changelog](/vext/changelog/#1_3_0)).

{{% changeset 17689 "16/09/2021" %}}

- Improve performance of cross-mod Event dispatching.
- Improve performance of NetEvent serialization.
- Fix spectators not being sent to RCON.
- Fix spectators not receiving Yell messages.
- Add additional checks to Entity operations to prevent undefined behavior.
- Greatly rework how players are managed internally, reducing the amount of edge cases when accessing player objects via VEXT.
- Fix various player related VEXT and RCON events.
- Fix various issues with player-targetted NetEvents.
- Add support for specifying a server password when using the `vu://join` or `vu://spectate` [command-line arguments or hyperlinks](/general/args/#client-arguments).
- Add support for specifying a server password when using the `connect` or `spectate` [console commands]().
- Automatically apply server filters when pressing the `Enter` key in the server name or min/max player/ping inputs.
- Fix various crashes and cases of undefined behavior.
- Add a new `-cefdebug` [command-line argument](/general/args/#client-arguments) that turns on verbose CEF debug logging.
- VeniceEXT was updated to version `1.2.0` ([changelog](/vext/changelog/#1_2_0)).
- A bunch of other minor fixes and changes.

{{% changeset 17589 "15/05/2021" %}}

- Fix `admin.listPlayers all` RCON command not behaving as intended ([#506](https://github.com/EmulatorNexus/VeniceUnleashed/issues/506)).
- Increase maximum allowed teams to 127 ([#619](https://github.com/EmulatorNexus/VeniceUnleashed/issues/619)).
- VeniceEXT was updated to version `1.1.3` ([changelog](/vext/changelog/#1_1_3)).

{{% changeset 17547 "25/03/2021" %}}

- VeniceEXT was updated to version `1.1.2` ([changelog](/vext/changelog/#1_1_2)).

{{% changeset 17546 "25/03/2021" %}}

- Fix inverted `vars.3pCam` and `vars.3dSpotting` RCON commands ([#559](https://github.com/EmulatorNexus/VeniceUnleashed/issues/559)).

{{% changeset 17545 "07/03/2021" %}}

- Add `-dxdebug` client command line flag to enable D3D11 Validation Layers.

{{% changeset 17539 "11/02/2021" %}}

- Add support for tracing VeniceEXT execution post-crash with [-vexttrace](/general/args/#common-arguments).
- Fix bots not having access to DLC weapons and equipment ([#593](https://github.com/EmulatorNexus/VeniceUnleashed/issues/593)).
- Fix error messages not showing up properly when player creation fails ([#600](https://github.com/EmulatorNexus/VeniceUnleashed/issues/600)).
- Forcefully assign players to Squad 1 when switching teams in squad-based gamemodes ([#578](https://github.com/EmulatorNexus/VeniceUnleashed/issues/578)).
- VeniceEXT was updated to version `1.1.1` ([changelog](/vext/changelog/#1_1_1)).

{{% changeset 17490 "24/01/2021" %}}

- Fix an issue with the UI Nametag hooks ([#591](https://github.com/EmulatorNexus/VeniceUnleashed/issues/591)).

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
