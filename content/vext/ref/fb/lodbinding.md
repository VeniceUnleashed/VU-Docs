---
title: LodBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| LodBinding()                 | Create a new instance of this structure type.            |
| LodBinding(LodBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type             | Description |
| ----------------------- | ---------------- | ----------- |
| disableControllerUpdate | [AntRef](/vext/ref/fb/antref/) |             |
| disablePoseUpdate       | [AntRef](/vext/ref/fb/antref/) |             |
| distanceFromCamera      | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [LodBinding](/vext/ref/fb/lodbinding/) | [Clone](#clone) |            |

### Clone

> [LodBinding](/vext/ref/fb/lodbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
