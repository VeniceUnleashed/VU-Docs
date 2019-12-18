---
title: SoundStateSettingsAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SoundStateSettingsAsset()                                                          | Create a new instance of this container type.                                                                                         |
| SoundStateSettingsAsset(SoundStateSettingsAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| SoundStateSettingsAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoundStateSettingsAsset](SoundStateSettingsAsset).                                      |
| SoundStateSettingsAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundStateSettingsAsset](SoundStateSettingsAsset). |

## Properties

| Name                            | Type                         | Description |
| ------------------------------- | ---------------------------- | ----------- |
| soundStates                     | [SoundState](SoundState)\[\] |             |
| impairedHearingImpulseThreshold | number                       |             |
| screamThreshold                 | number                       |             |
| supressionThreshold             | number                       |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundStateSettingsAsset](SoundStateSettingsAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundStateSettingsAsset](SoundStateSettingsAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
