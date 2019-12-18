---
title: BigWorldSettingsAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| BigWorldSettingsAsset()                                                          | Create a new instance of this container type.                                                                                     |
| BigWorldSettingsAsset(BigWorldSettingsAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| BigWorldSettingsAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [BigWorldSettingsAsset](BigWorldSettingsAsset).                                      |
| BigWorldSettingsAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BigWorldSettingsAsset](BigWorldSettingsAsset). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| settings | [BigWorldSetting](BigWorldSetting)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [BigWorldSettingsAsset](BigWorldSettingsAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BigWorldSettingsAsset](BigWorldSettingsAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
