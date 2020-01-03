---
title: NFSUIListDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| NFSUIListDataBinding()                                                          | Create a new instance of this container type.                                                                                   |
| NFSUIListDataBinding(NFSUIListDataBinding other)                                | Create a reference copy of an instance of the same type.                                                                        |
| NFSUIListDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding/).                      |
| NFSUIListDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding/). |

## Properties

| Name    | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| refresh | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| items   | [UIListItem](/vext/ref/fb/uilistitem/)\[\]         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [NFSUIListDataBinding](/vext/ref/fb/nfsuilistdatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
