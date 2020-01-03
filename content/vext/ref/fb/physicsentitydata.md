---
title: PhysicsEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PhysicsEntityData()                                                          | Create a new instance of this container type.                                                                             |
| PhysicsEntityData(PhysicsEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PhysicsEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PhysicsEntityData](PhysicsEntityData).                            |
| PhysicsEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PhysicsEntityData](PhysicsEntityData).                    |
| PhysicsEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PhysicsEntityData](PhysicsEntityData).              |
| PhysicsEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsEntityData](PhysicsEntityData). |

## Properties

| Name                    | Type                                                   | Description |
| ----------------------- | ------------------------------------------------------ | ----------- |
| inertiaModifier         | [Vec3](/vext/ref/shared/class/Vec3)                      |             |
| scaledAssets            | [HavokAsset](HavokAsset)\[\]                           |             |
| rigidBodies             | [RigidBodyData](RigidBodyData)\[\]                     |             |
| asset                   | [HavokAsset](HavokAsset)                               |             |
| floatPhysics            | [FloatPhysicsData](FloatPhysicsData)                   |             |
| mass                    | number                                                 |             |
| restitution             | number                                                 |             |
| friction                | number                                                 |             |
| linearVelocityDamping   | number                                                 |             |
| angularVelocityDamping  | number                                                 |             |
| proximity               | [ProximityData](ProximityData)                         |             |
| constraints             | [RigidBodyConstraintData](RigidBodyConstraintData)\[\] |             |
| encapsulatePartsInLists | bool                                                   |             |
| movableParts            | bool                                                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsEntityData](PhysicsEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsEntityData](PhysicsEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
