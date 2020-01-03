---
title: ValueUnlockAsset
---
### Base Classes

[UnlockAssetBase](/vext/ref/fb/unlockassetbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ValueUnlockAsset()                                                          | Create a new instance of this container type.                                                                           |
| ValueUnlockAsset(ValueUnlockAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| ValueUnlockAsset([UnlockAssetBase](/vext/ref/fb/unlockassetbase/) other)                  | Upcast an instance of type [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) to [ValueUnlockAsset](/vext/ref/fb/valueunlockasset/).                  |
| ValueUnlockAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ValueUnlockAsset](/vext/ref/fb/valueunlockasset/).                                      |
| ValueUnlockAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ValueUnlockAsset](/vext/ref/fb/valueunlockasset/). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| unlockValues | [UnlockValuePair](/vext/ref/fb/unlockvaluepair/)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [ValueUnlockAsset](/vext/ref/fb/valueunlockasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ValueUnlockAsset](/vext/ref/fb/valueunlockasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
