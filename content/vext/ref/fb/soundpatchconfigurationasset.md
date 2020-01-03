---
title: SoundPatchConfigurationAsset
---
### Base Classes

[SoundAsset](/vext/ref/fb/soundasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| SoundPatchConfigurationAsset()                                                          | Create a new instance of this container type.                                                                                                   |
| SoundPatchConfigurationAsset(SoundPatchConfigurationAsset other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| SoundPatchConfigurationAsset([SoundAsset](/vext/ref/fb/soundasset/) other)                            | Upcast an instance of type [SoundAsset](/vext/ref/fb/soundasset/) to [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset/).                            |
| SoundPatchConfigurationAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset/).                                      |
| SoundPatchConfigurationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset/). |

## Properties

| Name     | Type                                                             | Description |
| -------- | ---------------------------------------------------------------- | ----------- |
| sound    | [SoundPatchAsset](/vext/ref/fb/soundpatchasset/)                               |             |
| entries  | [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry/)\[\] |             |
| loudness | number                                                           |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
