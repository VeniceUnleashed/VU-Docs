---
title: VoiceOverLogicFlow
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverLogicFlow()                                                          | Create a new instance of this container type.                                                                               |
| VoiceOverLogicFlow(VoiceOverLogicFlow other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| VoiceOverLogicFlow([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow/). |

## Properties

| Name   | Type                                         | Description |
| ------ | -------------------------------------------- | ----------- |
| name   | string                                       |             |
| group  | [VoiceOverGroup](/vext/ref/fb/voiceovergroup/)             |             |
| locals | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)\[\]         |             |
| roots  | [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode/)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
