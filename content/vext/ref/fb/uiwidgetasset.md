---
title: UIWidgetAsset
---
### Base Classes

[UIAsset](/vext/ref/fb/uiasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| UIWidgetAsset()                                                          | Create a new instance of this container type.                                                                     |
| UIWidgetAsset(UIWidgetAsset other)                                       | Create a reference copy of an instance of the same type.                                                          |
| UIWidgetAsset([UIAsset](/vext/ref/fb/uiasset/) other)                                  | Upcast an instance of type [UIAsset](/vext/ref/fb/uiasset/) to [UIWidgetAsset](/vext/ref/fb/uiwidgetasset/).                                  |
| UIWidgetAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIWidgetAsset](/vext/ref/fb/uiwidgetasset/).                                      |
| UIWidgetAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIWidgetAsset](/vext/ref/fb/uiwidgetasset/). |

## Properties

| Name         | Type                                             | Description |
| ------------ | ------------------------------------------------ | ----------- |
| widgetEvents | [WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair/)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [UIWidgetAsset](/vext/ref/fb/uiwidgetasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIWidgetAsset](/vext/ref/fb/uiwidgetasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
