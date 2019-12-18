---
title: ExplosionEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ExplosionEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| ExplosionEntityData(ExplosionEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ExplosionEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [ExplosionEntityData](ExplosionEntityData).                    |
| ExplosionEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [ExplosionEntityData](ExplosionEntityData).              |
| ExplosionEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ExplosionEntityData](ExplosionEntityData).                            |
| ExplosionEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ExplosionEntityData](ExplosionEntityData).                    |
| ExplosionEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ExplosionEntityData](ExplosionEntityData).              |
| ExplosionEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ExplosionEntityData](ExplosionEntityData). |

## Properties

| Name                                  | Type                                                               | Description |
| ------------------------------------- | ------------------------------------------------------------------ | ----------- |
| detonationEffect                      | [EffectBlueprint](EffectBlueprint)                                 |             |
| blastImpulse                          | number                                                             |             |
| maskVolume                            | [MaskVolumeEntityData](MaskVolumeEntityData)                       |             |
| destructionMaskVolume                 | [DestructionMaskVolumeEntityData](DestructionMaskVolumeEntityData) |             |
| materialPair                          | [MaterialContainerPair](MaterialContainerPair)                     |             |
| damageIndicationType                  | [DamageIndicationType](DamageIndicationType)                       |             |
| empTime                               | number                                                             |             |
| maxOcclusionRaycastRadius             | number                                                             |             |
| innerBlastRadius                      | number                                                             |             |
| blastDamage                           | number                                                             |             |
| blastRadius                           | number                                                             |             |
| shockwaveImpulse                      | number                                                             |             |
| spawnDelay                            | number                                                             |             |
| shockwaveDamage                       | number                                                             |             |
| shockwaveRadius                       | number                                                             |             |
| cameraShockwaveRadius                 | number                                                             |             |
| shockwaveTime                         | number                                                             |             |
| disableOcclusion                      | bool                                                               |             |
| disableStaticEntityOcclusion          | bool                                                               |             |
| useEntityTransformForDetonationEffect | bool                                                               |             |
| hasStunEffect                         | bool                                                               |             |
| triggerImpairedHearing                | bool                                                               |             |
| detonateOnce                          | bool                                                               |             |
| showOnMinimap                         | bool                                                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ExplosionEntityData](ExplosionEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ExplosionEntityData](ExplosionEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
