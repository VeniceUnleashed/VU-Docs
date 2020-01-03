---
title: DebrisClusterData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DebrisClusterData()                                                          | Create a new instance of this container type.                                                                             |
| DebrisClusterData(DebrisClusterData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DebrisClusterData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata/).                    |
| DebrisClusterData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata/).              |
| DebrisClusterData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata/).                            |
| DebrisClusterData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata/).                    |
| DebrisClusterData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata/).              |
| DebrisClusterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata/). |

## Properties

| Name                            | Type                                                       | Description |
| ------------------------------- | ---------------------------------------------------------- | ----------- |
| pushVelocityMul                 | [Vec3](/vext/ref/shared/class/vec3)                          |             |
| pushVelocityRndMul              | [Vec3](/vext/ref/shared/class/vec3)                          |             |
| initRotationRndMul              | [Vec3](/vext/ref/shared/class/vec3)                          |             |
| clusterLifetime                 | number                                                     |             |
| mesh                            | [MeshAsset](/vext/ref/fb/meshasset/)                                     |             |
| compositePartCount              | number                                                     |             |
| maxActivePartsCount             | number                                                     |             |
| partHierarchy                   | [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata/)\[\] |             |
| activationPushForceMul          | number                                                     |             |
| projectileForceTransferMul      | number                                                     |             |
| physicsData                     | [PhysicsEntityData](/vext/ref/fb/physicsentitydata/)                     |             |
| explosion                       | [GameEntityData](/vext/ref/fb/gameentitydata/)                           |             |
| activationEffect                | [EffectBlueprint](/vext/ref/fb/effectblueprint/)                         |             |
| effect                          | [EffectBlueprint](/vext/ref/fb/effectblueprint/)                         |             |
| onPartCollisionSpeedThreshold   | number                                                     |             |
| partialDestruction              | bool                                                       |             |
| clientSideOnly                  | bool                                                       |             |
| onPartCollisionEnable           | bool                                                       |             |
| noCollision                     | bool                                                       |             |
| killPartsOnCollision            | bool                                                       |             |
| deactivatePartsOnSleep          | bool                                                       |             |
| activateOnSpawn                 | bool                                                       |             |
| inEffectWorldOnly               | bool                                                       |             |
| spawnExplosionOnFirstImpactOnly | bool                                                       |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [DebrisClusterData](/vext/ref/fb/debrisclusterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebrisClusterData](/vext/ref/fb/debrisclusterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
