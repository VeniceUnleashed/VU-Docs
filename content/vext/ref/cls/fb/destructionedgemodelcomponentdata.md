---
title: DestructionEdgeModelComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionEdgeModelComponentData()                                                          | Create a new instance of this container type.                                                                                                             |
| DestructionEdgeModelComponentData(DestructionEdgeModelComponentData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| DestructionEdgeModelComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DestructionEdgeModelComponentData](DestructionEdgeModelComponentData).                      |
| DestructionEdgeModelComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DestructionEdgeModelComponentData](DestructionEdgeModelComponentData).                    |
| DestructionEdgeModelComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DestructionEdgeModelComponentData](DestructionEdgeModelComponentData).              |
| DestructionEdgeModelComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DestructionEdgeModelComponentData](DestructionEdgeModelComponentData). |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestructionEdgeModelComponentData](DestructionEdgeModelComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DestructionEdgeModelComponentData](DestructionEdgeModelComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
