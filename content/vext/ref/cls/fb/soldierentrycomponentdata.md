---
title: SoldierEntryComponentData (Frostbite Container)
---
### Base Classes

[EntryComponentData](EntryComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierEntryComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierEntryComponentData(SoldierEntryComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierEntryComponentData([EntryComponentData](EntryComponentData) other)            | Upcast an instance of type [EntryComponentData](EntryComponentData) to [SoldierEntryComponentData](SoldierEntryComponentData).            |
| SoldierEntryComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierEntryComponentData](SoldierEntryComponentData).                      |
| SoldierEntryComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierEntryComponentData](SoldierEntryComponentData).                    |
| SoldierEntryComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierEntryComponentData](SoldierEntryComponentData).              |
| SoldierEntryComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierEntryComponentData](SoldierEntryComponentData). |

## Properties

| Name                     | Type                                           | Description |
| ------------------------ | ---------------------------------------------- | ----------- |
| aimingConstraints        | [AimingConstraintsData](AimingConstraintsData) |             |
| antEntryEnumeration      | [AntEnumeration](AntEnumeration)               |             |
| alignConstraintsToEntity | bool                                           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierEntryComponentData](SoldierEntryComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierEntryComponentData](SoldierEntryComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
