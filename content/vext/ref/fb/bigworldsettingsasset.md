---
title: BigWorldSettingsAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| BigWorldSettingsAsset()                                                          | Create a new instance of this container type.                                                                                     |
| BigWorldSettingsAsset(BigWorldSettingsAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| BigWorldSettingsAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset/).                                      |
| BigWorldSettingsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset/). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| settings | [BigWorldSetting](/vext/ref/fb/bigworldsetting/)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
