---
title: UICombatAreaAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UICombatAreaAsset()                                                          | Create a new instance of this container type.                                                                             |
| UICombatAreaAsset(UICombatAreaAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UICombatAreaAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UICombatAreaAsset](/vext/ref/fb/uicombatareaasset/).                                      |
| UICombatAreaAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICombatAreaAsset](/vext/ref/fb/uicombatareaasset/). |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| prefix | string |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UICombatAreaAsset](/vext/ref/fb/uicombatareaasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICombatAreaAsset](/vext/ref/fb/uicombatareaasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
