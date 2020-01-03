---
title: MatchmakingPlayerCapacityModifier
---
### Base Classes

[MatchmakingModifier](/vext/ref/fb/matchmakingmodifier/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MatchmakingPlayerCapacityModifier()                                                          | Create a new instance of this container type.                                                                                                             |
| MatchmakingPlayerCapacityModifier(MatchmakingPlayerCapacityModifier other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| MatchmakingPlayerCapacityModifier([MatchmakingModifier](/vext/ref/fb/matchmakingmodifier/) other)          | Upcast an instance of type [MatchmakingModifier](/vext/ref/fb/matchmakingmodifier/) to [MatchmakingPlayerCapacityModifier](/vext/ref/fb/matchmakingplayercapacitymodifier/).          |
| MatchmakingPlayerCapacityModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MatchmakingPlayerCapacityModifier](/vext/ref/fb/matchmakingplayercapacitymodifier/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| attribute | string |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MatchmakingPlayerCapacityModifier](/vext/ref/fb/matchmakingplayercapacitymodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MatchmakingPlayerCapacityModifier](/vext/ref/fb/matchmakingplayercapacitymodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
