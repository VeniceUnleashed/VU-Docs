---
title: UIMessageCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIMessageCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIMessageCompData(UIMessageCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIMessageCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIMessageCompData](/vext/ref/fb/uimessagecompdata/).                  |
| UIMessageCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIMessageCompData](/vext/ref/fb/uimessagecompdata/).                                      |
| UIMessageCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMessageCompData](/vext/ref/fb/uimessagecompdata/). |

## Properties

| Name                            | Type                       | Description |
| ------------------------------- | -------------------------- | ----------- |
| scoreAggregateTime              | number                     |             |
| chatMessageInfo                 | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| killMessageInfo                 | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| scoreMessageInfo                | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| scoreMinorMessageInfo           | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| scoreMajorMessageInfo           | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| gameMessageInfo                 | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| staticMessageInfo               | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| outOfBoundsMessageInfo          | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| killScoreMessageInfo            | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| logLinesMessageInfo             | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| tooltipMessageInfo              | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| subtitleMessageInfo             | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| rewardMessageInfo               | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| localKillMessageInfo            | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| serverAdminYellMessageInfo      | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| gunMasterMessageInfo            | [MessageInfo](/vext/ref/fb/messageinfo/) |             |
| forceSubtitlesForTheseLevels    | string\[\]                 |             |
| forceSubtitlesOffForTheseLevels | string\[\]                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIMessageCompData](/vext/ref/fb/uimessagecompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMessageCompData](/vext/ref/fb/uimessagecompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
