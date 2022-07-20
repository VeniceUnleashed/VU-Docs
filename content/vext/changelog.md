---
title: Changelog
weight: 1
---

{{% changeset-vext "1.8.1" "29/05/2022" %}}
- Fix issues caused by passing `nil` where VEXT would instead expect a callback.
- Fix `Player:SetSquadLeader` not firing on the client when a player is removed.
- Fix `Player:SetSquadLeader` firing for the wrong player when using `squad.leader` RCON command.
- Fix a few issues with the implementation of `MathUtils:GetYPRFromULF` and `MathUtils:GetTransformFromYPR`.
- Introduces the [RegisterPropertyChangedCallback](/vext/ref/shared/type/entitybuspeer/#registerpropertychangedcallback) and [UnregisterPropertyChangedCallback](/vext/ref/shared/type/entitybuspeer/#unregisterpropertychangedcallback) to the [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) type.

{{% changeset-vext "1.8.0" "02/05/2022" %}}
- Adds initial support for components:
  - Introduces a new [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) shared type.
  - Adjusts the shared [Entity](/vext/ref/shared/type/entity) type to derive from [EntityBusPeer](/vext/ref/shared/type/entitybuspeer).
  - Introduces a new [Component](/vext/ref/shared/type/component) shared type.
  - Introduces [components](/vext/ref/shared/type/entitybus/#components) and [peers](/vext/ref/shared/type/entitybus/#peers) properties to the [EntityBus](/vext/ref/shared/type/entitybus) type.
  - Adjust various events and hooks to use [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) where appropriate.
  - To preserve backwards compatibility, methods, properties, events, and hooks that previously used the [Entity](/vext/ref/shared/type/entity) type will now intelligently provide either an [Entity](/vext/ref/shared/type/entity) or a [Component](/vext/ref/shared/type/component) based on the underlying value type. This will keep mods compatible while also helping better diagnose any misuse.
- Adjust DataContainer reference counting to make it more accurate (related to [#770](https://github.com/EmulatorNexus/VeniceUnleashed/issues/770)).

{{% changeset-vext "1.7.0" "01/04/2022" %}}
- Add support for using custom content superbundles. See the [guide](/vext/guides/custom-content/) for more info.

{{% changeset-vext "1.6.0" "18/02/2022" %}}
- Fix [VoipEmitter:Emitting](/vext/ref/client/event/voipemitter_emitting/) event firing multiple times ([#707](https://github.com/EmulatorNexus/VeniceUnleashed/issues/707)).
- Introduces a new [GetTimeNS](/vext/ref/shared/library/sharedutils/#gettimens) method to the shared [SharedUtils](/vext/ref/shared/library/sharedutils/) library.
- Fix certain issues with the [Input:PreUpdate](/vext/ref/client/hook/input_preupdate/) hook.

{{% changeset-vext "1.5.0" "18/02/2022" %}}
- Expose `updateInterval` to [ClientGameEntity](/vext/ref/client/type/gameentity) and [ServerGameEntity](/vext/ref/server/type/gameentity) ([#669](https://github.com/EmulatorNexus/VeniceUnleashed/issues/669)).


{{% changeset-vext "1.4.0" "08/01/2022" %}}

- Improve cases where accessing a player object would result in errors.
- The [Guid](/vext/ref/shared/type/guid/) constructors will now throw errors when invalid or badly formatted Guid strings are provided.
- Add support for client-side persistent settings through the [SettingsManager](/vext/ref/client/library/settingsmanager/) library.

{{% changeset-vext "1.3.2" "06/11/2021" %}}

- Introduces a new [GetMemoryUsage](/vext/ref/shared/library/sharedutils/#getmemoryusage) method to the [SharedUtils](/vext/ref/shared/library/sharedutils/) shared library.
- Calls to [Events:Subscribe](/vext/ref/shared/library/events/#subscribe) will now throw an error when invalid callbacks are provided.
- Fix a deadlock when accessing voip channel details in the [VoipEmitter:Emitting](/vext/ref/client/event/voipemitter_emitting/) event.
- Fix a memory leak with the [WebUI:ExecuteJS](/vext/ref/client/library/webui/#executejs) library method.

{{% changeset-vext "1.3.1" "12/10/2021" %}}

- Introduces a new [RaycastManager](/vext/ref/server/library/raycastmanager/) server library.
- Introduces a new [CollisionRaycast](/vext/ref/client/library/raycastmanager/#collisionraycast) method to the [RaycastManager](/vext/ref/client/library/raycastmanager/) client library.

{{% changeset-vext "1.3.0" "11/10/2021" %}}

- Introduces a new [Voip](/vext/ref/server/library/voip/) server library.
- Introduces a new [Voip](/vext/ref/client/library/voip/) client library.
- Introduces a new [VoipChannel](/vext/ref/server/type/voipchannel/) server type.
- Introduces a new [VoipChannel](/vext/ref/client/type/voipchannel/) client type.
- Introduces a new [VoipEmitter](/vext/ref/client/type/voipemitter/) client type.
- Introduces a new [VoipEmitterType](/vext/ref/shared/type/voipemittertype/) shared enum.
- Introduces a new [VoipTransmissionMode](/vext/ref/shared/type/voiptransmissionmode/) shared enum.
- Introduces several new client events: [Voip:ChannelOpened](/vext/ref/client/event/voip_channelopened/), [Voip:ChannelClosed](/vext/ref/client/event/voip_channelclosed/), [VoipChannel:PlayerJoined](/vext/ref/client/event/voipchannel_playerjoined/), [VoipChannel:PlayerLeft](/vext/ref/client/event/voipchannel_playerleft/), and [VoipEmitter:Emitting](/vext/ref/client/event/voipemitter_emitting/).

{{% changeset-vext "1.2.0" "16/09/2021" %}}

- Made the `teamId` and `squadId` properties writable for the client [Player](/vext/ref/client/type/player/) ([#642](https://github.com/EmulatorNexus/VeniceUnleashed/issues/642)) type.
- Made the `teamId` property writable for the client [ControllableEntity](/vext/ref/client/type/controllableentity/) and the server [ControllableEntity](/vext/ref/server/type/controllableentity/) types ([#651](https://github.com/EmulatorNexus/VeniceUnleashed/issues/651))
- Fixed crash when calling `entity:Destroy()`.
- Fixed various issues with DataContainer loading callbacks.
- Fixed spectators not being included in the VEXT PlayerManager.
- Fixed spectators not receiving NetEvents.
- Fixed `Player:Deleted` not being called for spectators.
- Fixed a race condition with VEXT module registration.
- The instance id will now be printed when printing Entity or EntityBus types using `print`.
- Fixed issues with entity destruction callbacks not being called correctly.
- Fixed `Player:Connected` and `Player:Deleted` events being dispatched multiple times.
- Fixed a crash when calling [GetPart](/vext/ref/shared/type/physicsentitybase/#getpart) on a [PhysicsEntityBase](/vext/ref/shared/type/physicsentitybase/) with an invalid index ([#674](https://github.com/EmulatorNexus/VeniceUnleashed/issues/674)).
- Removed duplicate `Get/SetLocalTransform` methods from [RagdollComponent](/vext/ref/client/type/ragdollcomponent/) ([#672](https://github.com/EmulatorNexus/VeniceUnleashed/issues/672)).
- Added additional checks to prevent receiving stale data when accessing `player` properties of entities.
- Improved performance of accessing instances in [DatabasePartition](/vext/ref/shared/type/databasepartition/).
- Introduces two new [ConnectToServer](/vext/ref/client/library/clientutils/#connecttoserver) and [SpectateServer](/vext/ref/client/library/clientutils/#spectateserver) methods to the [ClientUtils](/vext/ref/client/library/clientutils/) library, allowing you to switch servers programmatically.
- Added a built-in VEXT mod that is automatically loaded on servers and clients and can be used to apply various hotfixes to the game and provide supporting functionality.
- Updated to Lua `5.4.2`.

{{% changeset-vext "1.1.3" "25/03/2021" %}}
- Fix [EventEntity](/vext/ref/shared/type/entityevent/#eventid) `eventId` returning `nil` ([#626](https://github.com/EmulatorNexus/VeniceUnleashed/issues/626)).
- Fix crash in [RegisterEventCallback](/vext/ref/shared/type/entity/#registereventcallback) when `modlist.reloadExtensions` is sent to RCON.
- Fix crash in broadcast NetEvents when the player manager was not available (This now will emit a warning).

{{% changeset-vext "1.1.2" "25/03/2021" %}}
- Add missing documented enum value `WeaponFiring.Reload`.

{{% changeset-vext "1.1.1" "11/02/2021" %}}

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
