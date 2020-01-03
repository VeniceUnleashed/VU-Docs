---
title: UIHUDMessageBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIHUDMessageBinding()                                                          | Create a new instance of this container type.                                                                                 |
| UIHUDMessageBinding(UIHUDMessageBinding other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIHUDMessageBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding/).                      |
| UIHUDMessageBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding/). |

## Properties

| Name            | Type                                 | Description |
| --------------- | ------------------------------------ | ----------- |
| messageQuery    | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| visibilityQuery | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| numberOfRows    | number                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIHUDMessageBinding](/vext/ref/fb/uihudmessagebinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
