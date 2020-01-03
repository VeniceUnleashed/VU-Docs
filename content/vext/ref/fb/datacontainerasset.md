---
title: DataContainerAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| DataContainerAsset()                                                          | Create a new instance of this container type.                                                                               |
| DataContainerAsset(DataContainerAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| DataContainerAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DataContainerAsset](/vext/ref/fb/datacontainerasset/).                                      |
| DataContainerAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DataContainerAsset](/vext/ref/fb/datacontainerasset/). |

## Properties

| Name | Type                                                | Description |
| ---- | --------------------------------------------------- | ----------- |
| data | [DataContainer](/vext/ref/shared/class/datacontainer) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [DataContainerAsset](/vext/ref/fb/datacontainerasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DataContainerAsset](/vext/ref/fb/datacontainerasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
