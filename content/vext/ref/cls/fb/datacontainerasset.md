---
title: DataContainerAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| DataContainerAsset()                                                          | Create a new instance of this container type.                                                                               |
| DataContainerAsset(DataContainerAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| DataContainerAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DataContainerAsset](DataContainerAsset).                                      |
| DataContainerAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DataContainerAsset](DataContainerAsset). |

## Properties

| Name | Type                                                | Description |
| ---- | --------------------------------------------------- | ----------- |
| data | [DataContainer](/vext/ref/cls/shr/DataContainer) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [DataContainerAsset](DataContainerAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DataContainerAsset](DataContainerAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
