---
title: VeniceMatchmakingLevelDescriptionComponent
---
### Base Classes

[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                              | Description                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| VeniceMatchmakingLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                                  |
| VeniceMatchmakingLevelDescriptionComponent(VeniceMatchmakingLevelDescriptionComponent other)             | Create a reference copy of an instance of the same type.                                                                                                                       |
| VeniceMatchmakingLevelDescriptionComponent([LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) other) | Upcast an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) to [VeniceMatchmakingLevelDescriptionComponent](/vext/ref/fb/venicematchmakingleveldescriptioncomponent/). |
| VeniceMatchmakingLevelDescriptionComponent([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceMatchmakingLevelDescriptionComponent](/vext/ref/fb/venicematchmakingleveldescriptioncomponent/).    |

## Properties

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| mod      | string     |             |
| licenses | string\[\] |             |

## Methods

| Type                                                                                     | Name            | Parameters                                     |
| ---------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceMatchmakingLevelDescriptionComponent](/vext/ref/fb/venicematchmakingleveldescriptioncomponent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceMatchmakingLevelDescriptionComponent](/vext/ref/fb/venicematchmakingleveldescriptioncomponent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
