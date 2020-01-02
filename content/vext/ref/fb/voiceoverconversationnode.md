---
title: VoiceOverConversationNode
---
### Base Classes

[VoiceOverStructureNode](VoiceOverStructureNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConversationNode()                                                          | Create a new instance of this container type.                                                                                             |
| VoiceOverConversationNode(VoiceOverConversationNode other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VoiceOverConversationNode([VoiceOverStructureNode](VoiceOverStructureNode) other)    | Upcast an instance of type [VoiceOverStructureNode](VoiceOverStructureNode) to [VoiceOverConversationNode](VoiceOverConversationNode).    |
| VoiceOverConversationNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverConversationNode](VoiceOverConversationNode).                      |
| VoiceOverConversationNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConversationNode](VoiceOverConversationNode). |

## Properties

| Name                 | Type                                                                     | Description |
| -------------------- | ------------------------------------------------------------------------ | ----------- |
| groups               | [VoiceOverDialogGroup](VoiceOverDialogGroup)\[\]                         |             |
| condition            | [VoiceOverValueConnection](VoiceOverValueConnection)\[\]                 |             |
| interval             | [VoiceOverIntervalNode](VoiceOverIntervalNode)                           |             |
| finishedRelationship | [VoiceOverStructureNode](VoiceOverStructureNode)\[\]                     |             |
| blockedRelationship  | [VoiceOverStructureNode](VoiceOverStructureNode)\[\]                     |             |
| conditionMode        | [VoiceOverContainerConditionMode](VoiceOverContainerConditionMode)       |             |
| probability          | number                                                                   |             |
| pronunciation        | [VoiceOverPronunciation](VoiceOverPronunciation)                         |             |
| interruptMode        | [VoiceOverConversationInterruptMode](VoiceOverConversationInterruptMode) |             |
| priority             | number                                                                   |             |
| queueMode            | [VoiceOverConversationQueueMode](VoiceOverConversationQueueMode)         |             |
| relevancy            | number                                                                   |             |
| trackCount           | number                                                                   |             |
| lastSequenceIndex    | number                                                                   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverConversationNode](VoiceOverConversationNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverConversationNode](VoiceOverConversationNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
