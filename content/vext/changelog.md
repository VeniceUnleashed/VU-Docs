---
title: Changelog
description: A list of changes for every VeniceEXT update
weight: 1
---

Below you can find a full list of changes to VeniceEXT, corresponding to every VeniceEXT update, with the newest update at the top. Updates that have the `ONLY IN DEV` tag next to them are currently only available in the `dev` branch.

{{% changeset 1.0.1 "28/10/2020" %}} `ONLY IN DEV`

- Introduces `networkId` to [EntityBus](https://docs.veniceunleashed.net/vext/ref/shared/type/entitybus/)
- Introduces `ping`, `isSquadPrivate` properties to the client [Player](https://docs.veniceunleashed.net/vext/ref/client/type/player/) type ([#520](https://github.com/EmulatorNexus/VeniceUnleashed/issues/520))
- Allows RCON commands `modList.ListRunning`, `modList.List`, `modList.available` to be called from VeniceEXT ([#531](https://github.com/EmulatorNexus/VeniceUnleashed/issues/531))
