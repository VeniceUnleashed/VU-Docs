---
title: ProfileOptionsAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionsAsset()                                                          | Create a new instance of this container type.                                                                                 |
| ProfileOptionsAsset(ProfileOptionsAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ProfileOptionsAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset/).                                      |
| ProfileOptionsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset/). |

## Properties

| Name           | Type                                       | Description |
| -------------- | ------------------------------------------ | ----------- |
| fileName       | string                                     |             |
| contentName    | string                                     |             |
| fileSize       | number                                     |             |
| options        | [ProfileOptionData](/vext/ref/fb/profileoptiondata/)\[\] |             |
| autoSaveOnQuit | bool                                       |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
