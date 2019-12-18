---
title: MatchmakingPlayerCapacityModifier (Frostbite Container)
---
### Base Classes

[MatchmakingModifier](MatchmakingModifier)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MatchmakingPlayerCapacityModifier()                                                          | Create a new instance of this container type.                                                                                                             |
| MatchmakingPlayerCapacityModifier(MatchmakingPlayerCapacityModifier other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| MatchmakingPlayerCapacityModifier([MatchmakingModifier](MatchmakingModifier) other)          | Upcast an instance of type [MatchmakingModifier](MatchmakingModifier) to [MatchmakingPlayerCapacityModifier](MatchmakingPlayerCapacityModifier).          |
| MatchmakingPlayerCapacityModifier([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MatchmakingPlayerCapacityModifier](MatchmakingPlayerCapacityModifier). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| attribute | string |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MatchmakingPlayerCapacityModifier](MatchmakingPlayerCapacityModifier) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MatchmakingPlayerCapacityModifier](MatchmakingPlayerCapacityModifier) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
