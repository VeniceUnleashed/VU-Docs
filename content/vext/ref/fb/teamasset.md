---
title: TeamAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| TeamAsset()                                                          | Create a new instance of this container type.                                                             |
| TeamAsset(TeamAsset other)                                           | Create a reference copy of an instance of the same type.                                                  |
| TeamAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TeamAsset](TeamAsset).                                      |
| TeamAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TeamAsset](TeamAsset). |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [TeamAsset](TeamAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TeamAsset](TeamAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
