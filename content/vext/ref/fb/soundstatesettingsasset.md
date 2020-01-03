---
title: SoundStateSettingsAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SoundStateSettingsAsset()                                                          | Create a new instance of this container type.                                                                                         |
| SoundStateSettingsAsset(SoundStateSettingsAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| SoundStateSettingsAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset/).                                      |
| SoundStateSettingsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset/). |

## Properties

| Name                            | Type                         | Description |
| ------------------------------- | ---------------------------- | ----------- |
| soundStates                     | [SoundState](/vext/ref/fb/soundstate/)\[\] |             |
| impairedHearingImpulseThreshold | number                       |             |
| screamThreshold                 | number                       |             |
| supressionThreshold             | number                       |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
