---
title: VehicleEntityData
---
### Base Classes

[ControllableEntityData](/vext/ref/fb/controllableentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| VehicleEntityData()                                                          | Create a new instance of this container type.                                                                             |
| VehicleEntityData(VehicleEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| VehicleEntityData([ControllableEntityData](/vext/ref/fb/controllableentitydata/) other)    | Upcast an instance of type [ControllableEntityData](/vext/ref/fb/controllableentitydata/) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata/).    |
| VehicleEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata/).      |
| VehicleEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata/).                    |
| VehicleEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata/).              |
| VehicleEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata/).                            |
| VehicleEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata/).                    |
| VehicleEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata/).              |
| VehicleEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata/). |

## Properties

| Name                               | Type                                               | Description |
| ---------------------------------- | -------------------------------------------------- | ----------- |
| criticallyDamagedEffectPosition    | [Vec3](/vext/ref/shared/class/vec3)                  |             |
| flirKeyColor                       | [Vec3](/vext/ref/shared/class/vec3)                  |             |
| preExplosionEffectPosition         | [Vec3](/vext/ref/shared/class/vec3)                  |             |
| interactionOffset                  | [Vec3](/vext/ref/shared/class/vec3)                  |             |
| disabledDamageThreshold            | number                                             |             |
| controllableType                   | string                                             |             |
| preDestructionDamageThreshold      | number                                             |             |
| rearHealthZone                     | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata/)     |             |
| leftHealthZone                     | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata/)     |             |
| rightHealthZone                    | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata/)     |             |
| minSpeedForMineActivation          | number                                             |             |
| frontHealthZone                    | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata/)     |             |
| upsideDownDamage                   | number                                             |             |
| waterDamageOffset                  | number                                             |             |
| armorMultiplier                    | number                                             |             |
| regenerationDelayMultiplier        | number                                             |             |
| regenerationRateMultiplier         | number                                             |             |
| emergencyRepairHealth              | number                                             |             |
| decayDelay                         | number                                             |             |
| decayRate                          | number                                             |             |
| belowWaterDamageDelay              | number                                             |             |
| criticallyDamagedEffect            | [EffectBlueprint](/vext/ref/fb/effectblueprint/)                 |             |
| regenerationRate                   | number                                             |             |
| criticalDamageTime                 | number                                             |             |
| preExplosionEffect                 | [EffectBlueprint](/vext/ref/fb/effectblueprint/)                 |             |
| regenerationDelay                  | number                                             |             |
| preExplosionTime                   | number                                             |             |
| explosion                          | [ExplosionEntityData](/vext/ref/fb/explosionentitydata/)         |             |
| mesh                               | [CompositeMeshAsset](/vext/ref/fb/compositemeshasset/)           |             |
| cockpitMesh                        | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)                 |             |
| velocityDamageMagnifier            | number                                             |             |
| exitSpeedThreshold                 | number                                             |             |
| hudData                            | [VehicleHudData](/vext/ref/fb/vehiclehuddata/)                   |             |
| nameSid                            | string                                             |             |
| maxPlayersInVehicle                | number                                             |             |
| nametagHeightScale                 | number                                             |             |
| sound                              | [VehicleSoundData](/vext/ref/fb/vehiclesounddata/)               |             |
| upsideDownDamageDelay              | number                                             |             |
| upsideDownAngle                    | number                                             |             |
| waterDamage                        | number                                             |             |
| lockingTimeMultiplier              | number                                             |             |
| nametagHeightOffset                | number                                             |             |
| highAltitudeLockHeight             | number                                             |             |
| velocityDamageThreshold            | number                                             |             |
| voiceOverInfo                      | [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo/)         |             |
| exitCameraSwitchDelay              | number                                             |             |
| killSoldierCollisionSpeedThreshold | number                                             |             |
| exitDirectionSpeedThreshold        | number                                             |             |
| angleOfImpact                      | [AngleOfImpactData](/vext/ref/fb/angleofimpactdata/)             |             |
| vehicleLockableInfo                | [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata/) |             |
| flirValue                          | number                                             |             |
| mpMode                             | [MPModeData](/vext/ref/fb/mpmodedata/)                           |             |
| ignoreSoldierCollisionNormal       | bool                                               |             |
| showPlayerHealth                   | bool                                               |             |
| foregroundRenderCockpitMesh        | bool                                               |             |
| renderVehicleMesh                  | bool                                               |             |
| isAffectedByEMP                    | bool                                               |             |
| throwOutSoldierInsideOnWaterDamage | bool                                               |             |
| useAsTeamSpawner                   | bool                                               |             |
| isLockable                         | bool                                               |             |
| choseExitPointByDirection          | bool                                               |             |
| healthZonesShareDamage             | bool                                               |             |
| neverReportVehicleAsEmpty          | bool                                               |             |
| exitAllowed                        | bool                                               |             |
| useLowAltitudeHeatSignature        | bool                                               |             |
| allowVehicleOutsideCombatAreas     | bool                                               |             |
| enableGroundmapLighting            | bool                                               |             |
| motionBlurMask                     | bool                                               |             |
| useProtectedShields                | bool                                               |             |
| useDriverEyePosForNametagPos       | bool                                               |             |
| equipmentFakeVehicle               | bool                                               |             |
| explosionPacksAttachable           | bool                                               |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleEntityData](/vext/ref/fb/vehicleentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleEntityData](/vext/ref/fb/vehicleentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
