---
title: UIHUDMessageBinding (Frostbite Container)
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIHUDMessageBinding()                                                          | Create a new instance of this container type.                                                                                 |
| UIHUDMessageBinding(UIHUDMessageBinding other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIHUDMessageBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UIHUDMessageBinding](UIHUDMessageBinding).                      |
| UIHUDMessageBinding([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIHUDMessageBinding](UIHUDMessageBinding). |

## Properties

| Name            | Type                                 | Description |
| --------------- | ------------------------------------ | ----------- |
| messageQuery    | [UIDataSourceInfo](UIDataSourceInfo) |             |
| visibilityQuery | [UIDataSourceInfo](UIDataSourceInfo) |             |
| numberOfRows    | number                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIHUDMessageBinding](UIHUDMessageBinding) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIHUDMessageBinding](UIHUDMessageBinding) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
