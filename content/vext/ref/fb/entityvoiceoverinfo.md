---
title: EntityVoiceOverInfo
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EntityVoiceOverInfo()                                                          | Create a new instance of this container type.                                                                                 |
| EntityVoiceOverInfo(EntityVoiceOverInfo other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EntityVoiceOverInfo([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo/). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| voiceOverType | [VoiceOverObject](/vext/ref/fb/voiceoverobject/)   |             |
| labels        | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel/)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type                              | Description                                 |
| ---- | --------------------------------- | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid) | An optional GUID to assign to the instance. |
