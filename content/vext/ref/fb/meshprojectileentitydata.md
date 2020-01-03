---
title: MeshProjectileEntityData
---
### Base Classes

[ProjectileEntityData](/vext/ref/fb/projectileentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| MeshProjectileEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| MeshProjectileEntityData(MeshProjectileEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| MeshProjectileEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)        | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/).        |
| MeshProjectileEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/).      |
| MeshProjectileEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/).                    |
| MeshProjectileEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/).              |
| MeshProjectileEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/).                            |
| MeshProjectileEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/).                    |
| MeshProjectileEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/).              |
| MeshProjectileEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/). |

## Properties

| Name                     | Type                               | Description |
| ------------------------ | ---------------------------------- | ----------- |
| initialAngularVelocity   | [Vec3](/vext/ref/shared/class/vec3)  |             |
| trailEffect              | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| mesh                     | [MeshAsset](/vext/ref/fb/meshasset/)             |             |
| maxAttachableInclination | number                             |             |
| extraDamping             | bool                               |             |
| isAttachable             | bool                               |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
