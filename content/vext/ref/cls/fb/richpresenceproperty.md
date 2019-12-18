---
title: RichPresenceProperty (Frostbite Structure)
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
| propertyType | [RichPresencePropertyType](RichPresencePropertyType) |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [RichPresenceProperty](RichPresenceProperty) | [Clone](#clone) |            |

### Clone

> [RichPresenceProperty](RichPresenceProperty) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
