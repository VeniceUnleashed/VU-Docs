---
title: UICombatAreaAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UICombatAreaAsset()                                                          | Create a new instance of this container type.                                                                             |
| UICombatAreaAsset(UICombatAreaAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UICombatAreaAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UICombatAreaAsset](UICombatAreaAsset).                                      |
| UICombatAreaAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UICombatAreaAsset](UICombatAreaAsset). |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| prefix | string |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UICombatAreaAsset](UICombatAreaAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UICombatAreaAsset](UICombatAreaAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
