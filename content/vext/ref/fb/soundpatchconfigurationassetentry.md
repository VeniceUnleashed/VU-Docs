---
title: SoundPatchConfigurationAssetEntry
---
### Base Classes

[SoundPatchConfigurationEntry](SoundPatchConfigurationEntry)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                           | Description                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SoundPatchConfigurationAssetEntry()                                                                   | Create a new instance of this container type.                                                                                                                      |
| SoundPatchConfigurationAssetEntry(SoundPatchConfigurationAssetEntry other)                            | Create a reference copy of an instance of the same type.                                                                                                           |
| SoundPatchConfigurationAssetEntry([SoundPatchConfigurationEntry](SoundPatchConfigurationEntry) other) | Upcast an instance of type [SoundPatchConfigurationEntry](SoundPatchConfigurationEntry) to [SoundPatchConfigurationAssetEntry](SoundPatchConfigurationAssetEntry). |
| SoundPatchConfigurationAssetEntry([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundPatchConfigurationAssetEntry](SoundPatchConfigurationAssetEntry).          |

## Properties

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| nameHash | number         |             |
| value    | [Asset](Asset) |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundPatchConfigurationAssetEntry](SoundPatchConfigurationAssetEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundPatchConfigurationAssetEntry](SoundPatchConfigurationAssetEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
