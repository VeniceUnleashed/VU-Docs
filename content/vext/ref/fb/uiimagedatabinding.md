---
title: UIImageDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UIImageDataBinding()                                                          | Create a new instance of this container type.                                                                               |
| UIImageDataBinding(UIImageDataBinding other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UIImageDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding/).                      |
| UIImageDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding/). |

## Properties

| Name           | Type                                 | Description |
| -------------- | ------------------------------------ | ----------- |
| staticImageUrl | string                               |             |
| imageData      | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| visibility     | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| visible        | bool                                 |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIImageDataBinding](/vext/ref/fb/uiimagedatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
