---
title: SupportedShootingBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| SupportedShootingBinding()                               | Create a new instance of this structure type.            |
| SupportedShootingBinding(SupportedShootingBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type             | Description |
| -------------- | ---------------- | ----------- |
| supported      | [AntRef](/vext/ref/fb/antref/) |             |
| supportedPos   | [AntRef](/vext/ref/fb/antref/) |             |
| forwardVector  | [AntRef](/vext/ref/fb/antref/) |             |
| yaw            | [AntRef](/vext/ref/fb/antref/) |             |
| pitch          | [AntRef](/vext/ref/fb/antref/) |             |
| distToObject   | [AntRef](/vext/ref/fb/antref/) |             |
| heightOfObject | [AntRef](/vext/ref/fb/antref/) |             |
| undeploying    | [AntRef](/vext/ref/fb/antref/) |             |
| animatedCamera | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding/) | [Clone](#clone) |            |

### Clone

> [SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
