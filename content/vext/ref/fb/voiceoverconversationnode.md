---
title: VoiceOverConversationNode
---
### Base Classes

[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConversationNode()                                                          | Create a new instance of this container type.                                                                                             |
| VoiceOverConversationNode(VoiceOverConversationNode other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VoiceOverConversationNode([VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) other)    | Upcast an instance of type [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) to [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode/).    |
| VoiceOverConversationNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode/).                      |
| VoiceOverConversationNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode/). |

## Properties

| Name                 | Type                                                                     | Description |
| -------------------- | ------------------------------------------------------------------------ | ----------- |
| groups               | [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup/)\[\]                         |             |
| condition            | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)\[\]                 |             |
| interval             | [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode/)                           |             |
| finishedRelationship | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/)\[\]                     |             |
| blockedRelationship  | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/)\[\]                     |             |
| conditionMode        | [VoiceOverContainerConditionMode](/vext/ref/fb/voiceovercontainerconditionmode/)       |             |
| probability          | number                                                                   |             |
| pronunciation        | [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation/)                         |             |
| interruptMode        | [VoiceOverConversationInterruptMode](/vext/ref/fb/voiceoverconversationinterruptmode/) |             |
| priority             | number                                                                   |             |
| queueMode            | [VoiceOverConversationQueueMode](/vext/ref/fb/voiceoverconversationqueuemode/)         |             |
| relevancy            | number                                                                   |             |
| trackCount           | number                                                                   |             |
| lastSequenceIndex    | number                                                                   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
