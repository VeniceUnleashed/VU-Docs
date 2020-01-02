---
title: MenuConfigAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| MenuConfigAsset()                                                          | Create a new instance of this container type.                                                                         |
| MenuConfigAsset(MenuConfigAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| MenuConfigAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MenuConfigAsset](MenuConfigAsset).                                      |
| MenuConfigAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MenuConfigAsset](MenuConfigAsset). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [MenuConfigAsset](MenuConfigAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MenuConfigAsset](MenuConfigAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
