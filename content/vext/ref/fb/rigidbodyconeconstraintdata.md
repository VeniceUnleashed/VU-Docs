---
title: RigidBodyConeConstraintData
---
### Base Classes

[RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| RigidBodyConeConstraintData()                                                          | Create a new instance of this container type.                                                                                                 |
| RigidBodyConeConstraintData(RigidBodyConeConstraintData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| RigidBodyConeConstraintData([RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata/) other)  | Upcast an instance of type [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata/) to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata/).  |
| RigidBodyConeConstraintData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata/).                    |
| RigidBodyConeConstraintData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata/).              |
| RigidBodyConeConstraintData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata/). |

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
| [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
