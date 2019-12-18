---
title: UIAudioEventAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIAudioEventAsset()                                                          | Create a new instance of this container type.                                                                             |
| UIAudioEventAsset(UIAudioEventAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIAudioEventAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIAudioEventAsset](UIAudioEventAsset).                                      |
| UIAudioEventAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIAudioEventAsset](UIAudioEventAsset). |

## Properties

| Name               | Type                                           | Description |
| ------------------ | ---------------------------------------------- | ----------- |
| audioEventMappings | [UIAudioEventMapping](UIAudioEventMapping)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIAudioEventAsset](UIAudioEventAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIAudioEventAsset](UIAudioEventAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
