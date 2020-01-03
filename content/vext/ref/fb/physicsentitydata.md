---
title: PhysicsEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PhysicsEntityData()                                                          | Create a new instance of this container type.                                                                             |
| PhysicsEntityData(PhysicsEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PhysicsEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PhysicsEntityData](/vext/ref/fb/physicsentitydata/).                            |
| PhysicsEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PhysicsEntityData](/vext/ref/fb/physicsentitydata/).                    |
| PhysicsEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PhysicsEntityData](/vext/ref/fb/physicsentitydata/).              |
| PhysicsEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsEntityData](/vext/ref/fb/physicsentitydata/). |

## Properties

| Name                    | Type                                                   | Description |
| ----------------------- | ------------------------------------------------------ | ----------- |
| inertiaModifier         | [Vec3](/vext/ref/shared/class/vec3)                      |             |
| scaledAssets            | [HavokAsset](/vext/ref/fb/havokasset/)\[\]                           |             |
| rigidBodies             | [RigidBodyData](/vext/ref/fb/rigidbodydata/)\[\]                     |             |
| asset                   | [HavokAsset](/vext/ref/fb/havokasset/)                               |             |
| floatPhysics            | [FloatPhysicsData](/vext/ref/fb/floatphysicsdata/)                   |             |
| mass                    | number                                                 |             |
| restitution             | number                                                 |             |
| friction                | number                                                 |             |
| linearVelocityDamping   | number                                                 |             |
| angularVelocityDamping  | number                                                 |             |
| proximity               | [ProximityData](/vext/ref/fb/proximitydata/)                         |             |
| constraints             | [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata/)\[\] |             |
| encapsulatePartsInLists | bool                                                   |             |
| movableParts            | bool                                                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsEntityData](/vext/ref/fb/physicsentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsEntityData](/vext/ref/fb/physicsentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
