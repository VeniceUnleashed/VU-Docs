---
title: VoiceOverConversationQueueGroup
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConversationQueueGroup()                                                          | Create a new instance of this container type.                                                                                                         |
| VoiceOverConversationQueueGroup(VoiceOverConversationQueueGroup other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| VoiceOverConversationQueueGroup([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup/). |

## Properties

| Name          | Type                                                                                 | Description |
| ------------- | ------------------------------------------------------------------------------------ | ----------- |
| name          | string                                                                               |             |
| polyphonyMode | [VoiceOverConversationQueueGroupPolyphony](/vext/ref/fb/voiceoverconversationqueuegrouppolyphony/) |             |
| polyphony     | number                                                                               |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
