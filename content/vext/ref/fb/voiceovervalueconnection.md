---
title: VoiceOverValueConnection
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverValueConnection()                                                          | Create a new instance of this container type.                                                                                           |
| VoiceOverValueConnection(VoiceOverValueConnection other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VoiceOverValueConnection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/). |

## Properties

| Name        | Type                                               | Description |
| ----------- | -------------------------------------------------- | ----------- |
| targetNode  | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) |             |
| targetValue | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
