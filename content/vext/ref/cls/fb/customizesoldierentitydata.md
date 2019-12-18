---
title: CustomizeSoldierEntityData (Frostbite Container)
---
### Base Classes

[CustomizeBaseEntityData](CustomizeBaseEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeSoldierEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| CustomizeSoldierEntityData(CustomizeSoldierEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| CustomizeSoldierEntityData([CustomizeBaseEntityData](CustomizeBaseEntityData) other)  | Upcast an instance of type [CustomizeBaseEntityData](CustomizeBaseEntityData) to [CustomizeSoldierEntityData](CustomizeSoldierEntityData).  |
| CustomizeSoldierEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CustomizeSoldierEntityData](CustomizeSoldierEntityData).                            |
| CustomizeSoldierEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CustomizeSoldierEntityData](CustomizeSoldierEntityData).                    |
| CustomizeSoldierEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CustomizeSoldierEntityData](CustomizeSoldierEntityData).              |
| CustomizeSoldierEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CustomizeSoldierEntityData](CustomizeSoldierEntityData). |

## Properties

| Name                 | Type                                         | Description |
| -------------------- | -------------------------------------------- | ----------- |
| customizeSoldierData | [CustomizeSoldierData](CustomizeSoldierData) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomizeSoldierEntityData](CustomizeSoldierEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CustomizeSoldierEntityData](CustomizeSoldierEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
