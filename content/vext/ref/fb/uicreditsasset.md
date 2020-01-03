---
title: UICreditsAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UICreditsAsset()                                                          | Create a new instance of this container type.                                                                       |
| UICreditsAsset(UICreditsAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UICreditsAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UICreditsAsset](UICreditsAsset).                                      |
| UICreditsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICreditsAsset](UICreditsAsset). |

## Properties

| Name  | Type                               | Description |
| ----- | ---------------------------------- | ----------- |
| pages | [UICreditsPage](UICreditsPage)\[\] |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UICreditsAsset](UICreditsAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICreditsAsset](UICreditsAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
