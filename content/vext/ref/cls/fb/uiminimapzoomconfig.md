---
title: UIMinimapZoomConfig (Frostbite Structure)
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
| state | [UIMinimapZoomState](UIMinimapZoomState) |             |
| data  | [MinimapData](MinimapData)               |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [UIMinimapZoomConfig](UIMinimapZoomConfig) | [Clone](#clone) |            |

### Clone

> [UIMinimapZoomConfig](UIMinimapZoomConfig) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
