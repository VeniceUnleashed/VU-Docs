---
title: UIItemDescriptionAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIItemDescriptionAsset()                                                          | Create a new instance of this container type.                                                                                       |
| UIItemDescriptionAsset(UIItemDescriptionAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIItemDescriptionAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIItemDescriptionAsset](UIItemDescriptionAsset).                                      |
| UIItemDescriptionAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIItemDescriptionAsset](UIItemDescriptionAsset). |

## Properties

| Name     | Type                                                 | Description |
| -------- | ---------------------------------------------------- | ----------- |
| children | [UIItemDescriptionAsset](UIItemDescriptionAsset)\[\] |             |
| items    | [UIItemDescription](UIItemDescription)\[\]           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIItemDescriptionAsset](UIItemDescriptionAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIItemDescriptionAsset](UIItemDescriptionAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
