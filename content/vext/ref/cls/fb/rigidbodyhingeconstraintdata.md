---
title: RigidBodyHingeConstraintData (Frostbite Container)
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
| RigidBodyHingeConstraintData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RigidBodyHingeConstraintData](RigidBodyHingeConstraintData). |

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
| [RigidBodyHingeConstraintData](RigidBodyHingeConstraintData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RigidBodyHingeConstraintData](RigidBodyHingeConstraintData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
