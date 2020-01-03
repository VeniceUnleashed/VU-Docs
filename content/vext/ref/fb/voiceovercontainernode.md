---
title: VoiceOverContainerNode
---
### Base Classes

[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverContainerNode()                                                          | Create a new instance of this container type.                                                                                       |
| VoiceOverContainerNode(VoiceOverContainerNode other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VoiceOverContainerNode([VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) other)    | Upcast an instance of type [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) to [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode/).    |
| VoiceOverContainerNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode/).                      |
| VoiceOverContainerNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode/). |

## Properties

| Name              | Type                                                               | Description |
| ----------------- | ------------------------------------------------------------------ | ----------- |
| condition         | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)\[\]           |             |
| interval          | [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode/)                     |             |
| trueRelationship  | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/)\[\]               |             |
| falseRelationship | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/)\[\]               |             |
| conditionMode     | [VoiceOverContainerConditionMode](/vext/ref/fb/voiceovercontainerconditionmode/) |             |
| probability       | number                                                             |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
