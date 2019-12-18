---
title: VoiceOverLabelSource (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverLabelSource()                                                          | Create a new instance of this container type.                                                                                   |
| VoiceOverLabelSource(VoiceOverLabelSource other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VoiceOverLabelSource([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverLabelSource](VoiceOverLabelSource). |

## Properties

| Name   | Type                                                 | Description |
| ------ | ---------------------------------------------------- | ----------- |
| source | [VoiceOverValueConnection](VoiceOverValueConnection) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverLabelSource](VoiceOverLabelSource) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverLabelSource](VoiceOverLabelSource) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
