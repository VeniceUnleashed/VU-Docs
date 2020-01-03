---
title: UIButtonDataBinding
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIButtonDataBinding()                                                          | Create a new instance of this container type.                                                                                 |
| UIButtonDataBinding(UIButtonDataBinding other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIButtonDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UIButtonDataBinding](UIButtonDataBinding).                      |
| UIButtonDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIButtonDataBinding](UIButtonDataBinding). |

## Properties

| Name              | Type                                 | Description |
| ----------------- | ------------------------------------ | ----------- |
| buttonsDatasource | [UIDataSourceInfo](UIDataSourceInfo) |             |
| defaultButtonSet  | [UIButtonSet](UIButtonSet)           |             |
| visibility        | [UIDataSourceInfo](UIDataSourceInfo) |             |
| invertVisible     | bool                                 |             |
| visible           | bool                                 |             |
| inputOnRelease    | bool                                 |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIButtonDataBinding](UIButtonDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIButtonDataBinding](UIButtonDataBinding) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
