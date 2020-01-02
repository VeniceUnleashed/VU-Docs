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
| supported      | [AntRef](AntRef) |             |
| supportedPos   | [AntRef](AntRef) |             |
| forwardVector  | [AntRef](AntRef) |             |
| yaw            | [AntRef](AntRef) |             |
| pitch          | [AntRef](AntRef) |             |
| distToObject   | [AntRef](AntRef) |             |
| heightOfObject | [AntRef](AntRef) |             |
| undeploying    | [AntRef](AntRef) |             |
| animatedCamera | [AntRef](AntRef) |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [SupportedShootingBinding](SupportedShootingBinding) | [Clone](#clone) |            |

### Clone

> [SupportedShootingBinding](SupportedShootingBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
