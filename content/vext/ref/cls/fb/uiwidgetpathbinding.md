---
title: UIWidgetPathBinding (Frostbite Container)
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIWidgetPathBinding()                                                          | Create a new instance of this container type.                                                                                 |
| UIWidgetPathBinding(UIWidgetPathBinding other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIWidgetPathBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UIWidgetPathBinding](UIWidgetPathBinding).                      |
| UIWidgetPathBinding([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIWidgetPathBinding](UIWidgetPathBinding). |

## Properties

| Name            | Type                                 | Description |
| --------------- | ------------------------------------ | ----------- |
| widgetPathQuery | [UIDataSourceInfo](UIDataSourceInfo) |             |
| visibility      | [UIDataSourceInfo](UIDataSourceInfo) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIWidgetPathBinding](UIWidgetPathBinding) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIWidgetPathBinding](UIWidgetPathBinding) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
