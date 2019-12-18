---
title: UIScreenAsset (Frostbite Container)
---
### Base Classes

[UIGraphAsset](UIGraphAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| UIScreenAsset()                                                          | Create a new instance of this container type.                                                                     |
| UIScreenAsset(UIScreenAsset other)                                       | Create a reference copy of an instance of the same type.                                                          |
| UIScreenAsset([UIGraphAsset](UIGraphAsset) other)                        | Upcast an instance of type [UIGraphAsset](UIGraphAsset) to [UIScreenAsset](UIScreenAsset).                        |
| UIScreenAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIScreenAsset](UIScreenAsset).                                      |
| UIScreenAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIScreenAsset](UIScreenAsset). |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [UIScreenAsset](UIScreenAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIScreenAsset](UIScreenAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
