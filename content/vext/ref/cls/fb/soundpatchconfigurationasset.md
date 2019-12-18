---
title: SoundPatchConfigurationAsset (Frostbite Container)
---
### Base Classes

[SoundAsset](SoundAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| SoundPatchConfigurationAsset()                                                          | Create a new instance of this container type.                                                                                                   |
| SoundPatchConfigurationAsset(SoundPatchConfigurationAsset other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| SoundPatchConfigurationAsset([SoundAsset](SoundAsset) other)                            | Upcast an instance of type [SoundAsset](SoundAsset) to [SoundPatchConfigurationAsset](SoundPatchConfigurationAsset).                            |
| SoundPatchConfigurationAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoundPatchConfigurationAsset](SoundPatchConfigurationAsset).                                      |
| SoundPatchConfigurationAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundPatchConfigurationAsset](SoundPatchConfigurationAsset). |

## Properties

| Name     | Type                                                             | Description |
| -------- | ---------------------------------------------------------------- | ----------- |
| sound    | [SoundPatchAsset](SoundPatchAsset)                               |             |
| entries  | [SoundPatchConfigurationEntry](SoundPatchConfigurationEntry)\[\] |             |
| loudness | number                                                           |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundPatchConfigurationAsset](SoundPatchConfigurationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundPatchConfigurationAsset](SoundPatchConfigurationAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
