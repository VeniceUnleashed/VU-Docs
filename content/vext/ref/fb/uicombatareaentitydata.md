---
title: UICombatAreaEntityData
---
### Base Classes

[GameObjectData](/vext/ref/fb/gameobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UICombatAreaEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| UICombatAreaEntityData(UICombatAreaEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UICombatAreaEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [UICombatAreaEntityData](/vext/ref/fb/uicombatareaentitydata/).                    |
| UICombatAreaEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [UICombatAreaEntityData](/vext/ref/fb/uicombatareaentitydata/).              |
| UICombatAreaEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICombatAreaEntityData](/vext/ref/fb/uicombatareaentitydata/). |

## Properties

| Name  | Type                                   | Description |
| ----- | -------------------------------------- | ----------- |
| asset | [UICombatAreaAsset](/vext/ref/fb/uicombatareaasset/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UICombatAreaEntityData](/vext/ref/fb/uicombatareaentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICombatAreaEntityData](/vext/ref/fb/uicombatareaentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
