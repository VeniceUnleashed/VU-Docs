---
title: UIMinimapZoomConfig
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| UIMinimapZoomConfig()                          | Create a new instance of this structure type.            |
| UIMinimapZoomConfig(UIMinimapZoomConfig other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                                     | Description |
| ----- | ---------------------------------------- | ----------- |
| state | [UIMinimapZoomState](/vext/ref/fb/uiminimapzoomstate/) |             |
| data  | [MinimapData](/vext/ref/fb/minimapdata/)               |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig/) | [Clone](#clone) |            |

### Clone

> [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
