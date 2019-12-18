---
title: SoundGraphAsset (Frostbite Container)
---
### Base Classes

[SoundAsset](SoundAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SoundGraphAsset()                                                          | Create a new instance of this container type.                                                                         |
| SoundGraphAsset(SoundGraphAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| SoundGraphAsset([SoundAsset](SoundAsset) other)                            | Upcast an instance of type [SoundAsset](SoundAsset) to [SoundGraphAsset](SoundGraphAsset).                            |
| SoundGraphAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoundGraphAsset](SoundGraphAsset).                                      |
| SoundGraphAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundGraphAsset](SoundGraphAsset). |

## Properties

| Name  | Type                             | Description |
| ----- | -------------------------------- | ----------- |
| graph | [SoundGraphData](SoundGraphData) |             |
| mixer | [MixerAsset](MixerAsset)         |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [SoundGraphAsset](SoundGraphAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundGraphAsset](SoundGraphAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
