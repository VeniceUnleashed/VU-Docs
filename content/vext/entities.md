---
title: Entity types
description: A full listing of all entity types and their inheritance trees in Battlefield 3.
weight: 3
---

## AndEntity

Inheritance tree: [Entity](#entity)


## AreaProximityEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## BoolEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SetTrue` |  |  |
| `Toggle` |  |  |
| `SetFalse` |  |  |


## BoolHubEntity

Inheritance tree: [Entity](#entity)


## BoolToEventEntity

Inheritance tree: [Entity](#entity)


## BreakablePhysicsEntity

Inheritance tree: [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## CameraEnterAreaTriggerEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## CharacterAnimationEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Start` |  |  |
| `Stop` |  |  |


## CharacterPhysicsEntity

Inheritance tree: [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientAimingConstraintsEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent` |  |  |


## ClientAmmoCrateEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientAnimatedDriverEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `OnPlayerEnter` |  |  |


## ClientAnimatedPointCloudEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Pause` |  |  |
| `Stop` |  |  |
| `Pause` |  |  |
| `Resume` |  |  |
| `Start` |  |  |
| `TargetEntity` |  |  |


## ClientAnimatedTransformEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Start` |  |  |
| `Stop` |  |  |
| `Start` |  |  |
| `DisableEntitySpace` |  |  |
| `EnableEntitySpace` |  |  |


## ClientAnimationEnumerationChoiceEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Trigger` |  |  |


## ClientAnimationEnumerationEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Trigger` |  |  |


## ClientAnimationSignalEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SignalFalse` |  |  |
| `SignalFalse` |  |  |
| `SetValueInt` |  |  |
| `StopReadFromAnt` |  |  |
| `SignalTrue` |  |  |
| `SetValueFloat` |  |  |


## ClientAntEventEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Activate` |  |  |
| `Deactivate` |  |  |


## ClientAntInteractionEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `AnimatableCreated` |  |  |
| `Disarm` |  |  |
| `OnDisarm` |  |  |


## ClientBangerEntity

Inheritance tree: [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientBlueprintBundleLoaderEntity

Inheritance tree: [Entity](#entity)


## ClientBlueprintBundleSelectorEntity

Inheritance tree: [Entity](#entity)


## ClientBlueprintBundleStateLogicEntity

Inheritance tree: [Entity](#entity)


## ClientBlueprintEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `StreamIn` |  |  |
| `StreamOut` |  |  |


## ClientBreakableModelEntity

Inheritance tree: [ClientPhysicsEntityWithPoseProvider](#clientphysicsentitywithposeprovider) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientBulletEntity

Inheritance tree: [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientCameraEntity

Inheritance tree: [ClientCameraEntityBase](#clientcameraentitybase) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SetOnce` |  |  |


## ClientCameraEntityBase

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ReleaseControl` |  |  |
| `TakeControl` |  |  |


## ClientCannedScenarioEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `StartCannedAnimation` |  |  |
| `RegisterAnimatableComponent` |  |  |


## ClientCapturePointEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientCharacterAnimationEntity

Inheritance tree: [CharacterAnimationEntity](#characteranimationentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `DisableEntitySpace` |  |  |
| `EnableEntitySpace` |  |  |


## ClientCharacterAnimationSpaceEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `DisableEntitySpace` |  |  |
| `EnableEntitySpace` |  |  |


## ClientCharacterEntity

Inheritance tree: [ClientControllableEntity](#clientcontrollableentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |
| `RegisterAnimatableComponent1p` |  |  |
| `RegisterAnimatableComponent3p` |  |  |


## ClientCharacterInVehicleScenarioEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `TriggerScenario` |  |  |
| `TriggerActor` |  |  |


## ClientCharacterSpawnEntity

Inheritance tree: [ClientSpawnEntity](#clientspawnentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientChunkStreamerEntity

Inheritance tree: [Entity](#entity)


## ClientClearAreaTriggerEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ClearArea` |  |  |


## ClientCombatAreaTriggerEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientControllableEntity

Inheritance tree: [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## ClientCoopLobbyEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientDebrisCluster

Inheritance tree: [DebrisCluster](#debriscluster) > [Entity](#entity)


## ClientDecalEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## ClientDynamicAvoidanceEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent` |  |  |


## ClientDynamicModelEntity

Inheritance tree: [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `DisableConstraints` |  |  |
| `Destroy` |  |  |


## ClientEmitterEntity

Inheritance tree: [EmitterEntity](#emitterentity) > [EffectEntity](#effectentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientEventMemoryEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ClearMemory` |  |  |
| `FireMemory` |  |  |
| `LoadMemory` |  |  |
| `OnMemoryEvent` |  |  |


## ClientEventSyncEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Client` |  |  |


## ClientExplosionEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientExplosionPackEntity

Inheritance tree: [ClientGhostProjectileEntity](#clientghostprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientFadeEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `FadeIn` |  |  |
| `FadeOut` |  |  |


## ClientFlagCounterEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientFlareEntity

Inheritance tree: [ClientGrenadeEntity](#clientgrenadeentity) > [ClientGhostProjectileEntity](#clientghostprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientFriendZoneDebugRenderEntity

Inheritance tree: [Entity](#entity)


## ClientGameEntity

Inheritance tree: [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientGameSplineEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientGhostProjectileEntity

Inheritance tree: [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientGrenadeEntity

Inheritance tree: [ClientGhostProjectileEntity](#clientghostprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientGunMasterKillCounterEntity

Inheritance tree: [Entity](#entity)


## ClientInteractionEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientKillCounterEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientLadderEntity

Inheritance tree: [ClientStaticModelEntity](#clientstaticmodelentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientLifeCounterEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientLookAtCameraEntity

Inheritance tree: [ClientCameraEntity](#clientcameraentity) > [ClientCameraEntityBase](#clientcameraentitybase) > [Entity](#entity)


## ClientLookAtEntity

Inheritance tree: [Entity](#entity)


## ClientMapMarkerEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientMedicBagEntity

Inheritance tree: [ClientExplosionPackEntity](#clientexplosionpackentity) > [ClientGhostProjectileEntity](#clientghostprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientMedicBagHealingSphereEntity

Inheritance tree: [ClientExplosionPackEntity](#clientexplosionpackentity) > [ClientGhostProjectileEntity](#clientghostprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientMeleeEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent1p` |  |  |
| `RegisterAnimatableComponent3p` |  |  |


## ClientMessageEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SendMessage` |  |  |
| `OnSendMessage` |  |  |
| `OnDisplayMessageFinished` |  |  |
| `OnDisplayMessageFinished` |  |  |


## ClientMinimap2DEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientMissileEntity

Inheritance tree: [ClientGhostProjectileEntity](#clientghostprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientModelAnimationEntity

Inheritance tree: [ModelAnimationEntity](#modelanimationentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Start` |  |  |
| `Stop` |  |  |


## ClientMovieEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Pause` |  |  |
| `Stop` |  |  |
| `TargetEntity` |  |  |
| `Pause` |  |  |
| `Resume` |  |  |
| `Start` |  |  |


## ClientMultipleActorScenarioEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ForceStart` |  |  |
| `Stop` |  |  |
| `ForceStart` |  |  |
| `Reset` |  |  |
| `Advance` |  |  |


## ClientObjectiveEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientPhysicsDrivenAnimationEntity

Inheritance tree: [PhysicsDrivenAnimationEntity](#physicsdrivenanimationentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent1p` |  |  |
| `RegisterAnimatableComponent3p` |  |  |


## ClientPhysicsEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientPhysicsEntityWithPoseProvider

Inheritance tree: [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientPickupEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientPlaceHolderEntity

Inheritance tree: [Entity](#entity)


## ClientPlayerCameraEntity

Inheritance tree: [ClientCameraEntityBase](#clientcameraentitybase) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `TakeControl` |  |  |


## ClientPlayerFilterEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `OnTriggerOnlyForPlayer` |  |  |
| `OnTriggeredByHost` |  |  |
| `OnTriggerOnlyForHost` |  |  |


## ClientPlayerInputTriggerEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Trigger` |  |  |
| `Disable` |  |  |


## ClientPlayerLookAtEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Start` |  |  |
| `Stop` |  |  |


## ClientPlayVideoEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Play` |  |  |


## ClientPreRoundEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientProjectileEntity

Inheritance tree: [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientProxyExplosionPackEntity

Inheritance tree: [ClientProxyProjectileEntity](#clientproxyprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientProxyGrenadeEntity

Inheritance tree: [ClientProxyProjectileEntity](#clientproxyprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientProxyMissileEntity

Inheritance tree: [ClientProxyProjectileEntity](#clientproxyprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientProxyProjectileEntity

Inheritance tree: [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientRoundOverEntity

Inheritance tree: [Entity](#entity)


## ClientSoldierEntity

Inheritance tree: [ClientCharacterEntity](#clientcharacterentity) > [ClientControllableEntity](#clientcontrollableentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientSoldierWeapon

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientSpawnEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientSpectatorReplayEntity

Inheritance tree: [Entity](#entity)


## ClientStaticModelEntity

Inheritance tree: [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientStaticModelGroupEntity

Inheritance tree: [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientStreamingGateEntity

Inheritance tree: [Entity](#entity)


## ClientSubLevelEntity

Inheritance tree: [SubLevelEntity](#sublevelentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `StreamIn` |  |  |
| `StreamOut` |  |  |


## ClientSupplySphereEntity

Inheritance tree: [ClientExplosionPackEntity](#clientexplosionpackentity) > [ClientGhostProjectileEntity](#clientghostprojectileentity) > [ClientProjectileEntity](#clientprojectileentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientSyncAnimationsEntity

Inheritance tree: [SyncAnimationsEntity](#syncanimationsentity) > [Entity](#entity)


## ClientSyncedBoolEntity

Inheritance tree: [Entity](#entity)


## ClientSyncedFloatEntity

Inheritance tree: [Entity](#entity)


## ClientSyncedIntEntity

Inheritance tree: [Entity](#entity)


## ClientSyncedSequenceEntity

Inheritance tree: [SequenceEntity](#sequenceentity) > [Entity](#entity)


## ClientSyncedTransformEntity

Inheritance tree: [Entity](#entity)


## ClientTargetCameraEntity

Inheritance tree: [ClientCameraEntityBase](#clientcameraentitybase) > [Entity](#entity)


## ClientTeamEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientTeamFilterEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `OnTriggeredByMatchingTeam` |  |  |


## ClientTerrainEntity

Inheritance tree: [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientTestPointEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientTicketCounterEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientTrackPlayerEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientUIEndOfRoundEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RequestEndOfRound` |  |  |
| `RequestEndOfRoundStats` |  |  |
| `RequestPreEndOfRound` |  |  |


## ClientUIGraphEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ExitUIGraph` |  |  |
| `EnterUIGraph` |  |  |


## ClientUIMessageTriggerEntity

Inheritance tree: [Entity](#entity)


## ClientUIMinimapVolumeEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientUISetValueEntity

Inheritance tree: [Entity](#entity)


## ClientVegetationTreeEntity

Inheritance tree: [VegetationTreeEntity](#vegetationtreeentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientVehicleEntity

Inheritance tree: [ClientControllableEntity](#clientcontrollableentity) > [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientVehicleSpawnEntity

Inheritance tree: [ClientSpawnEntity](#clientspawnentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientWarpAnimationEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent` |  |  |
| `SetWantedConnectJointTransform` |  |  |


## ClientWaterEntity

Inheritance tree: [ClientPhysicsEntity](#clientphysicsentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ClientWaypointTriggerEntity

Inheritance tree: [Entity](#entity)


## ClientWeaponLagEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent` |  |  |
| `Soldier` |  |  |


## ClientWeaponStateEntity

Inheritance tree: [WeaponStateEntity](#weaponstateentity) > [Entity](#entity)


## CompareBoolEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `OnTrue` |  |  |
| `OnFalse` |  |  |


## CompareEntity

Inheritance tree: [Entity](#entity)


## CompareFloatEntity

Inheritance tree: [Entity](#entity)


## CompareIntEntity

Inheritance tree: [Entity](#entity)


## CompositeMeshEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## ConsoleCommandEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Execute` |  |  |


## ConsoleCommandTriggerEntity

Inheritance tree: [Entity](#entity)


## CountDownEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Reset` |  |  |
| `CountDownOne` |  |  |
| `OnReachedZero` |  |  |


## DebrisCluster

Inheritance tree: [Entity](#entity)


## DebrisClusterContainerEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## DecalVolumeEntity

Inheritance tree: [RenderVolumeEntity](#rendervolumeentity) > [Entity](#entity)


## DelayEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `In` |  |  |
| `Restart` |  |  |
| `Out` |  |  |
| `Out` |  |  |


## DifficultyIndexEntity

Inheritance tree: [Entity](#entity)


## DynamicEnlightenEntity

Inheritance tree: [Entity](#entity)


## DynamicPhysicsEntity

Inheritance tree: [PhysicsEntity](#physicsentity) > [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## EffectEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Reset` |  |  |


## EmitterEntity

Inheritance tree: [EffectEntity](#effectentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Reset` |  |  |
| `Start` |  |  |
| `Stop` |  |  |


## Entity


## EnvmapEntity

Inheritance tree: [Entity](#entity)


## EulerTransformEntity

Inheritance tree: [Entity](#entity)


## EulerTransformSplitterEntity

Inheritance tree: [Entity](#entity)


## EventAndGateEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Reset` |  |  |
| `Out` |  |  |


## EventCompareGateEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Impulse` |  |  |
| `OnImpulseDenied` |  |  |
| `OnImpulsePass` |  |  |


## EventGateEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `In` |  |  |
| `Out` |  |  |
| `In` |  |  |
| `Close` |  |  |
| `Open` |  |  |


## EventQueueEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `In` |  |  |
| `Out` |  |  |
| `Flush` |  |  |


## EventSplitterEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Impulse` |  |  |
| `OnImpulse` |  |  |


## EventSwitchEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `NextOut` |  |  |
| `In` |  |  |
| `Reset` |  |  |


## FloatEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Decrement` |  |  |
| `Increment` |  |  |


## FloatHubEntity

Inheritance tree: [Entity](#entity)


## GameEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## GameSoundEntity

Inheritance tree: [Entity](#entity)


## GroundHeightEntity

Inheritance tree: [Entity](#entity)


## GroupPhysicsEntity

Inheritance tree: [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## IntegratorOrDifferentiatorEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Reset` |  |  |
| `Start` |  |  |
| `Stop` |  |  |


## IntEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Decrement` |  |  |
| `Increment` |  |  |


## IntHubEntity

Inheritance tree: [Entity](#entity)


## IrReverbEntity

Inheritance tree: [Entity](#entity)


## KyotoServerPlayerAliveFilterEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Impulse` |  |  |
| `OnImpulseAlive` |  |  |
| `OnImpulseDead` |  |  |


## LensFlareEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## LocalLightEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## LocatorEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SetTransform` |  |  |


## LoggingEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Execute` |  |  |


## LogicVisualEnvironmentEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## MaskVolumeEntity

Inheritance tree: [RenderVolumeEntity](#rendervolumeentity) > [Entity](#entity)


## MathOpEntity

Inheritance tree: [Entity](#entity)


## MeshProxyEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## MixerEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Activate` |  |  |
| `Deactivate` |  |  |


## ModelAnimationEntity

Inheritance tree: [Entity](#entity)


## NotEntity

Inheritance tree: [Entity](#entity)


## ObjectVariationSwitchEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SetVariation2` |  |  |
| `SetVariation1` |  |  |
| `ToggleCurrent` |  |  |


## OccluderMeshEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## OccluderVolumeEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## Or4Entity

Inheritance tree: [Entity](#entity)


## OrEntity

Inheritance tree: [Entity](#entity)


## PhantomPhysicsEntity

Inheritance tree: [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## PhysicsDrivenAnimationEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `OnCollision` |  |  |


## PhysicsEntity

Inheritance tree: [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## PhysicsEntityBase

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## PlatformSplitterEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Impulse` |  |  |
| `Platform_Default` |  |  |


## PointLightEntity

Inheritance tree: [LocalLightEntity](#locallightentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ProfileEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `In` |  |  |


## PropertyCastEntity

Inheritance tree: [Entity](#entity)


## PropertyGateEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Open` |  |  |
| `Close` |  |  |
| `Open` |  |  |


## RagdollEntity

Inheritance tree: [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## RandomDelayEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `In` |  |  |
| `Restart` |  |  |


## RandomEventEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `In` |  |  |


## RandomFloatEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `In` |  |  |


## RandomMultiEventEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `In` |  |  |


## RenderVolumeEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## RigidMeshEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## ScriptEntity

Inheritance tree: [Entity](#entity)


## SelectEventEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `In` |  |  |


## SequenceEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Pause` |  |  |
| `Stop` |  |  |
| `Pause` |  |  |
| `PlayFirstFrame` |  |  |
| `Start` |  |  |


## ServerAimAtOrderEntity

Inheritance tree: [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerAmmoCrateEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `EnableReplenish` |  |  |
| `ShowMarker` |  |  |
| `EnableReplenish` |  |  |
| `HideMarker` |  |  |
| `DisableReplenish` |  |  |


## ServerAnimatedTransformEntity

Inheritance tree: [Entity](#entity)


## ServerAnimationEnumerationChoiceEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Trigger` |  |  |


## ServerAnimationEnumerationEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Trigger` |  |  |


## ServerAreaTriggerEntity

Inheritance tree: [ServerTriggerEntity](#servertriggerentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerArmDisarmAwardEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `GiveDisarmAward` |  |  |


## ServerArtilleryStrikeEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `StartArtilleryStrike` |  |  |
| `OnStartArtilleryStrike` |  |  |
| `StopArtilleryStrike` |  |  |
| `OnStopArtilleryStrike` |  |  |


## ServerAutoSquadEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SetSquadOnPlayer` |  |  |


## ServerAutoTeamEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `EnableAllowedToSpawnOn` |  |  |
| `PlayerEnter` |  |  |
| `DisableAllowedToSpawnOn` |  |  |


## ServerBangerEntity

Inheritance tree: [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Destroy` |  |  |


## ServerBlueprintBundleLoaderEntity

Inheritance tree: [Entity](#entity)


## ServerBlueprintBundleSelectorEntity

Inheritance tree: [Entity](#entity)


## ServerBlueprintBundleStateLogicEntity

Inheritance tree: [Entity](#entity)


## ServerBlueprintEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `StreamIn` |  |  |
| `StreamOut` |  |  |


## ServerBreakableModelEntity

Inheritance tree: [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SpawnPartObjectsOnCollapse` |  |  |
| `Reset` |  |  |
| `Collapse` |  |  |


## ServerBulletEntity

Inheritance tree: [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerCancelOrderEntity

Inheritance tree: [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerCannedScenarioEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `StartCannedAnimation` |  |  |
| `RegisterAnimatableComponent` |  |  |


## ServerCapturePointEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `DisableSpawners` |  |  |
| `EnableCapture` |  |  |
| `DisableSpawners` |  |  |
| `Enable` |  |  |
| `DisableCapture` |  |  |


## ServerChangeReadinessOrderEntity

Inheritance tree: [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerCharacterAnimationEntity

Inheritance tree: [CharacterAnimationEntity](#characteranimationentity) > [Entity](#entity)


## ServerCharacterEntity

Inheritance tree: [ServerControllableEntity](#servercontrollableentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent3p` |  |  |


## ServerCharacterInVehicleScenarioEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `TriggerScenario` |  |  |
| `TriggerActor` |  |  |


## ServerCharacterSpawnEntity

Inheritance tree: [ServerSpawnEntity](#serverspawnentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Spawn` |  |  |
| `HideCharacter` |  |  |
| `Unspawn` |  |  |
| `ShowCharacter` |  |  |


## ServerCharacterStateTriggerEntity

Inheritance tree: [ServerTriggerEntity](#servertriggerentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `CheckPlayerInsideVehicle` |  |  |
| `CheckHealth` |  |  |
| `ShowCharacter` |  |  |
| `SetAmmoOnCharacter` |  |  |
| `CheckHealth` |  |  |
| `CheckPose` |  |  |
| `CheckPlayerOutOfAmmo` |  |  |
| `CheckPlayerInsideVehicle` |  |  |
| `CheckPlayerHoldingRightWeapon` |  |  |
| `MoveCharacter` |  |  |
| `SetHealthOnCharacter` |  |  |
| `CheckPlayerHoldingRightWeapon` |  |  |
| `LeaveCurrentVehicle` |  |  |
| `SetPose` |  |  |
| `HideCharacter` |  |  |


## ServerClearAreaTriggerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ClearArea` |  |  |


## ServerCombatActionTriggerEntity

Inheritance tree: [ServerTriggerEntity](#servertriggerentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerCombatAreaTriggerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerConsumableTriggerEntity

Inheritance tree: [ServerTriggerEntity](#servertriggerentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Consume` |  |  |


## ServerControllableEntity

Inheritance tree: [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## ServerCoopLobbyEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `PlayerEntered` |  |  |


## ServerCoverEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerCoverPrepareFireEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `FireOut` |  |  |
| `FirePeek` |  |  |
| `FireOver` |  |  |
| `Hide` |  |  |
| `FireOut` |  |  |
| `FireBlindOver` |  |  |
| `Disable` |  |  |
| `FireBlindOut` |  |  |


## ServerCustomizeCharacterEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Apply` |  |  |


## ServerCustomizeSoldierEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Apply` |  |  |
| `Characters` |  |  |


## ServerDamageAreaTriggerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `DamageArea` |  |  |
| `ResetDamageTimer` |  |  |


## ServerDeathAreaTriggerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerDebrisCluster

Inheritance tree: [DebrisCluster](#debriscluster) > [Entity](#entity)


## ServerDelayTriggerEntity

Inheritance tree: [ServerTriggerEntity](#servertriggerentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Trigger` |  |  |
| `OnTrigger` |  |  |
| `Trigger` |  |  |
| `Reset` |  |  |


## ServerDynamicAvoidanceEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent` |  |  |


## ServerEventIfSwitchEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Switch` |  |  |
| `Reset` |  |  |
| `Impulse` |  |  |
| `OnImpulseIfTrue` |  |  |
| `OnImpulseIfFalse` |  |  |


## ServerEventMemoryEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ClearMemory` |  |  |
| `FireMemory` |  |  |
| `LoadMemory` |  |  |
| `OnMemoryEvent` |  |  |


## ServerEventSyncEntity

Inheritance tree: [Entity](#entity)


## ServerExplosionEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerExplosionPackEntity

Inheritance tree: [ServerGhostProjectileEntity](#serverghostprojectileentity) > [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Detonate` |  |  |


## ServerFlagCounterEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerFlareEntity

Inheritance tree: [ServerGrenadeEntity](#servergrenadeentity) > [ServerGhostProjectileEntity](#serverghostprojectileentity) > [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerFollowAISoldierOrderEntity

Inheritance tree: [ServerFollowPlayerOrderEntity](#serverfollowplayerorderentity) > [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerFollowClosestHumanOrderEntity

Inheritance tree: [ServerFollowPlayerOrderEntity](#serverfollowplayerorderentity) > [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerFollowPlayerOrderEntity

Inheritance tree: [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerFollowWaypointsEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `TeleportToEnd` |  |  |


## ServerFriendlyFireEntity

Inheritance tree: [Entity](#entity)


## ServerFriendZoneEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Init` |  |  |


## ServerGameEntity

Inheritance tree: [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerGameSplineEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerGhostProjectileEntity

Inheritance tree: [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerGrenadeEntity

Inheritance tree: [ServerGhostProjectileEntity](#serverghostprojectileentity) > [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerGunMasterKillCounterEntity

Inheritance tree: [Entity](#entity)


## ServerHoldGroundOrderEntity

Inheritance tree: [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerHudEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerHumanPlayerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `DisablePlayerSpawn` |  |  |
| `UnSpawnAllSoldiers` |  |  |
| `ConvertToPlayerEvent` |  |  |
| `OnConvertToPlayerEvent` |  |  |
| `DisablePlayerSpawn` |  |  |
| `EnablePlayerSpawn` |  |  |
| `ResetKilledPlayers` |  |  |


## ServerInputRestrictionEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerInteractableStaticModelEntity

Inheritance tree: [ServerStaticModelEntity](#serverstaticmodelentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerInteractionEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |
| `EnableFriendlyInteraction` |  |  |
| `DisableFriendlyInteraction` |  |  |
| `EnableEnemyInteraction` |  |  |
| `DisableEnemyInteraction` |  |  |
| `EnableFriendlyInteraction` |  |  |
| `DisableEnemyInteraction` |  |  |
| `OnDisabledForEnemy` |  |  |
| `EnableFriendlyInteraction` |  |  |
| `OnEnabledForFriendly` |  |  |
| `EnableEnemyInteraction` |  |  |
| `OnEnabledForEnemy` |  |  |
| `DisableFriendlyInteraction` |  |  |
| `OnDisabledForFriendly` |  |  |


## ServerInterludeOrderEntity

Inheritance tree: [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerKillAllEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Impulse` |  |  |


## ServerKillCounterEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Reset` |  |  |


## ServerLadderEntity

Inheritance tree: [ServerStaticModelEntity](#serverstaticmodelentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerLevelControlEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `LoadLevel` |  |  |
| `RestartLevel` |  |  |


## ServerLifeCounterEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `DestructObjective` |  |  |
| `IncreaseReinforce` |  |  |
| `DestructBase` |  |  |
| `DestructObjective` |  |  |
| `DecreaseLife` |  |  |
| `DecreaseLifeParametered` |  |  |


## ServerLookAtTriggerEntity

Inheritance tree: [ServerTriggerEntity](#servertriggerentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerMapMarkerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `StopBlinkMarker` |  |  |
| `ShowMarker` |  |  |
| `StopBlinkMarker` |  |  |
| `HideMarker` |  |  |
| `BlinkMarker` |  |  |


## ServerMedicBagEntity

Inheritance tree: [ServerExplosionPackEntity](#serverexplosionpackentity) > [ServerGhostProjectileEntity](#serverghostprojectileentity) > [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerMedicBagHealingSphereEntity

Inheritance tree: [ServerExplosionPackEntity](#serverexplosionpackentity) > [ServerGhostProjectileEntity](#serverghostprojectileentity) > [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerMeleeEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `EnableMeleeAttack` |  |  |
| `EnableMeleeAttack` |  |  |
| `DisableMeleeTarget` |  |  |
| `DisableMeleeAttack` |  |  |
| `EnableMeleeTarget` |  |  |


## ServerMeleeTriggerEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `TriggerMeleeEvent` |  |  |
| `OnMeleeEventTriggered` |  |  |


## ServerMissileEntity

Inheritance tree: [ServerGhostProjectileEntity](#serverghostprojectileentity) > [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerModelAnimationEntity

Inheritance tree: [ModelAnimationEntity](#modelanimationentity) > [Entity](#entity)


## ServerMultipleActorScenarioEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ForceStart` |  |  |
| `Stop` |  |  |
| `ForceStart` |  |  |
| `TriggerActor1` |  |  |
| `Reset` |  |  |
| `Advance` |  |  |


## ServerMultipleTriggerEntity

Inheritance tree: [ServerTriggerEntity](#servertriggerentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Trigger` |  |  |
| `OnTrigger` |  |  |
| `ResetCount` |  |  |
| `SubtractCount` |  |  |
| `OnReachedZero` |  |  |


## ServerNavPowerSystemEntity

Inheritance tree: [Entity](#entity)


## ServerObjectiveEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ShowObjective` |  |  |
| `HideObjective` |  |  |
| `Success` |  |  |


## ServerOrderEntity

Inheritance tree: [Entity](#entity)


## ServerPatrolOrderEntity

Inheritance tree: [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerPhysicsDrivenAnimationEntity

Inheritance tree: [PhysicsDrivenAnimationEntity](#physicsdrivenanimationentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent3p` |  |  |


## ServerPhysicsEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerPickupEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerPlaceHolderEntity

Inheritance tree: [Entity](#entity)


## ServerPlayerFilterEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `OnTriggerOnlyForPlayer` |  |  |
| `OnTriggeredByHost` |  |  |
| `OnTriggerOnlyForHost` |  |  |


## ServerPlayerInputTriggerEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |
| `TriggerForPlayer` |  |  |


## ServerPlayerTakeOverTriggerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerPredestructionEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerPreRoundEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerProjectileEntity

Inheritance tree: [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerRoundOverEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `TeamWins` |  |  |
| `OnRoundOver` |  |  |
| `RoundStarted` |  |  |


## ServerSaveEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Save` |  |  |


## ServerSaveGameLoadedEntity

Inheritance tree: [Entity](#entity)


## ServerSearchAndDestroyOrderEntity

Inheritance tree: [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerSensingManagerEntity

Inheritance tree: [Entity](#entity)


## ServerShootAtFromCoverEntity

Inheritance tree: [Entity](#entity)


## ServerShootOrderEntity

Inheritance tree: [ServerOrderEntity](#serverorderentity) > [Entity](#entity)


## ServerSoldierEntity

Inheritance tree: [ServerCharacterEntity](#servercharacterentity) > [ServerControllableEntity](#servercontrollableentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ManDown` |  |  |
| `DisableCollision` |  |  |
| `Kill` |  |  |
| `ManDown` |  |  |
| `EnableCollision` |  |  |
| `Revive` |  |  |


## ServerSoldierWeapon

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerSpawnEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `CancelAutoSpawn` |  |  |
| `FireShot` |  |  |
| `FireStop` |  |  |
| `FireShot` |  |  |
| `FireCountermeasure` |  |  |
| `FireStart` |  |  |
| `CancelAutoSpawn` |  |  |
| `Spawn` |  |  |
| `TakeControl` |  |  |
| `Spawn` |  |  |
| `Unspawn` |  |  |
| `ReturnControl` |  |  |


## ServerSpeedEventGateEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Impulse` |  |  |
| `OnImpulse` |  |  |


## ServerSpottingEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Spot` |  |  |


## ServerStartEntity

Inheritance tree: [Entity](#entity)


## ServerStateEventGateEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Impulse` |  |  |
| `OnImpulse` |  |  |
| `OnImpulseDenied` |  |  |


## ServerStatEventTriggerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Trigger` |  |  |


## ServerStaticModelEntity

Inheritance tree: [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Destroy` |  |  |
| `MoveToNextHealthState` |  |  |
| `Reset` |  |  |


## ServerStaticModelGroupEntity

Inheritance tree: [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerStreamGridEntity

Inheritance tree: [Entity](#entity)


## ServerSubLevelEntity

Inheritance tree: [SubLevelEntity](#sublevelentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `StreamIn` |  |  |
| `StreamOut` |  |  |


## ServerSupplySphereEntity

Inheritance tree: [ServerExplosionPackEntity](#serverexplosionpackentity) > [ServerGhostProjectileEntity](#serverghostprojectileentity) > [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerSyncAnimationsEntity

Inheritance tree: [SyncAnimationsEntity](#syncanimationsentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Stop` |  |  |
| `Skip` |  |  |
| `Stop` |  |  |
| `StartedOnClient` |  |  |
| `Start` |  |  |
| `OnExternalTimeStarted` |  |  |
| `Start` |  |  |


## ServerSyncedBoolEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SetTrue` |  |  |
| `OnTrue` |  |  |
| `Toggle` |  |  |
| `SetFalse` |  |  |
| `OnFalse` |  |  |


## ServerSyncedFloatEntity

Inheritance tree: [Entity](#entity)


## ServerSyncedIntEntity

Inheritance tree: [Entity](#entity)


## ServerSyncedSequenceEntity

Inheritance tree: [SequenceEntity](#sequenceentity) > [Entity](#entity)


## ServerSyncedTransformEntity

Inheritance tree: [Entity](#entity)


## ServerTacticalObjectiveEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `BriefPlayer` |  |  |
| `BriefPlayer` |  |  |
| `Team1Wins` |  |  |
| `OnTeam1Wins` |  |  |
| `Team2Wins` |  |  |
| `OnTeam2Wins` |  |  |


## ServerTargetEntity

Inheritance tree: [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerTeamEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerTeamFilterEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `OnTriggeredByMatchingTeam` |  |  |
| `OnTriggeredByMatchingTeam` |  |  |
| `OnTriggerOnlyForSpecifiedTeam` |  |  |


## ServerTerrainEntity

Inheritance tree: [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerTestCaseEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Start` |  |  |
| `OnTestStart` |  |  |
| `Failure` |  |  |
| `Success` |  |  |


## ServerTicketCounterEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `StartRound` |  |  |
| `Reset` |  |  |


## ServerTopPlayersEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SendTopPlayers` |  |  |


## ServerTrackPlayerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SameTrackedPlayer` |  |  |
| `OnSameTrackedPlayer` |  |  |
| `TrackPlayer` |  |  |
| `OnTrackPlayer` |  |  |


## ServerTriggerEntity

Inheritance tree: [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerUnderFireTriggerEntity

Inheritance tree: [ServerTriggerEntity](#servertriggerentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerVegetationTreeEntity

Inheritance tree: [VegetationTreeEntity](#vegetationtreeentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerVehicleEntity

Inheritance tree: [ServerControllableEntity](#servercontrollableentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Destroy` |  |  |
| `EmergencyRepair` |  |  |


## ServerVehicleProjectileEntity

Inheritance tree: [ServerProjectileEntity](#serverprojectileentity) > [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerVehicleSpawnEntity

Inheritance tree: [ServerSpawnEntity](#serverspawnentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SpawnWithPlayer` |  |  |


## ServerVehicleStateTriggerEntity

Inheritance tree: [ServerTriggerEntity](#servertriggerentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `SetLockAmount` |  |  |
| `CheckHealth` |  |  |
| `SetHealthOnVehicle` |  |  |
| `CheckHealth` |  |  |
| `StartVehicleOnGroundCheck` |  |  |
| `StartDestroyObjects` |  |  |
| `SetLockAmount` |  |  |
| `DisableAmmoAmountOverrule` |  |  |
| `EnableAmmoAmountOverrule` |  |  |
| `StopDestroyObjects` |  |  |
| `DisableAmmoAmountOverrule` |  |  |
| `KickOutSoldiers` |  |  |
| `StopVehicleOnGroundCheck` |  |  |


## ServerWarpAnimationEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `RegisterAnimatableComponent` |  |  |
| `SetWantedConnectJointTransform` |  |  |


## ServerWaterEntity

Inheritance tree: [ServerPhysicsEntity](#serverphysicsentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ServerWaypointTriggerEntity

Inheritance tree: [Entity](#entity)


## ServerWeaponStateEntity

Inheritance tree: [WeaponStateEntity](#weaponstateentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `ContinuousQueryStart` |  |  |
| `OneShotQuery` |  |  |
| `ContinuousQueryStop` |  |  |


## SettingEntity

Inheritance tree: [Entity](#entity)


## SlowMotionEntity

Inheritance tree: [Entity](#entity)


## SoundArea

Inheritance tree: [Entity](#entity)


## SoundEffectEntity

Inheritance tree: [EffectEntity](#effectentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Reset` |  |  |
| `Start` |  |  |
| `Stop` |  |  |


## SoundEntity

Inheritance tree: [Entity](#entity)


## SoundPrimeEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Prime` |  |  |
| `OnPrimed` |  |  |
| `OnPrimed` |  |  |


## SoundScopeSetupEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Apply` |  |  |


## SoundStateEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enter` |  |  |
| `Exit` |  |  |


## SpatialEntity

Inheritance tree: [Entity](#entity)


## SpotLightEntity

Inheritance tree: [LocalLightEntity](#locallightentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## StaticEnlightenEntity

Inheritance tree: [Entity](#entity)


## StaticPhysicsEntity

Inheritance tree: [PhysicsEntity](#physicsentity) > [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## StopWatchEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Reset` |  |  |
| `Start` |  |  |
| `Stop` |  |  |


## SubLevelEntity

Inheritance tree: [Entity](#entity)


## SwitchPropertyStringEntity

Inheritance tree: [Entity](#entity)


## SyncAnimationsEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `OnStopped` |  |  |
| `OnFinished` |  |  |
| `OnFinished` |  |  |


## TelemetryTriggerEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Trigger` |  |  |


## TerrainPhysicsEntity

Inheritance tree: [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## ToWorldSpaceTransformEntity

Inheritance tree: [Entity](#entity)


## TrajectoryEntity

Inheritance tree: [Entity](#entity)


## TransformBlendEntity

Inheritance tree: [Entity](#entity)


## TransformEntity

Inheritance tree: [Entity](#entity)


## TransformHubEntity

Inheritance tree: [Entity](#entity)


## TransformModifierEntity

Inheritance tree: [Entity](#entity)


## TransformMultiplierEntity

Inheritance tree: [Entity](#entity)


## TransformSelectorEntity

Inheritance tree: [Entity](#entity)


## TransformSnapToGroundEntity

Inheritance tree: [Entity](#entity)


## TransformSplitterEntity

Inheritance tree: [Entity](#entity)


## Vec3Entity

Inheritance tree: [Entity](#entity)


## Vec3MathOpEntity

Inheritance tree: [Entity](#entity)


## VecSplitterEntity

Inheritance tree: [Entity](#entity)


## VectorShapeEntity

Inheritance tree: [Entity](#entity)


## VegetationTreeEntity

Inheritance tree: [SpatialEntity](#spatialentity) > [Entity](#entity)


## VeniceClientExplosionEntity

Inheritance tree: [ClientExplosionEntity](#clientexplosionentity) > [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## VeniceServerExplosionEntity

Inheritance tree: [ServerExplosionEntity](#serverexplosionentity) > [ServerGameEntity](#servergameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## VisualEnvironmentEffectEntity

Inheritance tree: [EffectEntity](#effectentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Start` |  |  |
| `Stop` |  |  |


## VisualEnvironmentEntity

Inheritance tree: [ClientGameEntity](#clientgameentity) > [GameEntity](#gameentity) > [SpatialEntity](#spatialentity) > [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## VisualTerrainEntity

Inheritance tree: [Entity](#entity)


## VoiceOverConversationGroupEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Enable` |  |  |
| `Disable` |  |  |


## VoiceOverEventEntity

Inheritance tree: [Entity](#entity)

#### Supported events

| Event name | Event type | Description |
| ---------- | ---------- | ----------- |
| `Trigger` |  |  |


## WaterPhysicsEntity

Inheritance tree: [PhysicsEntityBase](#physicsentitybase) > [SpatialEntity](#spatialentity) > [Entity](#entity)


## WeaponStateEntity

Inheritance tree: [Entity](#entity)


## XorEntity

Inheritance tree: [Entity](#entity)


