---
title: RichPresenceContextSetting
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
| context | [RichPresenceContext](/vext/ref/fb/richpresencecontext/)           |             |
| value   | [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue/) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting/) | [Clone](#clone) |            |

### Clone

> [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
