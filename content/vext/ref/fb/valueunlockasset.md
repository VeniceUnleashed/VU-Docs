---
title: ValueUnlockAsset
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
| ValueUnlockAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ValueUnlockAsset](ValueUnlockAsset). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| unlockValues | [UnlockValuePair](UnlockValuePair)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [ValueUnlockAsset](ValueUnlockAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ValueUnlockAsset](ValueUnlockAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
