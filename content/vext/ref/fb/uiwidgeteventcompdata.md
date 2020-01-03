---
title: UIWidgetEventCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIWidgetEventCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIWidgetEventCompData(UIWidgetEventCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIWidgetEventCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIWidgetEventCompData](/vext/ref/fb/uiwidgeteventcompdata/).                  |
| UIWidgetEventCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIWidgetEventCompData](/vext/ref/fb/uiwidgeteventcompdata/).                                      |
| UIWidgetEventCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIWidgetEventCompData](/vext/ref/fb/uiwidgeteventcompdata/). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIWidgetEventCompData](/vext/ref/fb/uiwidgeteventcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIWidgetEventCompData](/vext/ref/fb/uiwidgeteventcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
