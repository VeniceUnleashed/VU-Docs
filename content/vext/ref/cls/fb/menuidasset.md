---
title: MenuIdAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| MenuIdAsset()                                                          | Create a new instance of this container type.                                                                 |
| MenuIdAsset(MenuIdAsset other)                                         | Create a reference copy of an instance of the same type.                                                      |
| MenuIdAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MenuIdAsset](MenuIdAsset).                                      |
| MenuIdAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MenuIdAsset](MenuIdAsset). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| shortName | string |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [MenuIdAsset](MenuIdAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MenuIdAsset](MenuIdAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
