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
| propertyTrack | [FloatPropertyTrackData](FloatPropertyTrackData) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [InputRecorderTrackData](InputRecorderTrackData) | [Clone](#clone) |            |

### Clone

> [InputRecorderTrackData](InputRecorderTrackData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
