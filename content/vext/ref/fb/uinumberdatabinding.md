---
title: UINumberDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UINumberDataBinding()                                                          | Create a new instance of this container type.                                                                                 |
| UINumberDataBinding(UINumberDataBinding other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UINumberDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding/).                      |
| UINumberDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding/). |

## Properties

| Name     | Type                                 | Description |
| -------- | ------------------------------------ | ----------- |
| value    | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| numValue | number                               |             |
| refresh  | bool                                 |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
