---
title: UIButtonDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIButtonDataBinding()                                                          | Create a new instance of this container type.                                                                                 |
| UIButtonDataBinding(UIButtonDataBinding other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIButtonDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding/).                      |
| UIButtonDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding/). |

## Properties

| Name              | Type                                 | Description |
| ----------------- | ------------------------------------ | ----------- |
| buttonsDatasource | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| defaultButtonSet  | [UIButtonSet](/vext/ref/fb/uibuttonset/)           |             |
| visibility        | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| invertVisible     | bool                                 |             |
| visible           | bool                                 |             |
| inputOnRelease    | bool                                 |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
