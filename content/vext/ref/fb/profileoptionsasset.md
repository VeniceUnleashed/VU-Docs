---
title: ProfileOptionsAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionsAsset()                                                          | Create a new instance of this container type.                                                                                 |
| ProfileOptionsAsset(ProfileOptionsAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ProfileOptionsAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ProfileOptionsAsset](ProfileOptionsAsset).                                      |
| ProfileOptionsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionsAsset](ProfileOptionsAsset). |

## Properties

| Name           | Type                                       | Description |
| -------------- | ------------------------------------------ | ----------- |
| fileName       | string                                     |             |
| contentName    | string                                     |             |
| fileSize       | number                                     |             |
| options        | [ProfileOptionData](ProfileOptionData)\[\] |             |
| autoSaveOnQuit | bool                                       |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ProfileOptionsAsset](ProfileOptionsAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionsAsset](ProfileOptionsAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
