---
title: SettingsBundleAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SettingsBundleAsset()                                                          | Create a new instance of this container type.                                                                                 |
| SettingsBundleAsset(SettingsBundleAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SettingsBundleAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SettingsBundleAsset](SettingsBundleAsset).                                      |
| SettingsBundleAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SettingsBundleAsset](SettingsBundleAsset). |

## Properties

| Name     | Type                                 | Description |
| -------- | ------------------------------------ | ----------- |
| settings | [SystemSettings](SystemSettings)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SettingsBundleAsset](SettingsBundleAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SettingsBundleAsset](SettingsBundleAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
