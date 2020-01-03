---
title: SoundPatchConfigurationAssetEntry
---
### Base Classes

[SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                           | Description                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SoundPatchConfigurationAssetEntry()                                                                   | Create a new instance of this container type.                                                                                                                      |
| SoundPatchConfigurationAssetEntry(SoundPatchConfigurationAssetEntry other)                            | Create a reference copy of an instance of the same type.                                                                                                           |
| SoundPatchConfigurationAssetEntry([SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry/) other) | Upcast an instance of type [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry/) to [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry/). |
| SoundPatchConfigurationAssetEntry([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry/).          |

## Properties

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| nameHash | number         |             |
| value    | [Asset](/vext/ref/fb/asset/) |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
