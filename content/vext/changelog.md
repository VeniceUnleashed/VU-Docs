---
title: Changelog
weight: 1
---
{{% changeset-vext "1.1.3" "25/03/2021" true %}}
- Fix [EventEntity](/vext/ref/shared/type/entityevent/#eventid) eventId returning nil ([#626](https://github.com/EmulatorNexus/VeniceUnleashed/issues/626)).
- Fix crash in [RegisterEventCallback](/vext/ref/shared/type/entity/#registereventcallback) when `modlist.reloadExtensions` is sent to RCON.
- Fix crash in broadcast NetEvents when the player manager was not available (This now will emit a warning).

{{% changeset-vext "1.1.2" "25/03/2021" true %}}
- Add missing documented enum value `WeaponFiring.Reload`.

{{% changeset-vext "1.1.1" "11/02/2021" true %}}

- Add support for specifying a [parent representative](/vext/ref/shared/type/entitycreationparams/#parentrepresentative) during entity blueprint creation.
- Add a new [PopScreen](/vext/ref/client/library/clientutils/#popscreen) method to the [ClientUtils](/vext/ref/client/library/clientutils/) library.

{{% changeset-vext "1.1.0" "18/01/2021" %}}

- Add support for async HTTP requests. All HTTP [Net](/vext/ref/shared/library/net/) library methods now have `Async` variants. 

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
