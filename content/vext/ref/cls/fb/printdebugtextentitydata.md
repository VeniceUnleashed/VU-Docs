---
title: PrintDebugTextEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PrintDebugTextEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| PrintDebugTextEntityData(PrintDebugTextEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| PrintDebugTextEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PrintDebugTextEntityData](PrintDebugTextEntityData).                            |
| PrintDebugTextEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PrintDebugTextEntityData](PrintDebugTextEntityData).                    |
| PrintDebugTextEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PrintDebugTextEntityData](PrintDebugTextEntityData).              |
| PrintDebugTextEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PrintDebugTextEntityData](PrintDebugTextEntityData). |

## Properties

| Name      | Type                              | Description |
| --------- | --------------------------------- | ----------- |
| textColor | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| realm     | [Realm](Realm)                    |             |
| text      | string                            |             |
| enabled   | bool                              |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PrintDebugTextEntityData](PrintDebugTextEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PrintDebugTextEntityData](PrintDebugTextEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
