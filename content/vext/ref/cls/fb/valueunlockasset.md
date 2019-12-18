---
title: ValueUnlockAsset (Frostbite Container)
---
### Base Classes

[UnlockAssetBase](UnlockAssetBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ValueUnlockAsset()                                                          | Create a new instance of this container type.                                                                           |
| ValueUnlockAsset(ValueUnlockAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| ValueUnlockAsset([UnlockAssetBase](UnlockAssetBase) other)                  | Upcast an instance of type [UnlockAssetBase](UnlockAssetBase) to [ValueUnlockAsset](ValueUnlockAsset).                  |
| ValueUnlockAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ValueUnlockAsset](ValueUnlockAsset).                                      |
| ValueUnlockAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ValueUnlockAsset](ValueUnlockAsset). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| unlockValues | [UnlockValuePair](UnlockValuePair)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [ValueUnlockAsset](ValueUnlockAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ValueUnlockAsset](ValueUnlockAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
