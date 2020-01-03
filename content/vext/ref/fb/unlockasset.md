---
title: UnlockAsset
---
### Base Classes

[UnlockAssetBase](UnlockAssetBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| UnlockAsset()                                                          | Create a new instance of this container type.                                                                 |
| UnlockAsset(UnlockAsset other)                                         | Create a reference copy of an instance of the same type.                                                      |
| UnlockAsset([UnlockAssetBase](UnlockAssetBase) other)                  | Upcast an instance of type [UnlockAssetBase](UnlockAssetBase) to [UnlockAsset](UnlockAsset).                  |
| UnlockAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UnlockAsset](UnlockAsset).                                      |
| UnlockAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockAsset](UnlockAsset). |

## Properties

| Name     | Type               | Description |
| -------- | ------------------ | ----------- |
| linkedTo | [Asset](Asset)\[\] |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [UnlockAsset](UnlockAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnlockAsset](UnlockAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
