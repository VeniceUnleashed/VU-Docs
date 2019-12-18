---
title: UISettingsPage (Frostbite Structure)
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
| settingsGroups | [UISettingsGroup](UISettingsGroup)\[\] |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [UISettingsPage](UISettingsPage) | [Clone](#clone) |            |

### Clone

> [UISettingsPage](UISettingsPage) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
