---
title: UIPageHeaderBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIPageHeaderBinding()                                                          | Create a new instance of this container type.                                                                                 |
| UIPageHeaderBinding(UIPageHeaderBinding other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIPageHeaderBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding/).                      |
| UIPageHeaderBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding/). |

## Properties

| Name                 | Type                                                       | Description |
| -------------------- | ---------------------------------------------------------- | ----------- |
| header               | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/)                       |             |
| subHeader            | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/)                       |             |
| icon                 | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/)                       |             |
| staticHeader         | string                                                     |             |
| staticSubHeader      | string                                                     |             |
| staticIcon           | string                                                     |             |
| levelSpecificHeaders | [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader/)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
