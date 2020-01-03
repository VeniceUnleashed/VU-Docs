---
title: VehicleEntityData
---
### Base Classes

[ControllableEntityData](ControllableEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| VehicleEntityData()                                                          | Create a new instance of this container type.                                                                             |
| VehicleEntityData(VehicleEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| VehicleEntityData([ControllableEntityData](ControllableEntityData) other)    | Upcast an instance of type [ControllableEntityData](ControllableEntityData) to [VehicleEntityData](VehicleEntityData).    |
| VehicleEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [VehicleEntityData](VehicleEntityData).      |
| VehicleEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [VehicleEntityData](VehicleEntityData).                    |
| VehicleEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [VehicleEntityData](VehicleEntityData).              |
| VehicleEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VehicleEntityData](VehicleEntityData).                            |
| VehicleEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleEntityData](VehicleEntityData).                    |
| VehicleEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleEntityData](VehicleEntityData).              |
| VehicleEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleEntityData](VehicleEntityData). |

## Properties

| Name                               | Type                                               | Description |
| ---------------------------------- | -------------------------------------------------- | ----------- |
| criticallyDamagedEffectPosition    | [Vec3](/vext/ref/shared/class/Vec3)                  |             |
| flirKeyColor                       | [Vec3](/vext/ref/shared/class/Vec3)                  |             |
| preExplosionEffectPosition         | [Vec3](/vext/ref/shared/class/Vec3)                  |             |
| interactionOffset                  | [Vec3](/vext/ref/shared/class/Vec3)                  |             |
| disabledDamageThreshold            | number                                             |             |
| controllableType                   | string                                             |             |
| preDestructionDamageThreshold      | number                                             |             |
| rearHealthZone                     | [VehicleHealthZoneData](VehicleHealthZoneData)     |             |
| leftHealthZone                     | [VehicleHealthZoneData](VehicleHealthZoneData)     |             |
| rightHealthZone                    | [VehicleHealthZoneData](VehicleHealthZoneData)     |             |
| minSpeedForMineActivation          | number                                             |             |
| frontHealthZone                    | [VehicleHealthZoneData](VehicleHealthZoneData)     |             |
| upsideDownDamage                   | number                                             |             |
| waterDamageOffset                  | number                                             |             |
| armorMultiplier                    | number                                             |             |
| regenerationDelayMultiplier        | number                                             |             |
| regenerationRateMultiplier         | number                                             |             |
| emergencyRepairHealth              | number                                             |             |
| decayDelay                         | number                                             |             |
| decayRate                          | number                                             |             |
| belowWaterDamageDelay              | number                                             |             |
| criticallyDamagedEffect            | [EffectBlueprint](EffectBlueprint)                 |             |
| regenerationRate                   | number                                             |             |
| criticalDamageTime                 | number                                             |             |
| preExplosionEffect                 | [EffectBlueprint](EffectBlueprint)                 |             |
| regenerationDelay                  | number                                             |             |
| preExplosionTime                   | number                                             |             |
| explosion                          | [ExplosionEntityData](ExplosionEntityData)         |             |
| mesh                               | [CompositeMeshAsset](CompositeMeshAsset)           |             |
| cockpitMesh                        | [ObjectBlueprint](ObjectBlueprint)                 |             |
| velocityDamageMagnifier            | number                                             |             |
| exitSpeedThreshold                 | number                                             |             |
| hudData                            | [VehicleHudData](VehicleHudData)                   |             |
| nameSid                            | string                                             |             |
| maxPlayersInVehicle                | number                                             |             |
| nametagHeightScale                 | number                                             |             |
| sound                              | [VehicleSoundData](VehicleSoundData)               |             |
| upsideDownDamageDelay              | number                                             |             |
| upsideDownAngle                    | number                                             |             |
| waterDamage                        | number                                             |             |
| lockingTimeMultiplier              | number                                             |             |
| nametagHeightOffset                | number                                             |             |
| highAltitudeLockHeight             | number                                             |             |
| velocityDamageThreshold            | number                                             |             |
| voiceOverInfo                      | [EntityVoiceOverInfo](EntityVoiceOverInfo)         |             |
| exitCameraSwitchDelay              | number                                             |             |
| killSoldierCollisionSpeedThreshold | number                                             |             |
| exitDirectionSpeedThreshold        | number                                             |             |
| angleOfImpact                      | [AngleOfImpactData](AngleOfImpactData)             |             |
| vehicleLockableInfo                | [VehicleLockableInfoData](VehicleLockableInfoData) |             |
| flirValue                          | number                                             |             |
| mpMode                             | [MPModeData](MPModeData)                           |             |
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
| [VehicleEntityData](VehicleEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleEntityData](VehicleEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
