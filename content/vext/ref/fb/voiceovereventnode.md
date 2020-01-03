---
title: VoiceOverEventNode
---
### Base Classes

[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverEventNode()                                                          | Create a new instance of this container type.                                                                               |
| VoiceOverEventNode(VoiceOverEventNode other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| VoiceOverEventNode([VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) other)    | Upcast an instance of type [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) to [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode/).    |
| VoiceOverEventNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode/).                      |
| VoiceOverEventNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode/). |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| interval     | [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode/)       |             |
| relationship | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/)\[\] |             |
| redirects    | [VoiceOverValueRedirect](/vext/ref/fb/voiceovervalueredirect/)\[\] |             |
| event        | [VoiceOverEvent](/vext/ref/fb/voiceoverevent/)                     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
