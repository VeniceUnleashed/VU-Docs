---
title: SoundMasterPatchAsset
---
### Base Classes

[SoundGraphAsset](/vext/ref/fb/soundgraphasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SoundMasterPatchAsset()                                                          | Create a new instance of this container type.                                                                                     |
| SoundMasterPatchAsset(SoundMasterPatchAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SoundMasterPatchAsset([SoundGraphAsset](/vext/ref/fb/soundgraphasset/) other)                  | Upcast an instance of type [SoundGraphAsset](/vext/ref/fb/soundgraphasset/) to [SoundMasterPatchAsset](/vext/ref/fb/soundmasterpatchasset/).                  |
| SoundMasterPatchAsset([SoundAsset](/vext/ref/fb/soundasset/) other)                            | Upcast an instance of type [SoundAsset](/vext/ref/fb/soundasset/) to [SoundMasterPatchAsset](/vext/ref/fb/soundmasterpatchasset/).                            |
| SoundMasterPatchAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoundMasterPatchAsset](/vext/ref/fb/soundmasterpatchasset/).                                      |
| SoundMasterPatchAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundMasterPatchAsset](/vext/ref/fb/soundmasterpatchasset/). |

## Properties

| Name       | Type                             | Description |
| ---------- | -------------------------------- | ----------- |
| busses     | [SoundBusData](/vext/ref/fb/soundbusdata/)\[\] |             |
| rwMovieBus | [SoundBusData](/vext/ref/fb/soundbusdata/)     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundMasterPatchAsset](/vext/ref/fb/soundmasterpatchasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundMasterPatchAsset](/vext/ref/fb/soundmasterpatchasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
