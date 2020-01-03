---
title: PhysicsConeConstraintData
---
### Base Classes

[PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsConeConstraintData()                                                          | Create a new instance of this container type.                                                                                             |
| PhysicsConeConstraintData(PhysicsConeConstraintData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PhysicsConeConstraintData([PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/) other)      | Upcast an instance of type [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata/) to [PhysicsConeConstraintData](/vext/ref/fb/physicsconeconstraintdata/).      |
| PhysicsConeConstraintData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PhysicsConeConstraintData](/vext/ref/fb/physicsconeconstraintdata/).                    |
| PhysicsConeConstraintData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PhysicsConeConstraintData](/vext/ref/fb/physicsconeconstraintdata/).              |
| PhysicsConeConstraintData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsConeConstraintData](/vext/ref/fb/physicsconeconstraintdata/). |

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
| [PhysicsConeConstraintData](/vext/ref/fb/physicsconeconstraintdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsConeConstraintData](/vext/ref/fb/physicsconeconstraintdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
