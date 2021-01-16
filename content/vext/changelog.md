---
title: Changelog
weight: 1
---

{{% changeset-vext "1.0.9" "15/1/2021" true %}}
- Introduces [Player:Deserting](/vext/ref/server/hook/player_deserting/) server-side hook.
- Fix documentation issue in [ClientUtils](/vext/ref/client/library/clientutils/).
- Fix documentation issue in client [SoldierWeapon](/vext/ref/client/type/soldierweapon/).
- Add usage documentation for [RaycastManager:Raycast](/vext/ref/client/library/raycastmanager/#raycast).
- Add note to [Player:ManDownRevived](/vext/ref/server/event/player_mandownrevived/) that this is a coop only event.

{{% changeset-vext "1.0.8" "20/12/2020" %}}

- Introduces a new [ImpulseType](/vext/ref/shared/type/impulsetype/) shared enum.
- Introduces a new [ImpulseData](/vext/ref/shared/type/impulsedata/) shared type.
- Introduces [ApplyImpulse](/vext/ref/client/type/physicsentity/#applyimpulse), [RegisterImpulseCallback](/vext/ref/client/type/physicsentity/#registerimpulsecallback), and [UnregisterImpulseCallback](/vext/ref/client/type/physicsentity/#unregisterimpulsecallback) methods to the client [PhysicsEntity](/vext/ref/client/type/physicsentity/) type.
- Introduces [ApplyImpulse](/vext/ref/server/type/physicsentity/#applyimpulse), [RegisterImpulseCallback](/vext/ref/server/type/physicsentity/#registerimpulsecallback), and [UnregisterImpulseCallback](/vext/ref/server/type/physicsentity/#unregisterimpulsecallback) methods to the server [PhysicsEntity](/vext/ref/server/type/physicsentity/) type.
- Introduces a new [BulletEntity:Collision](/vext/ref/client/hook/bulletentity_collision/) client-side hook.
- Introduces a new [BulletEntity:Collision](/vext/ref/server/hook/bulletentity_collision/) server-side hook.

{{% changeset-vext "1.0.7" "20/12/2020" %}}

- Introduces a new [ServerUtils](/vext/ref/server/library/serverutils/) library to the server. Using this library you can set a custom map name and gamemode to be shown in the server browser.

{{% changeset-vext "1.0.6" "19/12/2020" %}}

- Introduces [onlineId](/vext/ref/client/type/player/#onlineid) property to client [Player](/vext/ref/client/type/player/) type.
- Introduces [GetPlayerByOnlineId](/vext/ref/client/library/playermanager/#getplayerbyonlineid) method to client [PlayerManager](/vext/ref/client/library/playermanager/) library.

{{% changeset-vext "1.0.5" "18/12/2020" %}}

- Introduces [SetTransform](/vext/ref/server/type/soldierentity/#settransform) method to server [SoldierEntity](/vext/ref/server/type/soldierentity) type.

{{% changeset-vext "1.0.4" "11/12/2020" %}}

- Introduces [GetSpectatorCount](/vext/ref/client/library/playermanager/#getspectatorcount) method to client [PlayerManager](/vext/ref/client/library/playermanager) library.
- Introduces [GetSpectatorCount](/vext/ref/server/library/playermanager/#getspectatorcount) method to server [PlayerManager](/vext/ref/client/library) library.

{{% changeset-vext "1.0.3" "9/12/2020" %}}

- Introduces [teamId](/vext/ref/client/type/controllableentity/#teamid) property to client [ControllableEntity](/vext/ref/client/type/controllableentity) type.
- Introduces [defaultTeamId](/vext/ref/client/type/controllableentity/#defaultteamid) property to client [ControllableEntity](/vext/ref/client/type/controllableentity) type.
- Introduces [teamId](/vext/ref/server/type/controllableentity/#teamid) property to server [ControllableEntity](/vext/ref/server/type/controllableentity) type.
- Introduces [defaultTeamId](/vext/ref/server/type/controllableentity/#defaultteamid) property to server [ControllableEntity](/vext/ref/server/type/controllableentity) type.
- Introduces [KillCounterEntity](/vext/ref/client/type/killcounterentity) type to client.

{{% changeset-vext "1.0.2" "21/11/2020" %}}

- Introduces an additional parameter (`stateNodeGuid`) to the [UI:PushScreen](/vext/ref/client/hook/ui_pushscreen/) hook.

{{% changeset-vext "1.0.1" "28/10/2020" %}}

- Introduces [networkId](/vext/ref/shared/type/entitybus/#networkid) property to [EntityBus](/vext/ref/shared/type/entitybus/) type.
- Introduces [ping](/vext/ref/client/type/player/#ping), [isSquadPrivate](/vext/ref/client/type/player/#issquadprivate) properties to the client [Player](/vext/ref/client/type/player/) type ([#520](https://github.com/EmulatorNexus/VeniceUnleashed/issues/520))
- Allows RCON commands `modList.ListRunning`, `modList.List`, `modList.Available` to be called from VeniceEXT ([#531](https://github.com/EmulatorNexus/VeniceUnleashed/issues/531))
