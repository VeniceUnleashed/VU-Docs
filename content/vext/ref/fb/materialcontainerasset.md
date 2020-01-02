---
title: MaterialContainerAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| MaterialContainerAsset()                                                          | Create a new instance of this container type.                                                                                       |
| MaterialContainerAsset(MaterialContainerAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| MaterialContainerAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MaterialContainerAsset](MaterialContainerAsset).                                      |
| MaterialContainerAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialContainerAsset](MaterialContainerAsset). |

## Properties

| Name          | Type                                               | Description |
| ------------- | -------------------------------------------------- | ----------- |
| materialPairs | [MaterialContainerPair](MaterialContainerPair)\[\] |             |
| materialNames | string\[\]                                         |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialContainerAsset](MaterialContainerAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialContainerAsset](MaterialContainerAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
