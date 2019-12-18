---
title: VoiceOverLogicAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverLogicAsset()                                                          | Create a new instance of this container type.                                                                                 |
| VoiceOverLogicAsset(VoiceOverLogicAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VoiceOverLogicAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VoiceOverLogicAsset](VoiceOverLogicAsset).                                      |
| VoiceOverLogicAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverLogicAsset](VoiceOverLogicAsset). |

## Properties

| Name   | Type                                         | Description |
| ------ | -------------------------------------------- | ----------- |
| events | [VoiceOverEvent](VoiceOverEvent)\[\]         |             |
| groups | [VoiceOverGroup](VoiceOverGroup)\[\]         |             |
| flows  | [VoiceOverLogicFlow](VoiceOverLogicFlow)\[\] |             |
| system | [VoiceOverSystemAsset](VoiceOverSystemAsset) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverLogicAsset](VoiceOverLogicAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverLogicAsset](VoiceOverLogicAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
