---
title: WorldPartInclusion
---
### Base Classes

[SubWorldInclusion](/vext/ref/fb/subworldinclusion/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WorldPartInclusion()                                                          | Create a new instance of this container type.                                                                               |
| WorldPartInclusion(WorldPartInclusion other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WorldPartInclusion([SubWorldInclusion](/vext/ref/fb/subworldinclusion/) other)              | Upcast an instance of type [SubWorldInclusion](/vext/ref/fb/subworldinclusion/) to [WorldPartInclusion](/vext/ref/fb/worldpartinclusion/).              |
| WorldPartInclusion([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [WorldPartInclusion](/vext/ref/fb/worldpartinclusion/).                                      |
| WorldPartInclusion([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldPartInclusion](/vext/ref/fb/worldpartinclusion/). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WorldPartInclusion](/vext/ref/fb/worldpartinclusion/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldPartInclusion](/vext/ref/fb/worldpartinclusion/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
