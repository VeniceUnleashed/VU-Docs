---
title: UIFontMappingCollection
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UIFontMappingCollection()                                                          | Create a new instance of this container type.                                                                                         |
| UIFontMappingCollection(UIFontMappingCollection other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UIFontMappingCollection([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection/).                                      |
| UIFontMappingCollection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection/). |

## Properties

| Name         | Type                                 | Description |
| ------------ | ------------------------------------ | ----------- |
| fonts        | [UIFontMapping](/vext/ref/fb/uifontmapping/)\[\]   |             |
| textDatabase | [UITextDatabase](/vext/ref/fb/uitextdatabase/)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
