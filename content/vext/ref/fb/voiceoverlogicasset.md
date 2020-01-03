---
title: VoiceOverLogicAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverLogicAsset()                                                          | Create a new instance of this container type.                                                                                 |
| VoiceOverLogicAsset(VoiceOverLogicAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VoiceOverLogicAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset/).                                      |
| VoiceOverLogicAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset/). |

## Properties

| Name   | Type                                         | Description |
| ------ | -------------------------------------------- | ----------- |
| events | [VoiceOverEvent](/vext/ref/fb/voiceoverevent/)\[\]         |             |
| groups | [VoiceOverGroup](/vext/ref/fb/voiceovergroup/)\[\]         |             |
| flows  | [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow/)\[\] |             |
| system | [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
