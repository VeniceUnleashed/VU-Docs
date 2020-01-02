---
title: UICrosshairDataBinding
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UICrosshairDataBinding()                                                          | Create a new instance of this container type.                                                                                       |
| UICrosshairDataBinding(UICrosshairDataBinding other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UICrosshairDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UICrosshairDataBinding](UICrosshairDataBinding).                      |
| UICrosshairDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICrosshairDataBinding](UICrosshairDataBinding). |

## Properties

| Name                 | Type                                 | Description |
| -------------------- | ------------------------------------ | ----------- |
| dispersion           | [UIDataSourceInfo](UIDataSourceInfo) |             |
| zoomed               | [UIDataSourceInfo](UIDataSourceInfo) |             |
| visibility           | [UIDataSourceInfo](UIDataSourceInfo) |             |
| dispersionBaseOffset | number                               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UICrosshairDataBinding](UICrosshairDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICrosshairDataBinding](UICrosshairDataBinding) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
