---
title: UISettingsGroup
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| UISettingsGroup()                      | Create a new instance of this structure type.            |
| UISettingsGroup(UISettingsGroup other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| nameSid       | string                               |             |
| screenColumn  | number                               |             |
| settingsItems | [UISettingsItem](/vext/ref/fb/uisettingsitem/)\[\] |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [UISettingsGroup](/vext/ref/fb/uisettingsgroup/) | [Clone](#clone) |            |

### Clone

> [UISettingsGroup](/vext/ref/fb/uisettingsgroup/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
