---
title: CameraLeapData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| CameraLeapData()                     | Create a new instance of this structure type.            |
| CameraLeapData(CameraLeapData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                                                    | Description |
| ----------- | ------------------------------------------------------- | ----------- |
| transform   | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| time        | number                                                  |             |
| fovModifier | number                                                  |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [CameraLeapData](CameraLeapData) | [Clone](#clone) |            |

### Clone

> [CameraLeapData](CameraLeapData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
