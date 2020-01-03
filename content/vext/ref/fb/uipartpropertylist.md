---
title: UIPartPropertyList
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UIPartPropertyList()                                                          | Create a new instance of this container type.                                                                               |
| UIPartPropertyList(UIPartPropertyList other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UIPartPropertyList([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIPartPropertyList](/vext/ref/fb/uipartpropertylist/). |

## Properties

| Name            | Type                                     | Description |
| --------------- | ---------------------------------------- | ----------- |
| hudPropertyList | [UIPartProperties](/vext/ref/fb/uipartproperties/)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UIPartPropertyList](/vext/ref/fb/uipartpropertylist/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIPartPropertyList](/vext/ref/fb/uipartpropertylist/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
