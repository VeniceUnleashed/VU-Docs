---
title: UICrosshairDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UICrosshairDataBinding()                                                          | Create a new instance of this container type.                                                                                       |
| UICrosshairDataBinding(UICrosshairDataBinding other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UICrosshairDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding/).                      |
| UICrosshairDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding/). |

## Properties

| Name                 | Type                                 | Description |
| -------------------- | ------------------------------------ | ----------- |
| dispersion           | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| zoomed               | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| visibility           | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| dispersionBaseOffset | number                               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
