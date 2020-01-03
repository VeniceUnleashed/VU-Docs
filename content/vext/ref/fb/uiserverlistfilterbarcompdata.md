---
title: UIServerListFilterBarCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| UIServerListFilterBarCompData()                                                          | Create a new instance of this container type.                                                                                                     |
| UIServerListFilterBarCompData(UIServerListFilterBarCompData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| UIServerListFilterBarCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIServerListFilterBarCompData](/vext/ref/fb/uiserverlistfilterbarcompdata/).                  |
| UIServerListFilterBarCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIServerListFilterBarCompData](/vext/ref/fb/uiserverlistfilterbarcompdata/).                                      |
| UIServerListFilterBarCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIServerListFilterBarCompData](/vext/ref/fb/uiserverlistfilterbarcompdata/). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIServerListFilterBarCompData](/vext/ref/fb/uiserverlistfilterbarcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIServerListFilterBarCompData](/vext/ref/fb/uiserverlistfilterbarcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
