---
title: StanceFilterComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| StanceFilterComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| StanceFilterComponentData(StanceFilterComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| StanceFilterComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [StanceFilterComponentData](StanceFilterComponentData).                      |
| StanceFilterComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StanceFilterComponentData](StanceFilterComponentData).                    |
| StanceFilterComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StanceFilterComponentData](StanceFilterComponentData).              |
| StanceFilterComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StanceFilterComponentData](StanceFilterComponentData). |

## Properties

| Name                   | Type                                     | Description |
| ---------------------- | ---------------------------------------- | ----------- |
| validStances           | number\[\]                               |             |
| stanceChangeTime       | number                                   |             |
| actionsToFilter        | [ActionSuppressor](ActionSuppressor)\[\] |             |
| filterSpecificActions  | bool                                     |             |
| undoParentStanceFilter | bool                                     |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StanceFilterComponentData](StanceFilterComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StanceFilterComponentData](StanceFilterComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
