---
title: UIImageDataBinding (Frostbite Container)
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UIImageDataBinding()                                                          | Create a new instance of this container type.                                                                               |
| UIImageDataBinding(UIImageDataBinding other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UIImageDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UIImageDataBinding](UIImageDataBinding).                      |
| UIImageDataBinding([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIImageDataBinding](UIImageDataBinding). |

## Properties

| Name           | Type                                 | Description |
| -------------- | ------------------------------------ | ----------- |
| staticImageUrl | string                               |             |
| imageData      | [UIDataSourceInfo](UIDataSourceInfo) |             |
| visibility     | [UIDataSourceInfo](UIDataSourceInfo) |             |
| visible        | bool                                 |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UIImageDataBinding](UIImageDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIImageDataBinding](UIImageDataBinding) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
