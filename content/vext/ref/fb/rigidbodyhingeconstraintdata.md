---
title: RigidBodyHingeConstraintData
---
### Base Classes

[RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| RigidBodyHingeConstraintData()                                                          | Create a new instance of this container type.                                                                                                   |
| RigidBodyHingeConstraintData(RigidBodyHingeConstraintData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| RigidBodyHingeConstraintData([RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata/) other)  | Upcast an instance of type [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata/) to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata/).  |
| RigidBodyHingeConstraintData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata/).                    |
| RigidBodyHingeConstraintData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata/).              |
| RigidBodyHingeConstraintData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata/). |

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
| [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
