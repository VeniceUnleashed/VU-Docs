---
title: VeniceMatchmakingLevelDescriptionComponent (Frostbite Container)
---
### Base Classes

[LevelDescriptionComponent](LevelDescriptionComponent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                              | Description                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| VeniceMatchmakingLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                                  |
| VeniceMatchmakingLevelDescriptionComponent(VeniceMatchmakingLevelDescriptionComponent other)             | Create a reference copy of an instance of the same type.                                                                                                                       |
| VeniceMatchmakingLevelDescriptionComponent([LevelDescriptionComponent](LevelDescriptionComponent) other) | Upcast an instance of type [LevelDescriptionComponent](LevelDescriptionComponent) to [VeniceMatchmakingLevelDescriptionComponent](VeniceMatchmakingLevelDescriptionComponent). |
| VeniceMatchmakingLevelDescriptionComponent([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VeniceMatchmakingLevelDescriptionComponent](VeniceMatchmakingLevelDescriptionComponent).    |

## Properties

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| mod      | string     |             |
| licenses | string\[\] |             |

## Methods

| Type                                                                                     | Name            | Parameters                                     |
| ---------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceMatchmakingLevelDescriptionComponent](VeniceMatchmakingLevelDescriptionComponent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VeniceMatchmakingLevelDescriptionComponent](VeniceMatchmakingLevelDescriptionComponent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
