---
title: UICombatAreaEntityData (Frostbite Container)
---
### Base Classes

[GameObjectData](GameObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UICombatAreaEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| UICombatAreaEntityData(UICombatAreaEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UICombatAreaEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [UICombatAreaEntityData](UICombatAreaEntityData).                    |
| UICombatAreaEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [UICombatAreaEntityData](UICombatAreaEntityData).              |
| UICombatAreaEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UICombatAreaEntityData](UICombatAreaEntityData). |

## Properties

| Name  | Type                                   | Description |
| ----- | -------------------------------------- | ----------- |
| asset | [UICombatAreaAsset](UICombatAreaAsset) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UICombatAreaEntityData](UICombatAreaEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UICombatAreaEntityData](UICombatAreaEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
