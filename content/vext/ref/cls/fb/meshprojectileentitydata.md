---
title: MeshProjectileEntityData (Frostbite Container)
---
### Base Classes

[ProjectileEntityData](ProjectileEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| MeshProjectileEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| MeshProjectileEntityData(MeshProjectileEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| MeshProjectileEntityData([ProjectileEntityData](ProjectileEntityData) other)        | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [MeshProjectileEntityData](MeshProjectileEntityData).        |
| MeshProjectileEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [MeshProjectileEntityData](MeshProjectileEntityData).      |
| MeshProjectileEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [MeshProjectileEntityData](MeshProjectileEntityData).                    |
| MeshProjectileEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [MeshProjectileEntityData](MeshProjectileEntityData).              |
| MeshProjectileEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MeshProjectileEntityData](MeshProjectileEntityData).                            |
| MeshProjectileEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MeshProjectileEntityData](MeshProjectileEntityData).                    |
| MeshProjectileEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MeshProjectileEntityData](MeshProjectileEntityData).              |
| MeshProjectileEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MeshProjectileEntityData](MeshProjectileEntityData). |

## Properties

| Name                     | Type                               | Description |
| ------------------------ | ---------------------------------- | ----------- |
| initialAngularVelocity   | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| trailEffect              | [EffectBlueprint](EffectBlueprint) |             |
| mesh                     | [MeshAsset](MeshAsset)             |             |
| maxAttachableInclination | number                             |             |
| extraDamping             | bool                               |             |
| isAttachable             | bool                               |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MeshProjectileEntityData](MeshProjectileEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MeshProjectileEntityData](MeshProjectileEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
