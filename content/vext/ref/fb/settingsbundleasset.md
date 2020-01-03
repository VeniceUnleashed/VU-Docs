---
title: SettingsBundleAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SettingsBundleAsset()                                                          | Create a new instance of this container type.                                                                                 |
| SettingsBundleAsset(SettingsBundleAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SettingsBundleAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset/).                                      |
| SettingsBundleAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset/). |

## Properties

| Name     | Type                                 | Description |
| -------- | ------------------------------------ | ----------- |
| settings | [SystemSettings](/vext/ref/fb/systemsettings/)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
