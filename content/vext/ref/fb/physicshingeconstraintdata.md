---
title: PhysicsHingeConstraintData
---
### Base Classes

[PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsHingeConstraintData()                                                          | Create a new instance of this container type.                                                                                               |
| PhysicsHingeConstraintData(PhysicsHingeConstraintData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PhysicsHingeConstraintData([PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/) other)      | Upcast an instance of type [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/) to [PhysicsHingeConstraintData](/vext/ref/fb/physicshingeconstraintdata/).      |
| PhysicsHingeConstraintData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PhysicsHingeConstraintData](/vext/ref/fb/physicshingeconstraintdata/).                    |
| PhysicsHingeConstraintData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PhysicsHingeConstraintData](/vext/ref/fb/physicshingeconstraintdata/).              |
| PhysicsHingeConstraintData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsHingeConstraintData](/vext/ref/fb/physicshingeconstraintdata/). |

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
| [PhysicsHingeConstraintData](/vext/ref/fb/physicshingeconstraintdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsHingeConstraintData](/vext/ref/fb/physicshingeconstraintdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
