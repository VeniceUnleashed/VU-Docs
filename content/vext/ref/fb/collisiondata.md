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
| CollisionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CollisionData](CollisionData). |

## Properties

| Name                     | Type                     | Description |
| ------------------------ | ------------------------ | ----------- |
| damageAtVerticalVelocity | [ValueAtX](ValueAtX)\[\] |             |
| damageAtHorizVelocity    | [ValueAtX](ValueAtX)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [CollisionData](CollisionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CollisionData](CollisionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
