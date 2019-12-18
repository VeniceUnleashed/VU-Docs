---
title: UIFontMappingCollection (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UIFontMappingCollection()                                                          | Create a new instance of this container type.                                                                                         |
| UIFontMappingCollection(UIFontMappingCollection other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UIFontMappingCollection([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIFontMappingCollection](UIFontMappingCollection).                                      |
| UIFontMappingCollection([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIFontMappingCollection](UIFontMappingCollection). |

## Properties

| Name         | Type                                 | Description |
| ------------ | ------------------------------------ | ----------- |
| fonts        | [UIFontMapping](UIFontMapping)\[\]   |             |
| textDatabase | [UITextDatabase](UITextDatabase)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIFontMappingCollection](UIFontMappingCollection) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIFontMappingCollection](UIFontMappingCollection) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
