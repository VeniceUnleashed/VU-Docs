---
title: ExplosionEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ExplosionEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| ExplosionEntityData(ExplosionEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ExplosionEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata/).                    |
| ExplosionEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata/).              |
| ExplosionEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata/).                            |
| ExplosionEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata/).                    |
| ExplosionEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata/).              |
| ExplosionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata/). |

## Properties

| Name                                  | Type                                                               | Description |
| ------------------------------------- | ------------------------------------------------------------------ | ----------- |
| detonationEffect                      | [EffectBlueprint](/vext/ref/fb/effectblueprint/)                                 |             |
| blastImpulse                          | number                                                             |             |
| maskVolume                            | [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata/)                       |             |
| destructionMaskVolume                 | [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata/) |             |
| materialPair                          | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/)                     |             |
| damageIndicationType                  | [DamageIndicationType](/vext/ref/fb/damageindicationtype/)                       |             |
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
| [ExplosionEntityData](/vext/ref/fb/explosionentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ExplosionEntityData](/vext/ref/fb/explosionentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
