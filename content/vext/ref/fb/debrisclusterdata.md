---
title: DebrisClusterData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DebrisClusterData()                                                          | Create a new instance of this container type.                                                                             |
| DebrisClusterData(DebrisClusterData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DebrisClusterData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DebrisClusterData](DebrisClusterData).                    |
| DebrisClusterData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DebrisClusterData](DebrisClusterData).              |
| DebrisClusterData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DebrisClusterData](DebrisClusterData).                            |
| DebrisClusterData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DebrisClusterData](DebrisClusterData).                    |
| DebrisClusterData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DebrisClusterData](DebrisClusterData).              |
| DebrisClusterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebrisClusterData](DebrisClusterData). |

## Properties

| Name                            | Type                                                       | Description |
| ------------------------------- | ---------------------------------------------------------- | ----------- |
| pushVelocityMul                 | [Vec3](/vext/ref/shared/class/vec3)                          |             |
| pushVelocityRndMul              | [Vec3](/vext/ref/shared/class/vec3)                          |             |
| initRotationRndMul              | [Vec3](/vext/ref/shared/class/vec3)                          |             |
| clusterLifetime                 | number                                                     |             |
| mesh                            | [MeshAsset](MeshAsset)                                     |             |
| compositePartCount              | number                                                     |             |
| maxActivePartsCount             | number                                                     |             |
| partHierarchy                   | [DebrisClusterPartInfoData](DebrisClusterPartInfoData)\[\] |             |
| activationPushForceMul          | number                                                     |             |
| projectileForceTransferMul      | number                                                     |             |
| physicsData                     | [PhysicsEntityData](PhysicsEntityData)                     |             |
| explosion                       | [GameEntityData](GameEntityData)                           |             |
| activationEffect                | [EffectBlueprint](EffectBlueprint)                         |             |
| effect                          | [EffectBlueprint](EffectBlueprint)                         |             |
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
| [DebrisClusterData](DebrisClusterData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebrisClusterData](DebrisClusterData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
