---
title: RiverData (Frostbite Container)
---
### Base Classes

[RibbonData](RibbonData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| RiverData()                                                          | Create a new instance of this container type.                                                             |
| RiverData(RiverData other)                                           | Create a reference copy of an instance of the same type.                                                  |
| RiverData([RibbonData](RibbonData) other)                            | Upcast an instance of type [RibbonData](RibbonData) to [RiverData](RiverData).                            |
| RiverData([VisualVectorShapeData](VisualVectorShapeData) other)      | Upcast an instance of type [VisualVectorShapeData](VisualVectorShapeData) to [RiverData](RiverData).      |
| RiverData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [RiverData](RiverData).                  |
| RiverData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [RiverData](RiverData).                      |
| RiverData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RiverData](RiverData).                    |
| RiverData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RiverData](RiverData).              |
| RiverData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RiverData](RiverData). |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [RiverData](RiverData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RiverData](RiverData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
