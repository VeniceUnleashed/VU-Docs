---
title: ChildBarrelComponentData
---
### Base Classes

[ChildComponentData](ChildComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ChildBarrelComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| ChildBarrelComponentData(ChildBarrelComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ChildBarrelComponentData([ChildComponentData](ChildComponentData) other)            | Upcast an instance of type [ChildComponentData](ChildComponentData) to [ChildBarrelComponentData](ChildBarrelComponentData).            |
| ChildBarrelComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [ChildBarrelComponentData](ChildBarrelComponentData).              |
| ChildBarrelComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [ChildBarrelComponentData](ChildBarrelComponentData).                      |
| ChildBarrelComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ChildBarrelComponentData](ChildBarrelComponentData).                    |
| ChildBarrelComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ChildBarrelComponentData](ChildBarrelComponentData).              |
| ChildBarrelComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChildBarrelComponentData](ChildBarrelComponentData). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChildBarrelComponentData](ChildBarrelComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChildBarrelComponentData](ChildBarrelComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
