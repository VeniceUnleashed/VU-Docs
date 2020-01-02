---
title: UIBarDataBinding
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UIBarDataBinding()                                                          | Create a new instance of this container type.                                                                           |
| UIBarDataBinding(UIBarDataBinding other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UIBarDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UIBarDataBinding](UIBarDataBinding).                      |
| UIBarDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIBarDataBinding](UIBarDataBinding). |

## Properties

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| visibility | [UIDataSourceInfo](UIDataSourceInfo) |             |
| value      | [UIDataSourceInfo](UIDataSourceInfo) |             |
| color      | [UIDataSourceInfo](UIDataSourceInfo) |             |
| refresh    | bool                                 |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UIBarDataBinding](UIBarDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIBarDataBinding](UIBarDataBinding) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
