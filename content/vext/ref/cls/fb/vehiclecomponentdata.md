---
title: VehicleComponentData (Frostbite Container)
---
### Base Classes

[ChassisComponentData](ChassisComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VehicleComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| VehicleComponentData(VehicleComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VehicleComponentData([ChassisComponentData](ChassisComponentData) other)        | Upcast an instance of type [ChassisComponentData](ChassisComponentData) to [VehicleComponentData](VehicleComponentData).        |
| VehicleComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [VehicleComponentData](VehicleComponentData).              |
| VehicleComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [VehicleComponentData](VehicleComponentData).                      |
| VehicleComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleComponentData](VehicleComponentData).                    |
| VehicleComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleComponentData](VehicleComponentData).              |
| VehicleComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleComponentData](VehicleComponentData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleComponentData](VehicleComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleComponentData](VehicleComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
