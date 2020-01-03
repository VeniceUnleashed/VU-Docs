---
title: RichPresenceProperty
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| RichPresenceProperty()                           | Create a new instance of this structure type.            |
| RichPresenceProperty(RichPresenceProperty other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| name         | string                                               |             |
| propertyType | [RichPresencePropertyType](/vext/ref/fb/richpresencepropertytype/) |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [RichPresenceProperty](/vext/ref/fb/richpresenceproperty/) | [Clone](#clone) |            |

### Clone

> [RichPresenceProperty](/vext/ref/fb/richpresenceproperty/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
