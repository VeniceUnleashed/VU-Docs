---
title: PhysicsConstraintData (Frostbite Container)
---
### Base Classes

[GameObjectData](GameObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsConstraintData()                                                          | Create a new instance of this container type.                                                                                     |
| PhysicsConstraintData(PhysicsConstraintData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| PhysicsConstraintData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PhysicsConstraintData](PhysicsConstraintData).                    |
| PhysicsConstraintData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PhysicsConstraintData](PhysicsConstraintData).              |
| PhysicsConstraintData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PhysicsConstraintData](PhysicsConstraintData). |

## Properties

| Name              | Type                                                    | Description |
| ----------------- | ------------------------------------------------------- | ----------- |
| transform         | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| constrainedObject | [ReferenceObjectData](ReferenceObjectData)              |             |
| breakThreshold    | number                                                  |             |
| isBreakable       | bool                                                    |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsConstraintData](PhysicsConstraintData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PhysicsConstraintData](PhysicsConstraintData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
