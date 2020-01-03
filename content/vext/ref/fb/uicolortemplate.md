---
title: UIColorTemplate
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UIColorTemplate()                                                          | Create a new instance of this container type.                                                                         |
| UIColorTemplate(UIColorTemplate other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UIColorTemplate([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIColorTemplate](/vext/ref/fb/uicolortemplate/).                                      |
| UIColorTemplate([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIColorTemplate](/vext/ref/fb/uicolortemplate/). |

## Properties

| Name   | Type                   | Description |
| ------ | ---------------------- | ----------- |
| colors | [UIColor](/vext/ref/fb/uicolor/)\[\] |             |
| active | bool                   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UIColorTemplate](/vext/ref/fb/uicolortemplate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIColorTemplate](/vext/ref/fb/uicolortemplate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
