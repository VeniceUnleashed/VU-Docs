---
title: VoiceOverInfoNode
---
### Base Classes

[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverInfoNode()                                                          | Create a new instance of this container type.                                                                             |
| VoiceOverInfoNode(VoiceOverInfoNode other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| VoiceOverInfoNode([VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) other)  | Upcast an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) to [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode/).  |
| VoiceOverInfoNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode/).                      |
| VoiceOverInfoNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode/). |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| object       | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/) |             |
| value        | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                     |             |
| field        | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/)           |             |
| expectedType | [VoiceOverObject](/vext/ref/fb/voiceoverobject/)                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
