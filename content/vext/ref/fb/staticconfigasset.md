---
title: StaticConfigAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| StaticConfigAsset()                                                          | Create a new instance of this container type.                                                                             |
| StaticConfigAsset(StaticConfigAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| StaticConfigAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StaticConfigAsset](StaticConfigAsset).                                      |
| StaticConfigAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticConfigAsset](StaticConfigAsset). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [StaticConfigAsset](StaticConfigAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticConfigAsset](StaticConfigAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
