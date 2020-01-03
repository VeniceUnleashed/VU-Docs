---
title: CollisionData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| CollisionData()                                                          | Create a new instance of this container type.                                                                     |
| CollisionData(CollisionData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| CollisionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CollisionData](/vext/ref/fb/collisiondata/). |

## Properties

| Name                     | Type                     | Description |
| ------------------------ | ------------------------ | ----------- |
| damageAtVerticalVelocity | [ValueAtX](/vext/ref/fb/valueatx/)\[\] |             |
| damageAtHorizVelocity    | [ValueAtX](/vext/ref/fb/valueatx/)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [CollisionData](/vext/ref/fb/collisiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CollisionData](/vext/ref/fb/collisiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
