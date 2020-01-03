---
title: UIWidgetPathBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIWidgetPathBinding()                                                          | Create a new instance of this container type.                                                                                 |
| UIWidgetPathBinding(UIWidgetPathBinding other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIWidgetPathBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding/).                      |
| UIWidgetPathBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding/). |

## Properties

| Name            | Type                                 | Description |
| --------------- | ------------------------------------ | ----------- |
| widgetPathQuery | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| visibility      | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
