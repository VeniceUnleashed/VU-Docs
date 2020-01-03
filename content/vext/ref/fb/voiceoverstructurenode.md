---
title: VoiceOverStructureNode
---
### Base Classes

[VoiceOverNode](/vext/ref/fb/voiceovernode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverStructureNode()                                                          | Create a new instance of this container type.                                                                                       |
| VoiceOverStructureNode(VoiceOverStructureNode other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VoiceOverStructureNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/).                      |
| VoiceOverStructureNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/). |

## Properties

| Name     | Type                                             | Description |
| -------- | ------------------------------------------------ | ----------- |
| flowMode | [VoiceOverLogicFlowMode](/vext/ref/fb/voiceoverlogicflowmode/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
