---
title: PhysicsConeConstraintData (Frostbite Container)
---
### Base Classes

[PhysicsConstraintData](PhysicsConstraintData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsConeConstraintData()                                                          | Create a new instance of this container type.                                                                                             |
| PhysicsConeConstraintData(PhysicsConeConstraintData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PhysicsConeConstraintData([PhysicsConstraintData](PhysicsConstraintData) other)      | Upcast an instance of type [PhysicsConstraintData](PhysicsConstraintData) to [PhysicsConeConstraintData](PhysicsConeConstraintData).      |
| PhysicsConeConstraintData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PhysicsConeConstraintData](PhysicsConeConstraintData).                    |
| PhysicsConeConstraintData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PhysicsConeConstraintData](PhysicsConeConstraintData).              |
| PhysicsConeConstraintData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PhysicsConeConstraintData](PhysicsConeConstraintData). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| minAngle        | number |             |
| angularFriction | number |             |
| maxAngle        | number |             |
| hasLimits       | bool   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PhysicsConeConstraintData](PhysicsConeConstraintData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PhysicsConeConstraintData](PhysicsConeConstraintData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
