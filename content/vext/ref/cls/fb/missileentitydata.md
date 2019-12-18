---
title: MissileEntityData (Frostbite Container)
---
### Base Classes

[MeshProjectileEntityData](MeshProjectileEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| MissileEntityData()                                                           | Create a new instance of this container type.                                                                              |
| MissileEntityData(MissileEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                   |
| MissileEntityData([MeshProjectileEntityData](MeshProjectileEntityData) other) | Upcast an instance of type [MeshProjectileEntityData](MeshProjectileEntityData) to [MissileEntityData](MissileEntityData). |
| MissileEntityData([ProjectileEntityData](ProjectileEntityData) other)         | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [MissileEntityData](MissileEntityData).         |
| MissileEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)       | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [MissileEntityData](MissileEntityData).       |
| MissileEntityData([GameEntityData](GameEntityData) other)                     | Upcast an instance of type [GameEntityData](GameEntityData) to [MissileEntityData](MissileEntityData).                     |
| MissileEntityData([SpatialEntityData](SpatialEntityData) other)               | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [MissileEntityData](MissileEntityData).               |
| MissileEntityData([EntityData](EntityData) other)                             | Upcast an instance of type [EntityData](EntityData) to [MissileEntityData](MissileEntityData).                             |
| MissileEntityData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [MissileEntityData](MissileEntityData).                     |
| MissileEntityData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MissileEntityData](MissileEntityData).               |
| MissileEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MissileEntityData](MissileEntityData).  |

## Properties

| Name                        | Type                                                 | Description |
| --------------------------- | ---------------------------------------------------- | ----------- |
| gravity                     | number                                               |             |
| engineEffect                | [EffectBlueprint](EffectBlueprint)                   |             |
| dudExplosion                | [ExplosionEntityData](ExplosionEntityData)           |             |
| flyBySound                  | [SoundAsset](SoundAsset)                             |             |
| engineStrength              | number                                               |             |
| maxSpeed                    | number                                               |             |
| engineTimeToIgnition        | number                                               |             |
| engineTimeToLive            | number                                               |             |
| timeToActivateGuidingSystem | number                                               |             |
| timeToArm                   | number                                               |             |
| maxTurnAngle                | number                                               |             |
| drag                        | number                                               |             |
| nearTargetDetonation        | [NearTargetDetonationData](NearTargetDetonationData) |             |
| defaultTeam                 | [TeamId](TeamId)                                     |             |
| flyBySoundRadius            | number                                               |             |
| flyBySoundSpeed             | number                                               |             |
| impactImpulse               | number                                               |             |
| damage                      | number                                               |             |
| unguidedData                | [MissileUnguidedData](MissileUnguidedData)           |             |
| warnTarget                  | [WarnTarget](WarnTarget)                             |             |
| lockableInfo                | [MissileLockableInfoData](MissileLockableInfoData)   |             |
| lockingController           | [LockingControllerData](LockingControllerData)       |             |
| warnOnPointingMissile       | bool                                                 |             |
| applyGravityWhenGuided      | bool                                                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MissileEntityData](MissileEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MissileEntityData](MissileEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
