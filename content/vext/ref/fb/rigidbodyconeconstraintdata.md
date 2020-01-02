---
title: RigidBodyConeConstraintData
---
### Base Classes

[RigidBodyConstraintData](RigidBodyConstraintData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| RigidBodyConeConstraintData()                                                          | Create a new instance of this container type.                                                                                                 |
| RigidBodyConeConstraintData(RigidBodyConeConstraintData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| RigidBodyConeConstraintData([RigidBodyConstraintData](RigidBodyConstraintData) other)  | Upcast an instance of type [RigidBodyConstraintData](RigidBodyConstraintData) to [RigidBodyConeConstraintData](RigidBodyConeConstraintData).  |
| RigidBodyConeConstraintData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RigidBodyConeConstraintData](RigidBodyConeConstraintData).                    |
| RigidBodyConeConstraintData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RigidBodyConeConstraintData](RigidBodyConeConstraintData).              |
| RigidBodyConeConstraintData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyConeConstraintData](RigidBodyConeConstraintData). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| minAngle        | number |             |
| angularFriction | number |             |
| maxAngle        | number |             |
| hasLimits       | bool   |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RigidBodyConeConstraintData](RigidBodyConeConstraintData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RigidBodyConeConstraintData](RigidBodyConeConstraintData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
