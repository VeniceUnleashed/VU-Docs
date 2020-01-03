---
title: WidgetEventQueryPair
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| WidgetEventQueryPair()                           | Create a new instance of this structure type.            |
| WidgetEventQueryPair(WidgetEventQueryPair other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                               | Description |
| ------------ | ---------------------------------- | ----------- |
| name         | string                             |             |
| query        | [UIWidgetEventID](/vext/ref/fb/uiwidgeteventid/) |             |
| instanceName | string                             |             |
| isOutput     | bool                               |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair/) | [Clone](#clone) |            |

### Clone

> [WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
