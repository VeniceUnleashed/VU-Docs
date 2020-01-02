---
title: InputModifierEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| InputModifierEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| InputModifierEntityData(InputModifierEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| InputModifierEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [InputModifierEntityData](InputModifierEntityData).                            |
| InputModifierEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [InputModifierEntityData](InputModifierEntityData).                    |
| InputModifierEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [InputModifierEntityData](InputModifierEntityData).              |
| InputModifierEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputModifierEntityData](InputModifierEntityData). |

## Properties

| Name    | Type                                         | Description |
| ------- | -------------------------------------------- | ----------- |
| action  | [EntryInputActionEnum](EntryInputActionEnum) |             |
| scale   | number                                       |             |
| offset  | number                                       |             |
| enabled | bool                                         |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InputModifierEntityData](InputModifierEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InputModifierEntityData](InputModifierEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
