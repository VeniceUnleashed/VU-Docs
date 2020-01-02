---
title: RigidBodyHingeConstraintData
---
### Base Classes

[RigidBodyConstraintData](RigidBodyConstraintData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| RigidBodyHingeConstraintData()                                                          | Create a new instance of this container type.                                                                                                   |
| RigidBodyHingeConstraintData(RigidBodyHingeConstraintData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| RigidBodyHingeConstraintData([RigidBodyConstraintData](RigidBodyConstraintData) other)  | Upcast an instance of type [RigidBodyConstraintData](RigidBodyConstraintData) to [RigidBodyHingeConstraintData](RigidBodyHingeConstraintData).  |
| RigidBodyHingeConstraintData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RigidBodyHingeConstraintData](RigidBodyHingeConstraintData).                    |
| RigidBodyHingeConstraintData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RigidBodyHingeConstraintData](RigidBodyHingeConstraintData).              |
| RigidBodyHingeConstraintData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyHingeConstraintData](RigidBodyHingeConstraintData). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| minAngle        | number |             |
| angularFriction | number |             |
| maxAngle        | number |             |
| hasLimits       | bool   |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [RigidBodyHingeConstraintData](RigidBodyHingeConstraintData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RigidBodyHingeConstraintData](RigidBodyHingeConstraintData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
