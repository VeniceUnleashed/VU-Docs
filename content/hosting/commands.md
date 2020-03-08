---
title: Server commands
weight: 7
---

VU servers support most of the commands that vanilla BF3 servers also support. You can find a listing of all of them in [this document](https://github.com/dcodeIO/BattleCon/blob/master/eadocs/BF3/BF3%20PC%20Server%20Remote%20Administration%20Protocol.pdf). Everything that is not Punkbuster or reserved slots related should work. On top of those, VU servers have a few custom commands which are listed below:

## `modList.List`

Lists all currently loaded mods.

## `modList.ReloadExtensions`

Reloads all currently loaded mods. Keep in mind that this can cause significant server and client lag and also crashes as not all mods support reloading.

## `modList.Debug`

Accepts a single boolean argument (`true` or `false`) which toggles debug mode for any loaded extensions. When set to `true`, any scripts will be built with debug symbols enabled, which will make it so errors printed on the server and the clients will contain more useful information about their source. 

When used with no arguments, it returns whether debug mode is currently enabled or not. Defaults to `false`.

## `vu.DestructionEnabled`

Accepts a single boolean argument (`true` or `false`) which toggles destruction. When set to `false`, all destruction on the server will be disabled.

When used with no arguments, it returns whether destruction is currently enabled or not. Defaults to `true`.

## `vu.SuppressionMultiplier`

Accepts a single numeric argument (`0.0` or higher) that specifies a multiplier for the suppression effect. Setting this to `0.0` completely disables suppression (both visually and for weapon spread).

When used with no arguments, it returns the current supression multiplier. Defaults to `1.0`.

## `vu.DesertingAllowed`

Accepts a single boolean argument (`true` or `false`) which specifies whether players are allowed to exit the combat area or not. When set to `true` the combat area will be disabled and players will not be killed for exiting it.

When used with no arguments, it returns whether deserting (leaving the combat area) is allowed or not. Defaults to `false`.

## `vu.VehicleDisablingEnabled`

Accepts a single boolean argument (`true` or `false`) which toggles whether vehicles can enter the disabled state or not. When set to `false`, vehicles will no longer get disabled (and drain health) when they reach low health status.

When used with no arguments, it returns whether vehicle disabling is enabled or not. Defaults to `true`.

## `vu.HighPerformanceReplication`

Accepts a single boolean argument (`true` or `false`) that specifies whether high performance replication should be enabled or not. Normally, the server will reduce the amount of updates it sends for players that are further away from other players. Setting this to `true` will make the server send updates at the same rate for all players. This also results in an increase in network activity.

When used with no arguments, it returns whether high performance replication is enabled or not. Defaults to `false`.

## `vu.SetTeamTicketCount`

Accepts two arguments: a team number and the number of tickets that team should have. For example, to set the tickets of team `1` to `120` you would execute the following command:

```
vu.SetTeamTicketCount 1 120
```

## `vu.FrequencyMode`

Returns the current server frequency mode. For 30Hz it returns `regular`, for 60Hz it returns `high60` and for 120Hz it returns `high120`.

## `vu.SpectatorCount`

Lists the number of spectators currently connected to the server.

## `vu.FadeOutAll`

Fades the screen of all the currently connected players to black.

## `vu.FadeInAll`

Fades the screen of all the currently connected players from black back to normal.