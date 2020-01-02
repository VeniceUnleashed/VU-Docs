---
title: HoldGroundOrderEntityData
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| HoldGroundOrderEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| HoldGroundOrderEntityData(HoldGroundOrderEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| HoldGroundOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [HoldGroundOrderEntityData](HoldGroundOrderEntityData).              |
| HoldGroundOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [HoldGroundOrderEntityData](HoldGroundOrderEntityData).                  |
| HoldGroundOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [HoldGroundOrderEntityData](HoldGroundOrderEntityData).                            |
| HoldGroundOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [HoldGroundOrderEntityData](HoldGroundOrderEntityData).                    |
| HoldGroundOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [HoldGroundOrderEntityData](HoldGroundOrderEntityData).              |
| HoldGroundOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HoldGroundOrderEntityData](HoldGroundOrderEntityData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [HoldGroundOrderEntityData](HoldGroundOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HoldGroundOrderEntityData](HoldGroundOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
