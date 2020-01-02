---
title: NFSUIListDataBinding
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| NFSUIListDataBinding()                                                          | Create a new instance of this container type.                                                                                   |
| NFSUIListDataBinding(NFSUIListDataBinding other)                                | Create a reference copy of an instance of the same type.                                                                        |
| NFSUIListDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [NFSUIListDataBinding](NFSUIListDataBinding).                      |
| NFSUIListDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [NFSUIListDataBinding](NFSUIListDataBinding). |

## Properties

| Name    | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| refresh | [UIDataSourceInfo](UIDataSourceInfo) |             |
| items   | [UIListItem](UIListItem)\[\]         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [NFSUIListDataBinding](NFSUIListDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [NFSUIListDataBinding](NFSUIListDataBinding) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
