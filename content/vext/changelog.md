---
title: Changelog
weight: 1
---

{{% changeset-vext "1.0.3" "9/12/2020" %}}

- Introduces [teamId](/vext/ref/client/type/controllableentity/#teamid) property to Client [ControllableEntity](/vext/ref/client/type/controllableentity).
- Introduces [defaultTeamId](/vext/ref/client/type/controllableentity/#defaultteamid) property to Client [ControllableEntity](/vext/ref/client/type/controllableentity).
- Introduces [teamId](/vext/ref/server/type/controllableentity/#teamid) property to Server [ControllableEntity](/vext/ref/server/type/controllableentity).
- Introduces [defaultTeamId](/vext/ref/server/type/controllableentity/#defaultteamid) property to Server [ControllableEntity](/vext/ref/server/type/controllableentity).
- Introduces [KillCounterEntity](/vext/ref/client/type/killcounterentity) type to client.

{{% changeset-vext "1.0.2" "21/11/2020" %}}

- Introduces an additional parameter (`stateNodeGuid`) to the [UI:PushScreen](/vext/ref/client/hook/ui_pushscreen/) hook.

{{% changeset-vext "1.0.1" "28/10/2020" %}}

- Introduces [networkId](/vext/ref/shared/type/entitybus/#networkid) property to [EntityBus](/vext/ref/shared/type/entitybus/)
- Introduces [ping](/vext/ref/client/type/player/#ping), [isSquadPrivate](/vext/ref/client/type/player/#issquadprivate) properties to the client [Player](/vext/ref/client/type/player/) type ([#520](https://github.com/EmulatorNexus/VeniceUnleashed/issues/520))
- Allows RCON commands `modList.ListRunning`, `modList.List`, `modList.Available` to be called from VeniceEXT ([#531](https://github.com/EmulatorNexus/VeniceUnleashed/issues/531))
