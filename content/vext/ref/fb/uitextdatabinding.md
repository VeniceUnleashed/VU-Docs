---
title: UITextDataBinding
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UITextDataBinding()                                                          | Create a new instance of this container type.                                                                             |
| UITextDataBinding(UITextDataBinding other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UITextDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UITextDataBinding](UITextDataBinding).                      |
| UITextDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITextDataBinding](UITextDataBinding). |

## Properties

| Name                 | Type                                 | Description |
| -------------------- | ------------------------------------ | ----------- |
| staticText           | string                               |             |
| textData             | [UIDataSourceInfo](UIDataSourceInfo) |             |
| visibility           | [UIDataSourceInfo](UIDataSourceInfo) |             |
| refresh              | bool                                 |             |
| overrideDirectAccess | bool                                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UITextDataBinding](UITextDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITextDataBinding](UITextDataBinding) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
