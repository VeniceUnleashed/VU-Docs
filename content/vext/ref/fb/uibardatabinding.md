---
title: UIBarDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UIBarDataBinding()                                                          | Create a new instance of this container type.                                                                           |
| UIBarDataBinding(UIBarDataBinding other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UIBarDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UIBarDataBinding](/vext/ref/fb/uibardatabinding/).                      |
| UIBarDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIBarDataBinding](/vext/ref/fb/uibardatabinding/). |

## Properties

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| visibility | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| value      | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| color      | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| refresh    | bool                                 |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UIBarDataBinding](/vext/ref/fb/uibardatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIBarDataBinding](/vext/ref/fb/uibardatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
