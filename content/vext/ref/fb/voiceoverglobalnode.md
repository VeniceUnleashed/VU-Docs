---
title: VoiceOverGlobalNode
---
### Base Classes

[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverGlobalNode()                                                          | Create a new instance of this container type.                                                                                 |
| VoiceOverGlobalNode(VoiceOverGlobalNode other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VoiceOverGlobalNode([VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) other)  | Upcast an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) to [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode/).  |
| VoiceOverGlobalNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode/).                      |
| VoiceOverGlobalNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode/). |

## Properties

| Name   | Type                                       | Description |
| ------ | ------------------------------------------ | ----------- |
| value  | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)           |             |
| field  | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/) |             |
| object | [VoiceOverObject](/vext/ref/fb/voiceoverobject/)         |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
