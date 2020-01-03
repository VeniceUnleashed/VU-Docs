---
title: UnlockAsset
---
### Base Classes

[UnlockAssetBase](/vext/ref/fb/unlockassetbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| UnlockAsset()                                                          | Create a new instance of this container type.                                                                 |
| UnlockAsset(UnlockAsset other)                                         | Create a reference copy of an instance of the same type.                                                      |
| UnlockAsset([UnlockAssetBase](/vext/ref/fb/unlockassetbase/) other)                  | Upcast an instance of type [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) to [UnlockAsset](/vext/ref/fb/unlockasset/).                  |
| UnlockAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UnlockAsset](/vext/ref/fb/unlockasset/).                                      |
| UnlockAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockAsset](/vext/ref/fb/unlockasset/). |

## Properties

| Name     | Type               | Description |
| -------- | ------------------ | ----------- |
| linkedTo | [Asset](/vext/ref/fb/asset/)\[\] |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [UnlockAsset](/vext/ref/fb/unlockasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnlockAsset](/vext/ref/fb/unlockasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
