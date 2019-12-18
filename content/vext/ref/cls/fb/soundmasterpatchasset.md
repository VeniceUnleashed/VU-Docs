---
title: SoundMasterPatchAsset (Frostbite Container)
---
### Base Classes

[SoundGraphAsset](SoundGraphAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SoundMasterPatchAsset()                                                          | Create a new instance of this container type.                                                                                     |
| SoundMasterPatchAsset(SoundMasterPatchAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SoundMasterPatchAsset([SoundGraphAsset](SoundGraphAsset) other)                  | Upcast an instance of type [SoundGraphAsset](SoundGraphAsset) to [SoundMasterPatchAsset](SoundMasterPatchAsset).                  |
| SoundMasterPatchAsset([SoundAsset](SoundAsset) other)                            | Upcast an instance of type [SoundAsset](SoundAsset) to [SoundMasterPatchAsset](SoundMasterPatchAsset).                            |
| SoundMasterPatchAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoundMasterPatchAsset](SoundMasterPatchAsset).                                      |
| SoundMasterPatchAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundMasterPatchAsset](SoundMasterPatchAsset). |

## Properties

| Name       | Type                             | Description |
| ---------- | -------------------------------- | ----------- |
| busses     | [SoundBusData](SoundBusData)\[\] |             |
| rwMovieBus | [SoundBusData](SoundBusData)     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundMasterPatchAsset](SoundMasterPatchAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundMasterPatchAsset](SoundMasterPatchAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
