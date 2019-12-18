---
title: EdgeModelComponentData (Frostbite Container)
---
### Base Classes

[DestructionEdgeModelComponentData](DestructionEdgeModelComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                          | Description                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EdgeModelComponentData()                                                                             | Create a new instance of this container type.                                                                                                          |
| EdgeModelComponentData(EdgeModelComponentData other)                                                 | Create a reference copy of an instance of the same type.                                                                                               |
| EdgeModelComponentData([DestructionEdgeModelComponentData](DestructionEdgeModelComponentData) other) | Upcast an instance of type [DestructionEdgeModelComponentData](DestructionEdgeModelComponentData) to [EdgeModelComponentData](EdgeModelComponentData). |
| EdgeModelComponentData([ComponentData](ComponentData) other)                                         | Upcast an instance of type [ComponentData](ComponentData) to [EdgeModelComponentData](EdgeModelComponentData).                                         |
| EdgeModelComponentData([GameObjectData](GameObjectData) other)                                       | Upcast an instance of type [GameObjectData](GameObjectData) to [EdgeModelComponentData](EdgeModelComponentData).                                       |
| EdgeModelComponentData([GameDataContainer](GameDataContainer) other)                                 | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EdgeModelComponentData](EdgeModelComponentData).                                 |
| EdgeModelComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other)                    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EdgeModelComponentData](EdgeModelComponentData).                    |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| rigidMeshes      | [RigidMeshAsset](RigidMeshAsset)\[\] |             |
| maxInstanceCount | number                               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EdgeModelComponentData](EdgeModelComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EdgeModelComponentData](EdgeModelComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
