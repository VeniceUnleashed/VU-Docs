---
title: MissileEntityData
---
### Base Classes

[MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| MissileEntityData()                                                           | Create a new instance of this container type.                                                                              |
| MissileEntityData(MissileEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                   |
| MissileEntityData([MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) other) | Upcast an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) to [MissileEntityData](/vext/ref/fb/missileentitydata/). |
| MissileEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)         | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [MissileEntityData](/vext/ref/fb/missileentitydata/).         |
| MissileEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)       | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [MissileEntityData](/vext/ref/fb/missileentitydata/).       |
| MissileEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                     | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [MissileEntityData](/vext/ref/fb/missileentitydata/).                     |
| MissileEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)               | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [MissileEntityData](/vext/ref/fb/missileentitydata/).               |
| MissileEntityData([EntityData](/vext/ref/fb/entitydata/) other)                             | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MissileEntityData](/vext/ref/fb/missileentitydata/).                             |
| MissileEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MissileEntityData](/vext/ref/fb/missileentitydata/).                     |
| MissileEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MissileEntityData](/vext/ref/fb/missileentitydata/).               |
| MissileEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MissileEntityData](/vext/ref/fb/missileentitydata/).  |

## Properties

| Name                        | Type                                                 | Description |
| --------------------------- | ---------------------------------------------------- | ----------- |
| gravity                     | number                                               |             |
| engineEffect                | [EffectBlueprint](/vext/ref/fb/effectblueprint/)                   |             |
| dudExplosion                | [ExplosionEntityData](/vext/ref/fb/explosionentitydata/)           |             |
| flyBySound                  | [SoundAsset](/vext/ref/fb/soundasset/)                             |             |
| engineStrength              | number                                               |             |
| maxSpeed                    | number                                               |             |
| engineTimeToIgnition        | number                                               |             |
| engineTimeToLive            | number                                               |             |
| timeToActivateGuidingSystem | number                                               |             |
| timeToArm                   | number                                               |             |
| maxTurnAngle                | number                                               |             |
| drag                        | number                                               |             |
| nearTargetDetonation        | [NearTargetDetonationData](/vext/ref/fb/neartargetdetonationdata/) |             |
| defaultTeam                 | [TeamId](/vext/ref/fb/teamid/)                                     |             |
| flyBySoundRadius            | number                                               |             |
| flyBySoundSpeed             | number                                               |             |
| impactImpulse               | number                                               |             |
| damage                      | number                                               |             |
| unguidedData                | [MissileUnguidedData](/vext/ref/fb/missileunguideddata/)           |             |
| warnTarget                  | [WarnTarget](/vext/ref/fb/warntarget/)                             |             |
| lockableInfo                | [MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata/)   |             |
| lockingController           | [LockingControllerData](/vext/ref/fb/lockingcontrollerdata/)       |             |
| warnOnPointingMissile       | bool                                                 |             |
| applyGravityWhenGuided      | bool                                                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MissileEntityData](/vext/ref/fb/missileentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MissileEntityData](/vext/ref/fb/missileentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
