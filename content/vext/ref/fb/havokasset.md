---
title: HavokAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| HavokAsset()                                                          | Create a new instance of this container type.                                                               |
| HavokAsset(HavokAsset other)                                          | Create a reference copy of an instance of the same type.                                                    |
| HavokAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [HavokAsset](HavokAsset).                                      |
| HavokAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HavokAsset](HavokAsset). |

## Properties

| Name           | Type                                                    | Description |
| -------------- | ------------------------------------------------------- | ----------- |
| scale          | number                                                  |             |
| externalAssets | [DataContainer](/vext/ref/shared/class/datacontainer)\[\] |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [HavokAsset](HavokAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HavokAsset](HavokAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
