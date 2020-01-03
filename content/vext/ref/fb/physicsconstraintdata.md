---
title: PhysicsConstraintData
---
### Base Classes

[GameObjectData](/vext/ref/fb/gameobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsConstraintData()                                                          | Create a new instance of this container type.                                                                                     |
| PhysicsConstraintData(PhysicsConstraintData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| PhysicsConstraintData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/).                    |
| PhysicsConstraintData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/).              |
| PhysicsConstraintData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/). |

## Properties

| Name              | Type                                                    | Description |
| ----------------- | ------------------------------------------------------- | ----------- |
| transform         | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| constrainedObject | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/)              |             |
| breakThreshold    | number                                                  |             |
| isBreakable       | bool                                                    |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
