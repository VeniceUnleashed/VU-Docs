---
title: MatchmakingSession (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| MatchmakingSession()                                                          | Create a new instance of this container type.                                                                               |
| MatchmakingSession(MatchmakingSession other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| MatchmakingSession([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MatchmakingSession](MatchmakingSession). |

## Properties

| Name             | Type                                                               | Description |
| ---------------- | ------------------------------------------------------------------ | ----------- |
| mode             | [MatchmakingSessionMode](MatchmakingSessionMode)                   |             |
| durationMs       | number                                                             |             |
| criteria         | [MatchmakingCriteria](MatchmakingCriteria)                         |             |
| createGameParams | [MatchmakingCreateGameParameters](MatchmakingCreateGameParameters) |             |
| onNotFound       | [MatchmakingSession](MatchmakingSession)                           |             |
| modifiers        | [MatchmakingModifier](MatchmakingModifier)\[\]                     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MatchmakingSession](MatchmakingSession) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MatchmakingSession](MatchmakingSession) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
