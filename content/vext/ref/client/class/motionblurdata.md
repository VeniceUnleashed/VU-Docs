---
title: MotionBlurData
---
## Description

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| MotionBlurData()                     | Create a new instance of this container type.            |
| MotionBlurData(MotionBlurData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                   | Type                               | Description |
| ---------------------- | ---------------------------------- | ----------- |
| realm                  | [Realm](/vext/ref/fb/realm) |             |
| cutoffGradientScale    | number                             |             |
| motionBlurCutoffRadius | number                             |             |
| motionBlurEnable       | bool                               |             |

## Methods

| Type                                                  | Name            | Parameters |
| ----------------------------------------------------- | --------------- | ---------- |
| [MotionBlurData](/vext/ref/client/class/motionblurdata) | [Clone](#clone) |            |

### Clone

> [MotionBlurData](/vext/ref/client/class/motionblurdata) **Clone**()

Creates a shallow-copy clone of the instance.
