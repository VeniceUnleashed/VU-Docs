---
title: RichPresenceContextSetting (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| RichPresenceContextSetting()                                 | Create a new instance of this structure type.            |
| RichPresenceContextSetting(RichPresenceContextSetting other) | Create a reference copy of a structure of the same type. |

## Properties

| Name    | Type                                                 | Description |
| ------- | ---------------------------------------------------- | ----------- |
| context | [RichPresenceContext](RichPresenceContext)           |             |
| value   | [RichPresenceContextValue](RichPresenceContextValue) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [RichPresenceContextSetting](RichPresenceContextSetting) | [Clone](#clone) |            |

### Clone

> [RichPresenceContextSetting](RichPresenceContextSetting) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
