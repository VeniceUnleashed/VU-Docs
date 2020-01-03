---
title: UIMessageCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIMessageCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIMessageCompData(UIMessageCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIMessageCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIMessageCompData](UIMessageCompData).                  |
| UIMessageCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIMessageCompData](UIMessageCompData).                                      |
| UIMessageCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMessageCompData](UIMessageCompData). |

## Properties

| Name                            | Type                       | Description |
| ------------------------------- | -------------------------- | ----------- |
| scoreAggregateTime              | number                     |             |
| chatMessageInfo                 | [MessageInfo](MessageInfo) |             |
| killMessageInfo                 | [MessageInfo](MessageInfo) |             |
| scoreMessageInfo                | [MessageInfo](MessageInfo) |             |
| scoreMinorMessageInfo           | [MessageInfo](MessageInfo) |             |
| scoreMajorMessageInfo           | [MessageInfo](MessageInfo) |             |
| gameMessageInfo                 | [MessageInfo](MessageInfo) |             |
| staticMessageInfo               | [MessageInfo](MessageInfo) |             |
| outOfBoundsMessageInfo          | [MessageInfo](MessageInfo) |             |
| killScoreMessageInfo            | [MessageInfo](MessageInfo) |             |
| logLinesMessageInfo             | [MessageInfo](MessageInfo) |             |
| tooltipMessageInfo              | [MessageInfo](MessageInfo) |             |
| subtitleMessageInfo             | [MessageInfo](MessageInfo) |             |
| rewardMessageInfo               | [MessageInfo](MessageInfo) |             |
| localKillMessageInfo            | [MessageInfo](MessageInfo) |             |
| serverAdminYellMessageInfo      | [MessageInfo](MessageInfo) |             |
| gunMasterMessageInfo            | [MessageInfo](MessageInfo) |             |
| forceSubtitlesForTheseLevels    | string\[\]                 |             |
| forceSubtitlesOffForTheseLevels | string\[\]                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIMessageCompData](UIMessageCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMessageCompData](UIMessageCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
