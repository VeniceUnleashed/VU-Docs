---
title: ServerBackendAttributeMapping
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
| attribute    | [ServerBackendAttribute](/vext/ref/fb/serverbackendattribute/) |             |
| setting      | string                                           |             |
| defaultValue | string                                           |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping/) | [Clone](#clone) |            |

### Clone

> [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
