---
title: InputRecorderTrackData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| InputRecorderTrackData()                             | Create a new instance of this structure type.            |
| InputRecorderTrackData(InputRecorderTrackData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                             | Description |
| ------------- | ------------------------------------------------ | ----------- |
| name          | string                                           |             |
| propertyTrack | [FloatPropertyTrackData](/vext/ref/fb/floatpropertytrackdata/) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata/) | [Clone](#clone) |            |

### Clone

> [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
