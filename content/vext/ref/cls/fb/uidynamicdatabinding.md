---
title: UIDynamicDataBinding (Frostbite Container)
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIDynamicDataBinding()                                                          | Create a new instance of this container type.                                                                                   |
| UIDynamicDataBinding(UIDynamicDataBinding other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIDynamicDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UIDynamicDataBinding](UIDynamicDataBinding).                      |
| UIDynamicDataBinding([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIDynamicDataBinding](UIDynamicDataBinding). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| bindings | [UIDataSourceInfo](UIDataSourceInfo)\[\] |             |
| refresh  | bool                                     |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIDynamicDataBinding](UIDynamicDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIDynamicDataBinding](UIDynamicDataBinding) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
