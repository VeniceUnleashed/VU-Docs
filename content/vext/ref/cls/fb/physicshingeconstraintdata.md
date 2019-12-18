---
title: PhysicsHingeConstraintData (Frostbite Container)
---
### Base Classes

[PhysicsConstraintData](PhysicsConstraintData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsHingeConstraintData()                                                          | Create a new instance of this container type.                                                                                               |
| PhysicsHingeConstraintData(PhysicsHingeConstraintData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PhysicsHingeConstraintData([PhysicsConstraintData](PhysicsConstraintData) other)      | Upcast an instance of type [PhysicsConstraintData](PhysicsConstraintData) to [PhysicsHingeConstraintData](PhysicsHingeConstraintData).      |
| PhysicsHingeConstraintData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PhysicsHingeConstraintData](PhysicsHingeConstraintData).                    |
| PhysicsHingeConstraintData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PhysicsHingeConstraintData](PhysicsHingeConstraintData).              |
| PhysicsHingeConstraintData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PhysicsHingeConstraintData](PhysicsHingeConstraintData). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| minAngle        | number |             |
| angularFriction | number |             |
| maxAngle        | number |             |
| hasLimits       | bool   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsHingeConstraintData](PhysicsHingeConstraintData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PhysicsHingeConstraintData](PhysicsHingeConstraintData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
