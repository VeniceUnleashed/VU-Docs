---
title: WorldPartInclusion
---
### Base Classes

[SubWorldInclusion](SubWorldInclusion)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WorldPartInclusion()                                                          | Create a new instance of this container type.                                                                               |
| WorldPartInclusion(WorldPartInclusion other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WorldPartInclusion([SubWorldInclusion](SubWorldInclusion) other)              | Upcast an instance of type [SubWorldInclusion](SubWorldInclusion) to [WorldPartInclusion](WorldPartInclusion).              |
| WorldPartInclusion([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [WorldPartInclusion](WorldPartInclusion).                                      |
| WorldPartInclusion([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldPartInclusion](WorldPartInclusion). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WorldPartInclusion](WorldPartInclusion) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldPartInclusion](WorldPartInclusion) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
