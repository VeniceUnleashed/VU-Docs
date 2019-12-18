---
title: RigidBodyConstraintData (Frostbite Container)
---
### Base Classes

[GameObjectData](GameObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| RigidBodyConstraintData()                                                          | Create a new instance of this container type.                                                                                         |
| RigidBodyConstraintData(RigidBodyConstraintData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| RigidBodyConstraintData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RigidBodyConstraintData](RigidBodyConstraintData).                    |
| RigidBodyConstraintData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RigidBodyConstraintData](RigidBodyConstraintData).              |
| RigidBodyConstraintData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RigidBodyConstraintData](RigidBodyConstraintData). |

## Properties

| Name           | Type                                                    | Description |
| -------------- | ------------------------------------------------------- | ----------- |
| transform      | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| parentBody     | [DataContainer](/vext/ref/cls/shr/DataContainer)     |             |
| breakThreshold | number                                                  |             |
| isBreakable    | bool                                                    |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RigidBodyConstraintData](RigidBodyConstraintData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RigidBodyConstraintData](RigidBodyConstraintData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
