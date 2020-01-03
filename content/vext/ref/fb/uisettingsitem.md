---
title: UISettingsItem
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| UISettingsItem()                     | Create a new instance of this structure type.            |
| UISettingsItem(UISettingsItem other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type                                   | Description |
| --------------- | -------------------------------------- | ----------- |
| nameSid         | string                                 |             |
| startEndSymbols | [UISettingSymbols](/vext/ref/fb/uisettingsymbols/)   |             |
| setting         | [ProfileOptionData](/vext/ref/fb/profileoptiondata/) |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [UISettingsItem](/vext/ref/fb/uisettingsitem/) | [Clone](#clone) |            |

### Clone

> [UISettingsItem](/vext/ref/fb/uisettingsitem/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
