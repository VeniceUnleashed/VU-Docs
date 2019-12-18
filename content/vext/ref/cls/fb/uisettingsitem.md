---
title: UISettingsItem (Frostbite Structure)
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
| startEndSymbols | [UISettingSymbols](UISettingSymbols)   |             |
| setting         | [ProfileOptionData](ProfileOptionData) |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [UISettingsItem](UISettingsItem) | [Clone](#clone) |            |

### Clone

> [UISettingsItem](UISettingsItem) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
