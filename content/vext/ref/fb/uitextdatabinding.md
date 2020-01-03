---
title: UITextDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UITextDataBinding()                                                          | Create a new instance of this container type.                                                                             |
| UITextDataBinding(UITextDataBinding other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UITextDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UITextDataBinding](/vext/ref/fb/uitextdatabinding/).                      |
| UITextDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITextDataBinding](/vext/ref/fb/uitextdatabinding/). |

## Properties

| Name                 | Type                                 | Description |
| -------------------- | ------------------------------------ | ----------- |
| staticText           | string                               |             |
| textData             | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| visibility           | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| refresh              | bool                                 |             |
| overrideDirectAccess | bool                                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UITextDataBinding](/vext/ref/fb/uitextdatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITextDataBinding](/vext/ref/fb/uitextdatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
