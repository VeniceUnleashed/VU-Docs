---
title: UISettingsPage
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| UISettingsPage()                     | Create a new instance of this structure type.            |
| UISettingsPage(UISettingsPage other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                   | Description |
| -------------- | -------------------------------------- | ----------- |
| nameSid        | string                                 |             |
| settingsGroups | [UISettingsGroup](/vext/ref/fb/uisettingsgroup/)\[\] |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [UISettingsPage](/vext/ref/fb/uisettingspage/) | [Clone](#clone) |            |

### Clone

> [UISettingsPage](/vext/ref/fb/uisettingspage/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
