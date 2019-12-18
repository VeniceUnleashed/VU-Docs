---
title: ServerBackendAttributeMapping (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                        | Description                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ServerBackendAttributeMapping()                                    | Create a new instance of this structure type.            |
| ServerBackendAttributeMapping(ServerBackendAttributeMapping other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                                             | Description |
| ------------ | ------------------------------------------------ | ----------- |
| attribute    | [ServerBackendAttribute](ServerBackendAttribute) |             |
| setting      | string                                           |             |
| defaultValue | string                                           |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [ServerBackendAttributeMapping](ServerBackendAttributeMapping) | [Clone](#clone) |            |

### Clone

> [ServerBackendAttributeMapping](ServerBackendAttributeMapping) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
