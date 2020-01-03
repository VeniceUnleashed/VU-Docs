---
title: MatchmakingSession
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| MatchmakingSession()                                                          | Create a new instance of this container type.                                                                               |
| MatchmakingSession(MatchmakingSession other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| MatchmakingSession([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MatchmakingSession](/vext/ref/fb/matchmakingsession/). |

## Properties

| Name             | Type                                                               | Description |
| ---------------- | ------------------------------------------------------------------ | ----------- |
| mode             | [MatchmakingSessionMode](/vext/ref/fb/matchmakingsessionmode/)                   |             |
| durationMs       | number                                                             |             |
| criteria         | [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria/)                         |             |
| createGameParams | [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters/) |             |
| onNotFound       | [MatchmakingSession](/vext/ref/fb/matchmakingsession/)                           |             |
| modifiers        | [MatchmakingModifier](/vext/ref/fb/matchmakingmodifier/)\[\]                     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MatchmakingSession](/vext/ref/fb/matchmakingsession/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MatchmakingSession](/vext/ref/fb/matchmakingsession/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
