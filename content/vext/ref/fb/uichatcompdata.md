---
title: UIChatCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UIChatCompData()                                                          | Create a new instance of this container type.                                                                       |
| UIChatCompData(UIChatCompData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UIChatCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIChatCompData](/vext/ref/fb/uichatcompdata/).                  |
| UIChatCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIChatCompData](/vext/ref/fb/uichatcompdata/).                                      |
| UIChatCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIChatCompData](/vext/ref/fb/uichatcompdata/). |

## Properties

| Name     | Type                         | Description |
| -------- | ---------------------------- | ----------- |
| settings | [ChatSettings](/vext/ref/fb/chatsettings/) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UIChatCompData](/vext/ref/fb/uichatcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIChatCompData](/vext/ref/fb/uichatcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
